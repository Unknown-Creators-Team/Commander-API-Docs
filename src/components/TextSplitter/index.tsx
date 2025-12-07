import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function TextSplitter() {
  const [inputText, setInputText] = useState('');

  const processText = (text: string) => {
    const lines = text.split('\n');
    const processedLines: string[] = [];

    lines.forEach((line) => {
      if (line.length === 0) {
        processedLines.push('');
        return;
      }

      if (line.length <= 99) {
        processedLines.push(line);
      } else {
        let first = true;
        for (let i = 0; i < line.length; i += 99) {
          if (first) {
            processedLines.push(line.substring(i, i + 99));
            first = false;
          } else {
            processedLines.push('+' + line.substring(i, i + 99));
          }
        }
      }
    });

    return processedLines;
  };

  const processedLines = processText(inputText);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="ここにテキストを入力してください..."
          style={{
            width: '100%',
            minHeight: '150px',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            backgroundColor: 'var(--ifm-background-color)',
            color: 'var(--ifm-font-color-base)',
            fontFamily: 'monospace',
            whiteSpace: 'pre'
          }}
        />
      </div>
      <div>
        <h3>出力:</h3>
        {processedLines.map((line, index) => (
          line.trim() !== '' && (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <CodeBlock children={line} />
            </div>
          )
        ))}
      </div>
    </div>
  );
}
