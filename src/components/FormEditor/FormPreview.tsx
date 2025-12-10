import React from 'react';
import { FormData, ActionForm, MessageForm, ModalForm } from './types';
import styles from './styles.module.css';

interface FormPreviewProps {
  formData: FormData;
}

export default function FormPreview({ formData }: FormPreviewProps) {
  const renderActionForm = (form: ActionForm) => (
    <div className={styles.mcForm}>
      <div className={styles.mcHeader}>
        <span className={styles.mcTitle}>{form.ttl}</span>
        <span className={styles.mcClose}>X</span>
      </div>
      {form.bdy && <div className={styles.mcBody}>{form.bdy}</div>}
      <div className={styles.mcButtonList}>
        {form.btn.map((btn) => (
          <div key={btn.id} className={styles.mcButton}>
            {btn.txt}
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessageForm = (form: MessageForm) => (
    <div className={styles.mcForm}>
      <div className={styles.mcHeader}>
        <span className={styles.mcTitle}>{form.ttl}</span>
        <span className={styles.mcClose}>X</span>
      </div>
      <div className={styles.mcBody}>{form.bdy}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div className={styles.mcButton}>{form.bt1.txt}</div>
        <div className={styles.mcButton}>{form.bt2.txt}</div>
      </div>
    </div>
  );

  const renderModalForm = (form: ModalForm) => (
    <div className={styles.mcForm}>
      <div className={styles.mcHeader}>
        <span className={styles.mcTitle}>{form.ttl}</span>
        <span className={styles.mcClose}>X</span>
      </div>
      <div className={styles.mcContent}>
        {form.cnt.map((el) => (
          <div key={el.id} style={{ marginBottom: '10px' }}>
            <span className={styles.mcLabel}>{el.lbl}</span>
            
            {el.typ === 'dd' && (
              <div className={styles.mcDropdown}>
                {el.opt[el.def || 0] || el.opt[0] || 'Select...'} ▼
              </div>
            )}

            {el.typ === 's' && (
              <div className={styles.mcSliderContainer}>
                <input 
                  type="range" 
                  min={el.min} 
                  max={el.max} 
                  step={el.stp} 
                  defaultValue={el.def ?? el.min} 
                  className={styles.mcSlider} 
                  disabled
                />
                <div style={{ textAlign: 'right', fontSize: '0.8em', color: '#404040' }}>{el.def ?? el.min}</div>
              </div>
            )}

            {el.typ === 'tf' && (
              <input 
                type="text" 
                className={styles.mcInput} 
                placeholder={el.plh} 
                defaultValue={el.def || ''} 
                disabled
              />
            )}

            {el.typ === 't' && (
              <div className={styles.mcToggle}>
                <div className={`${styles.mcToggleSwitch} ${el.def ? styles.on : ''}`}>
                  <div className={styles.mcToggleKnob}></div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className={styles.mcButton} style={{ marginTop: '10px' }}>Submit</div>
      </div>
    </div>
  );

  return (
    <div className={styles.previewContainer}>
      {formData.typ === 'act' && renderActionForm(formData)}
      {formData.typ === 'msg' && renderMessageForm(formData)}
      {formData.typ === 'mdl' && renderModalForm(formData)}
    </div>
  );
}
