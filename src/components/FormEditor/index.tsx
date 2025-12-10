import React, { useState } from 'react';
import { FormData, ActionForm, MessageForm, ModalForm, ActionButton, ModalElement } from './types';
import FormStructure from './FormStructure';
import FormProperties from './FormProperties';
import ElementSettings from './ElementSettings';
import FormPreview from './FormPreview';
import OutputDisplay from './OutputDisplay';
import styles from './styles.module.css';

const initialActionForm: ActionForm = {
  typ: 'act',
  ttl: 'メニュー',
  bdy: 'オプションを選択してください',
  btn: [
    { id: '1', txt: '選択肢 1' },
    { id: '2', txt: '選択肢 2' }
  ]
};

const initialMessageForm: MessageForm = {
  typ: 'msg',
  ttl: '確認',
  bdy: '本当に実行しますか？',
  bt1: { txt: 'はい' },
  bt2: { txt: 'いいえ' }
};

const initialModalForm: ModalForm = {
  typ: 'mdl',
  ttl: '設定',
  cnt: [
    { id: '1', typ: 'dd', lbl: '難易度', opt: ['簡単', '普通', '難しい'], act: 'difficulty' },
    { id: '2', typ: 's', lbl: '音量', min: 0, max: 100, stp: 10, def: 50, act: 'volume' },
    { id: '3', typ: 't', lbl: 'PvP', def: true, act: 'pvp' }
  ]
};

export default function FormEditor() {
  const [formType, setFormType] = useState<'act' | 'msg' | 'mdl'>('mdl');
  const [formData, setFormData] = useState<FormData>(initialModalForm);
  const [selectedId, setSelectedId] = useState<string | null>('form-settings');

  const handleTypeChange = (type: 'act' | 'msg' | 'mdl') => {
    setFormType(type);
    setSelectedId('form-settings');
    if (type === 'act') setFormData(initialActionForm);
    else if (type === 'msg') setFormData(initialMessageForm);
    else if (type === 'mdl') setFormData(initialModalForm);
  };

  const handleFormPropertyChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleMessageButtonChange = (btn: 'bt1' | 'bt2', key: string, value: any) => {
    if (formData.typ === 'msg') {
      setFormData({
        ...formData,
        [btn]: { ...formData[btn], [key]: value }
      });
    }
  };

  const handleAddElement = () => {
    const newId = Math.random().toString(36).substring(2, 11)
    if (formData.typ === 'act') {
      const newBtn: ActionButton = { id: newId, txt: '新しいボタン' };
      setFormData({ ...formData, btn: [...formData.btn, newBtn] });
      setSelectedId(newId);
    } else if (formData.typ === 'mdl') {
      const newEl: ModalElement = { id: newId, typ: 'tf', lbl: '新しい要素', plh: '', act: 'tag' };
      setFormData({ ...formData, cnt: [...formData.cnt, newEl] });
      setSelectedId(newId);
    }
  };

  const handleDeleteElement = (id: string) => {
    if (formData.typ === 'act') {
      setFormData({ ...formData, btn: formData.btn.filter(b => b.id !== id) });
    } else if (formData.typ === 'mdl') {
      setFormData({ ...formData, cnt: formData.cnt.filter(c => c.id !== id) });
    }
    if (selectedId === id) {
      setSelectedId('form-settings');
    }
  };

  const handleReorderElements = (elements: any[]) => {
    if (formData.typ === 'act') {
      setFormData({ ...formData, btn: elements });
    } else if (formData.typ === 'mdl') {
      setFormData({ ...formData, cnt: elements });
    }
  };

  const handleUpdateElement = (updatedElement: any) => {
    if (formData.typ === 'act') {
      const newBtns = formData.btn.map(b => b.id === updatedElement.id ? updatedElement : b);
      setFormData({ ...formData, btn: newBtns });
    } else if (formData.typ === 'mdl') {
      const newCnt = formData.cnt.map(c => c.id === updatedElement.id ? updatedElement : c);
      setFormData({ ...formData, cnt: newCnt });
    }
  };

  const getSelectedElement = () => {
    if (selectedId === 'form-settings' || selectedId === null) return null;
    if (formData.typ === 'act') {
      return formData.btn.find(b => b.id === selectedId);
    } else if (formData.typ === 'mdl') {
      return formData.cnt.find(c => c.id === selectedId);
    }
    return null;
  };

  const selectedElement = getSelectedElement();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.typeSelector}>
          <label>フォームの種類:</label>
          <select value={formType} onChange={(e) => handleTypeChange(e.target.value as any)}>
            <option value="act">アクションフォーム (Action Form)</option>
            <option value="msg">メッセージフォーム (Message Form)</option>
            <option value="mdl">モーダルフォーム (Modal Form)</option>
          </select>
        </div>
        
        <div className={styles.componentFrame}>
          <h3 className={styles.frameTitle}>エディタ</h3>
          <FormStructure 
            formData={formData}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onAdd={handleAddElement}
            onReorder={handleReorderElements}
            onFormChange={handleFormPropertyChange}
            onMessageButtonChange={handleMessageButtonChange}
            onElementUpdate={handleUpdateElement}
            onElementDelete={handleDeleteElement}
          />
        </div>
      </div>

      <div className={styles.previewArea}>
        <h2>プレビュー</h2>
        <FormPreview formData={formData} />
        
        <div className={styles.outputArea}>
            <OutputDisplay formData={formData} />
        </div>
      </div>
    </div>
  );
}
