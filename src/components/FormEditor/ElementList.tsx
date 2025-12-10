import React from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ActionButton, ModalElement } from './types';
import ElementSettings from './ElementSettings';
import styles from './styles.module.css';

interface ElementListProps {
  elements: (ActionButton | ModalElement)[];
  onReorder: (elements: (ActionButton | ModalElement)[]) => void;
  onSelect: (id: string | null) => void;
  selectedId: string | null;
  onAdd: () => void;
  onUpdate: (updated: ActionButton | ModalElement) => void;
  onDelete: (id: string) => void;
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  renderSettings?: () => React.ReactNode;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children, isSelected, onClick, renderSettings }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.accordionItem}>
      <div 
        {...attributes} 
        {...listeners}
        className={`${styles.accordionHeader} ${isSelected ? styles.selected : ''}`}
        onClick={onClick}
      >
        <span>{children}</span>
        <span className={styles.accordionIcon}>{isSelected ? '▼' : '▶'}</span>
      </div>
      {isSelected && renderSettings && (
        <div className={styles.accordionContent} onPointerDown={(e) => e.stopPropagation()}>
           {renderSettings()}
        </div>
      )}
    </div>
  );
};

export default function ElementList({ elements, onReorder, onSelect, selectedId, onAdd, onUpdate, onDelete }: ElementListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = elements.findIndex((item) => item.id === active.id);
      const newIndex = elements.findIndex((item) => item.id === over.id);
      onReorder(arrayMove(elements, oldIndex, newIndex));
    }
  };

  return (
    <div className={styles.elementList}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Title removed as it is now handled by the frame */}
        <div style={{ flex: 1 }}></div>
        <button className={styles.addButton} onClick={onAdd}>+ 追加</button>
      </div>
      
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={elements.map(e => e.id)}
          strategy={verticalListSortingStrategy}
          children={undefined}
        >
          {elements.map((element) => (
            <SortableItem 
              key={element.id} 
              id={element.id}
              isSelected={element.id === selectedId}
              onClick={() => onSelect(element.id === selectedId ? null : element.id)}
              renderSettings={() => (
                <ElementSettings 
                  element={element} 
                  onChange={onUpdate}
                  onDelete={() => onDelete(element.id)}
                />
              )}
            >
              {'txt' in element ? `ボタン: ${element.txt}` : `${element.typ}: ${element.lbl}`}
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
