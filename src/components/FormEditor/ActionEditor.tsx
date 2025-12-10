import React from 'react';
import styles from './styles.module.css';
import { FormActions } from './types';

interface ActionEditorProps {
  act: FormActions;
  onActChange: (newAct: FormActions) => void;
}

export default function ActionEditor({ act, onActChange }: ActionEditorProps) {
  const actionType = act?.typ || '';
    
  const handleTypeChange = (newType: FormActions['typ']) => {
    let newVal: Extract<FormActions, { typ: typeof newType }>['val'] = '';
    if (newType === 'ss' || newType === 'as') {
      newVal = { obj: '', val: 0 };
    }
    onActChange({ typ: newType, val: newVal } as FormActions);
  };

  const handleValChange = (val: any) => {
    onActChange({ ...act, val });
  };

  const handleScoreValChange = (key: string, value: any) => {
    onActChange({ ...act, val: { ...(act.val as any), [key]: value } } as FormActions);
  };

  return (
    <div className={styles.actionEditor}>
      <div className={styles.formGroup}>
        <label>アクションの種類</label>
        <select value={actionType} onChange={(e) => handleTypeChange(e.target.value)}>
          <option value="">なし (none)</option>
          <option value="r">コマンドを実行 (run_command)</option>
          <option value="at">タグを追加 (add_tag)</option>
          <option value="rt">タグを削除 (remove_tag)</option>
          <option value="ss">スコアを設定 (set_score)</option>
          <option value="as">スコアを追加 (add_score)</option>
        </select>
      </div>

      {(actionType === 'r' || actionType === 'at' || actionType === 'rt') && (
        <div className={styles.formGroup}>
          <label>{actionType === 'r' ? 'コマンド' : 'タグ名'}</label>
          <input 
            type="text" 
            value={act?.val || ''} 
            onChange={(e) => handleValChange(e.target.value)} 
            placeholder={actionType === 'r' ? 'say Hello' : 'tag_name'}
          />
        </div>
      )}

      {(actionType === 'ss' || actionType === 'as') && (
        <>
          <div className={styles.formGroup}>
            <label>スコアボード名 (obj)</label>
            <input 
              type="text" 
              value={typeof act?.val === 'object' && act.val !== null ? act.val.obj || '' : ''} 
              onChange={(e) => handleScoreValChange('obj', e.target.value)} 
            />
          </div>
          <div className={styles.formGroup}>
            <label>ターゲット (tgt) (省略可)</label>
            <input 
              type="text" 
              value={typeof act?.val === 'object' && act.val !== null ? act.val.tgt || '' : ''} 
              onChange={(e) => handleScoreValChange('tgt', e.target.value)} 
              placeholder="@s"
            />
          </div>
          <div className={styles.formGroup}>
            <label>値 (val)</label>
            <input 
              type="number" 
              value={typeof act?.val === 'object' && act.val !== null ? act.val.val || 0 : 0} 
              onChange={(e) => handleScoreValChange('val', parseInt(e.target.value))} 
            />
          </div>
        </>
      )}
    </div>
  );
}
