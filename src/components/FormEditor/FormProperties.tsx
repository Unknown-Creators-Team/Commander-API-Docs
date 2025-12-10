import React from 'react';
import { FormData, MessageForm } from './types';
import ActionEditor from './ActionEditor';
import styles from './styles.module.css';

interface FormPropertiesProps {
  formData: FormData;
  onChange: (key: string, value: any) => void;
  onMessageButtonChange: (btn: 'bt1' | 'bt2', key: string, value: any) => void;
}

export default function FormProperties({ formData, onChange, onMessageButtonChange }: FormPropertiesProps) {
  return (
    <div className={styles.settingsPanel}>
      {/* Title removed as it is now handled by the frame */}
      <div className={styles.formGroup}>
        <label>タイトル</label>
        <input 
          type="text" 
          value={formData.ttl} 
          onChange={(e) => onChange('ttl', e.target.value)} 
        />
      </div>

      {(formData.typ === 'act' || formData.typ === 'msg') && (
        <div className={styles.formGroup}>
          <label>本文</label>
          <textarea 
            value={formData.bdy || ''} 
            onChange={(e) => onChange('bdy', e.target.value)} 
          />
        </div>
      )}

      {formData.typ === 'msg' && (
        <>
          <h3>ボタン設定</h3>
          <div className={styles.formGroup}>
            <label>ボタン1 テキスト</label>
            <input 
              type="text" 
              value={(formData as MessageForm).bt1.txt} 
              onChange={(e) => onMessageButtonChange('bt1', 'txt', e.target.value)} 
            />
          </div>
          <div style={{ marginBottom: '15px', paddingLeft: '10px', borderLeft: '2px solid var(--ifm-color-emphasis-200)' }}>
            <ActionEditor 
              act={(formData as MessageForm).bt1.act} 
              onActChange={(newAct) => onMessageButtonChange('bt1', 'act', newAct)} 
            />
          </div>

          <div className={styles.formGroup}>
            <label>ボタン2 テキスト</label>
            <input 
              type="text" 
              value={(formData as MessageForm).bt2.txt} 
              onChange={(e) => onMessageButtonChange('bt2', 'txt', e.target.value)} 
            />
          </div>
          <div style={{ marginBottom: '15px', paddingLeft: '10px', borderLeft: '2px solid var(--ifm-color-emphasis-200)' }}>
            <ActionEditor 
              act={(formData as MessageForm).bt2.act} 
              onActChange={(newAct) => onMessageButtonChange('bt2', 'act', newAct)} 
            />
          </div>
        </>
      )}
    </div>
  );
}
