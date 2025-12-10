import React from 'react';
import { FormData } from './types';
import { generateJSON, generateESONCommand } from './utils';
import styles from './styles.module.css';

interface OutputDisplayProps {
  formData: FormData;
}

export default function OutputDisplay({ formData }: OutputDisplayProps) {
  const jsonOutput = generateJSON(formData);
  const esonOutput = generateESONCommand(formData);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  return (
    <div>
      <h3>出力</h3>
      
      <h4>ESON コマンド</h4>
      <div className={styles.outputBlock}>
        <button className={styles.copyButton} onClick={() => copyToClipboard(esonOutput)}>コピー</button>
        {esonOutput}
      </div>

      <h4>JSON</h4>
      <div className={styles.outputBlock}>
        <button className={styles.copyButton} onClick={() => copyToClipboard(jsonOutput)}>コピー</button>
        {jsonOutput}
      </div>
    </div>
  );
}
