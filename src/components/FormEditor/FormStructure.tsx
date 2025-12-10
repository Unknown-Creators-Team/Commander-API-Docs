import React from 'react';
import { FormData, ActionButton, ModalElement } from './types';
import ElementList from './ElementList';
import FormProperties from './FormProperties';
import styles from './styles.module.css';

interface FormStructureProps {
  formData: FormData;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onAdd: () => void;
  onReorder: (elements: any[]) => void;
  onFormChange: (key: string, value: any) => void;
  onMessageButtonChange: (btn: 'bt1' | 'bt2', key: string, value: any) => void;
  onElementUpdate: (updated: ActionButton | ModalElement) => void;
  onElementDelete: (id: string) => void;
}

export default function FormStructure({ 
  formData, 
  selectedId, 
  onSelect, 
  onAdd, 
  onReorder,
  onFormChange,
  onMessageButtonChange,
  onElementUpdate,
  onElementDelete
}: FormStructureProps) {
  const isFormSettingsSelected = selectedId === 'form-settings';

  return (
    <div className={styles.structurePanel}>
      <div className={styles.accordionItem}>
        <div 
          className={`${styles.accordionHeader} ${isFormSettingsSelected ? styles.selected : ''}`}
          onClick={() => onSelect(isFormSettingsSelected ? null : 'form-settings')}
        >
          <span>フォーム設定</span>
          <span className={styles.accordionIcon}>{isFormSettingsSelected ? '▼' : '▶'}</span>
        </div>
        {isFormSettingsSelected && (
          <div className={styles.accordionContent}>
            <FormProperties 
              formData={formData} 
              onChange={onFormChange}
              onMessageButtonChange={onMessageButtonChange}
            />
          </div>
        )}
      </div>

      {(formData.typ === 'act' || formData.typ === 'mdl') && (
        <div className={styles.elementSection}>
          <ElementList 
            elements={formData.typ === 'act' ? formData.btn : formData.cnt}
            onReorder={onReorder}
            onSelect={onSelect}
            selectedId={selectedId}
            onAdd={onAdd}
            onUpdate={onElementUpdate}
            onDelete={onElementDelete}
          />
        </div>
      )}
    </div>
  );
}
