const { visit } = require('unist-util-visit');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ::: !ref URL 記法を検出してリンクカードに変換するプラグイン
function remarkLinkCard() {
  return (tree, file) => {
    // containerDirectiveとして処理
    visit(tree, 'containerDirective', (node, index, parent) => {
      if (node.name === '!ref' && parent && typeof index === 'number') {
        
        // 子ノードからURLを取得
        let url = null;
        if (node.children && node.children.length > 0) {
          const firstChild = node.children[0];
          if (firstChild.type === 'paragraph' && firstChild.children) {
            const textNode = firstChild.children[0];
            if (textNode && textNode.type === 'text') {
              url = textNode.value.trim();
            }
          }
        }
        
        if (url) {
          let displayTitle = null;
          let displayPath = url;
          
          // 相対パスの場合はタイトルを取得
          if (url.startsWith('./') || url.startsWith('../')) {
            const currentDir = path.dirname(file.history[0]);
            const targetPath = path.resolve(currentDir, url);
            const mdPath = targetPath.endsWith('.md') ? targetPath : targetPath + '.md';
            
            try {
              if (fs.existsSync(mdPath)) {
                const content = fs.readFileSync(mdPath, 'utf-8');
                const parsed = matter(content);
                displayTitle = parsed.data.title || null;
              }
            } catch (err) {
              console.error('Error reading file:', err);
            }
            
            url = url.replace(/\.md$/, '');
            displayPath = url;
          } else {
            displayTitle = url;
            displayPath = url;
          }
          
          const cardNode = createLinkCard(url, displayTitle, displayPath);
          parent.children[index] = cardNode;
        }
      }
    });

    // テキストベースの ::: !ref 記法も処理
    visit(tree, (node, index, parent) => {
      if (node.type === 'paragraph' && node.children && node.children.length > 0) {
        const firstChild = node.children[0];
        
        // ::: !ref URL の形式をチェック
        if (firstChild.type === 'text' && firstChild.value.trim().startsWith('::: !ref ')) {
          
          const match = firstChild.value.trim().match(/^::: !ref\s+(.+)$/);
          if (match && parent && typeof index === 'number') {
            let url = match[1].trim();
            let displayTitle = null;
            let displayPath = url;
            
            // 相対パスの場合はタイトルを取得
            if (url.startsWith('./') || url.startsWith('../')) {
              // ファイルパスを解決
              const currentDir = path.dirname(file.history[0]);
              const targetPath = path.resolve(currentDir, url);
              
              // .mdがない場合は追加
              const mdPath = targetPath.endsWith('.md') ? targetPath : targetPath + '.md';
              
              try {
                if (fs.existsSync(mdPath)) {
                  const content = fs.readFileSync(mdPath, 'utf-8');
                  const parsed = matter(content);
                  displayTitle = parsed.data.title || null;
                } else {
                  const indexPath = path.join(mdPath.replace(/\.md$/, ''), 'index.md');
                  if (fs.existsSync(indexPath)) {
                    const content = fs.readFileSync(indexPath, 'utf-8');
                    const parsed = matter(content);
                    displayTitle = parsed.data.title || null;
                  }
                }
              } catch (err) {
              }
              
              // URLから.mdを削除
              url = url.replace(/\.md$/, '');
              displayPath = url;
            } else {
              // 外部URLの場合
              displayTitle = url;
              displayPath = url;
            }
            
            const cardNode = createLinkCard(url, displayTitle, displayPath);
            parent.children[index] = cardNode;
          }
        }
      }
    });
  };
}

function createLinkCard(url, title, displayPath) {
  const isExternal = url.startsWith('http');
  
  return {
    type: 'mdxJsxFlowElement',
    name: 'a',
    attributes: [
      { type: 'mdxJsxAttribute', name: 'href', value: url },
      { type: 'mdxJsxAttribute', name: 'className', value: 'link-card' },
      { type: 'mdxJsxAttribute', name: 'target', value: isExternal ? '_blank' : '_self' },
      ...(isExternal ? [{ type: 'mdxJsxAttribute', name: 'rel', value: 'noopener noreferrer' }] : [])
    ],
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'className', value: 'link-card-content' }
        ],
        children: [
          // 矢印アイコン
          {
            type: 'mdxJsxFlowElement',
            name: 'div',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'className', value: 'link-card-icon' }
            ],
            children: [
              { type: 'text', value: '→' }
            ]
          },
          // テキストコンテンツ
          {
            type: 'mdxJsxFlowElement',
            name: 'div',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'className', value: 'link-card-text' }
            ],
            children: [
              {
                type: 'mdxJsxFlowElement',
                name: 'div',
                attributes: [
                  { type: 'mdxJsxAttribute', name: 'className', value: 'link-card-title' }
                ],
                children: [
                  { type: 'text', value: title || displayPath }
                ]
              },
              {
                type: 'mdxJsxFlowElement',
                name: 'div',
                attributes: [
                  { type: 'mdxJsxAttribute', name: 'className', value: 'link-card-path' }
                ],
                children: [
                  { type: 'text', value: displayPath }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}

module.exports = remarkLinkCard;
