import React, { useState } from 'react';
import ESON from '../../utils/eson';

export default function EsonConverter() {
  const [esonText, setEsonText] = useState('');
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEsonToJson = () => {
    setError(null);
    try {
      const parsed = ESON.parse(esonText);
      setJsonText(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setError('ESON Parse Error: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  const handleJsonToEson = () => {
    setError(null);
    try {
      const parsed = JSON.parse(jsonText);
      setEsonText(ESON.stringify(parsed));
    } catch (e) {
      setError('JSON Parse Error: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  const handleFormatJson = () => {
    if (!jsonText.trim()) return;
    try {
      const parsed = JSON.parse(jsonText);
      setJsonText(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e) {
      // Optional: Show error on format failure or just ignore
      setError('JSON Format Error: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLine = value.substring(lineStart, start);
      
      const match = currentLine.match(/^(\s*)/);
      let indent = match ? match[1] : '';
      
      if (currentLine.trim().endsWith('{') || currentLine.trim().endsWith('[')) {
        indent += '  ';
      }
      
      const newValue = value.substring(0, start) + '\n' + indent + value.substring(end);
      setJsonText(newValue);
      
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1 + indent.length;
      }, 0);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      
      if (e.shiftKey) {
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        if (value.substring(lineStart, lineStart + 2) === '  ') {
          const newValue = value.substring(0, lineStart) + value.substring(lineStart + 2);
          setJsonText(newValue);
          setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = Math.max(lineStart, start - 2);
          }, 0);
        } else if (value.substring(lineStart, lineStart + 1) === ' ') {
          const newValue = value.substring(0, lineStart) + value.substring(lineStart + 1);
          setJsonText(newValue);
          setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = Math.max(lineStart, start - 1);
          }, 0);
        }
      } else {
        const newValue = value.substring(0, start) + '  ' + value.substring(end);
        setJsonText(newValue);
        
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        }, 0);
      }
    } else if (e.key === '}' || e.key === ']') {
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;

      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLineBeforeCursor = value.substring(lineStart, start);

      if (/^\s+$/.test(currentLineBeforeCursor) && currentLineBeforeCursor.length >= 2) {
        e.preventDefault();
        const newIndentation = currentLineBeforeCursor.substring(0, currentLineBeforeCursor.length - 2);
        const newValue = value.substring(0, lineStart) + newIndentation + e.key + value.substring(end);
        
        setJsonText(newValue);
        
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = lineStart + newIndentation.length + 1;
        }, 0);
      }
    }
  };

  const textAreaStyle = {
    width: '100%',
    minHeight: '300px',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid var(--ifm-color-emphasis-300)',
    backgroundColor: 'var(--ifm-background-color)',
    color: 'var(--ifm-font-color-base)',
    fontFamily: 'monospace',
    whiteSpace: 'pre'
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexDirection: 'column' }}>
        <div className="row">
            <div className="col col--6">
                <h3>ESON</h3>
                <textarea
                    value={esonText}
                    onChange={(e) => setEsonText(e.target.value)}
                    placeholder="ESONを入力..."
                    style={textAreaStyle}
                />
            </div>
            <div className="col col--6">
                <h3>JSON</h3>
                <textarea
                    value={jsonText}
                    onChange={(e) => setJsonText(e.target.value)}
                    onBlur={handleFormatJson}
                    onKeyDown={handleKeyDown}
                    placeholder="JSONを入力..."
                    style={textAreaStyle}
                />
            </div>
        </div>
      </div>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={handleEsonToJson} className="button button--primary button--lg">ESON → JSON</button>
        <button onClick={handleJsonToEson} className="button button--primary button--lg">JSON → ESON</button>
      </div>
      {error && (
        <div className="alert alert--danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
