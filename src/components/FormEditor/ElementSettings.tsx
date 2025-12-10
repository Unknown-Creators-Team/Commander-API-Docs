import React from 'react';
import { ModalElement, ActionButton } from './types';
import ActionEditor from './ActionEditor';
import styles from './styles.module.css';

interface ElementSettingsProps {
  element: ModalElement | ActionButton;
  onChange: (updated: ModalElement | ActionButton) => void;
  onDelete: () => void;
}

export default function ElementSettings({ element, onChange, onDelete }: ElementSettingsProps) {
  // Type guard or check
  const isModalElement = (el: any): el is ModalElement => 'typ' in el && el.typ !== 'act' && el.typ !== 'msg' && el.typ !== 'mdl';
  const isActionButton = (el: any): el is ActionButton => !('typ' in el);

  const handleChange = (key: string, value: any) => {

    if (key === 'typ' && isModalElement(element)) {
      // Reset type-specific properties when type changes
      let resetValues: Partial<ModalElement> = {};
      if (value === 'dd') {
        resetValues = { opt: [], def: 0 };
      } else if (value === 's') {
        resetValues = { min: 0, max: 100, stp: 1, def: 0 };
      } else if (value === 'tf') {
        resetValues = { plh: '', def: '' };
      } else if (value === 't') {
        resetValues = { def: false };
      }
      onChange({ ...element, typ: value, ...resetValues as any });
      return;
    }

    onChange({ ...element, [key]: value });
  };

  return (
    <div className={styles.settingsPanel}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        {/* Title removed as it is now handled by the frame */}
        <div style={{ flex: 1 }}></div>
        <button className={styles.removeButton} onClick={onDelete} title="削除">×</button>
      </div>

      {isActionButton(element) && (
        <>
          <div className={styles.formGroup}>
            <label>ボタンテキスト</label>
            <input 
              type="text" 
              value={element.txt} 
              onChange={(e) => handleChange('txt', e.target.value)} 
            />
          </div>
          <div className={styles.formGroup}>
            <label>画像パス (任意)</label>
            <input 
              type="text" 
              value={element.img || ''} 
              onChange={(e) => handleChange('img', e.target.value)} 
              placeholder="textures/items/diamond"
            />
          </div>
          
          <div style={{ marginTop: '10px', borderTop: '1px solid var(--ifm-color-emphasis-200)', paddingTop: '10px' }}>
            <strong>アクション設定</strong>
            <ActionEditor act={element.act} onActChange={(newAct) => handleChange('act', newAct)} />
          </div>
        </>
      )}

      {isModalElement(element) && (
        <>
          <div className={styles.formGroup}>
            <label>種類</label>
            <select 
              value={element.typ} 
              onChange={(e) => handleChange('typ', e.target.value)}
            >
              <option value="dd">ドロップダウン (Dropdown)</option>
              <option value="s">スライダー (Slider)</option>
              <option value="tf">テキスト入力 (Text Field)</option>
              <option value="t">トグル (Toggle)</option>
            </select>
          </div>


          <div className={styles.formGroup}>
            <label>ラベル</label>
            <input 
              type="text" 
              value={element.lbl} 
              onChange={(e) => handleChange('lbl', e.target.value)} 
            />
          </div>

          <div className={styles.formGroup}>
            <label>保存先 (スコア名/タグ名)</label>
            <input 
              type="text" 
              value={element.act} 
              onChange={(e) => handleChange('act', e.target.value)} 
            />
          </div>

          {element.typ === 'dd' && (
            <>
              <div className={styles.formGroup}>
                <label>選択肢 (カンマ区切り)</label>
                <input 
                  type="text" 
                  value={element.opt.join(',')} 
                  onChange={(e) => handleChange('opt', e.target.value.split(','))} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>デフォルトのインデックス</label>
                <input 
                  type="number" 
                  value={element.def ?? 0} 
                  onChange={(e) => handleChange('def', parseInt(e.target.value))} 
                />
              </div>
            </>
          )}

          {element.typ === 's' && (
            <>
              <div className={styles.formGroup}>
                <label>最小値 (Min)</label>
                <input 
                  type="number" 
                  value={element.min} 
                  onChange={(e) => handleChange('min', parseFloat(e.target.value))} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>最大値 (Max)</label>
                <input 
                  type="number" 
                  value={element.max} 
                  onChange={(e) => handleChange('max', parseFloat(e.target.value))} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>ステップ (Step)</label>
                <input 
                  type="number" 
                  value={element.stp} 
                  onChange={(e) => handleChange('stp', parseFloat(e.target.value))} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>デフォルト値</label>
                <input 
                  type="number" 
                  value={element.def ?? element.min} 
                  onChange={(e) => handleChange('def', parseFloat(e.target.value))} 
                />
              </div>
            </>
          )}

          {element.typ === 'tf' && (
            <>
              <div className={styles.formGroup}>
                <label>プレースホルダー</label>
                <input 
                  type="text" 
                  value={element.plh} 
                  onChange={(e) => handleChange('plh', e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>デフォルトテキスト</label>
                <input 
                  type="text" 
                  value={element.def || ''} 
                  onChange={(e) => handleChange('def', e.target.value)} 
                />
              </div>
            </>
          )}

          {element.typ === 't' && (
            <div className={styles.formGroup}>
              <label>デフォルト状態</label>
              <select 
                value={element.def ? 'true' : 'false'} 
                onChange={(e) => handleChange('def', e.target.value === 'true')}
              >
                <option value="false">OFF</option>
                <option value="true">ON</option>
              </select>
            </div>
          )}
        </>
      )}
    </div>
  );
}
