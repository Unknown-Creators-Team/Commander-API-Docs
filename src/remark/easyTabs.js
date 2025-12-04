const { visit } = require('unist-util-visit');

const plugin = (options) => {
  return (tree) => {
    let hasTabs = false;

    visit(tree, (node) => {
      if (node.children && Array.isArray(node.children)) {
        const newChildren = [];
        let currentTabs = null;
        let inTabs = false;
        let changed = false;

        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const marker = getMarker(child);

          if (marker) {
            changed = true;
            if (marker.type === 'start') {
              if (!inTabs) {
                inTabs = true;
                currentTabs = [];
              }
              currentTabs.push({
                label: marker.label,
                value: marker.label,
                children: []
              });
            } else if (marker.type === 'end') {
              if (inTabs) {
                newChildren.push(createTabsNode(currentTabs));
                hasTabs = true;
                inTabs = false;
                currentTabs = null;
              } else {
                // Orphaned end marker
                newChildren.push(child);
              }
            }
          } else {
            if (inTabs) {
              if (currentTabs && currentTabs.length > 0) {
                currentTabs[currentTabs.length - 1].children.push(child);
              } else {
                // Content before first tab in a block, or just ignore
                newChildren.push(child);
              }
            } else {
              newChildren.push(child);
            }
          }
        }

        if (inTabs && currentTabs) {
          newChildren.push(createTabsNode(currentTabs));
          hasTabs = true;
          changed = true;
        }

        if (changed) {
          node.children = newChildren;
        }
      }
    });

    if (hasTabs) {
      // Check if imports already exist
      let hasTabsImport = false;
      let hasTabItemImport = false;

      visit(tree, 'mdxjsEsm', (node) => {
          if (node.value.includes('@theme/Tabs')) hasTabsImport = true;
          if (node.value.includes('@theme/TabItem')) hasTabItemImport = true;
      });

      if (!hasTabsImport || !hasTabItemImport) {
          addImports(tree);
      }
    }
  };
};

function getMarker(node) {
  if (node.type === 'paragraph' && node.children && node.children.length > 0) {
    const textNode = node.children[0];
    if (textNode.type === 'text') {
      const text = textNode.value.trim();
      if (text.startsWith('+++')) {
        const content = text.substring(3).trim();
        if (content === '') {
          return { type: 'end' };
        } else {
          return { type: 'start', label: content };
        }
      }
    }
  }
  return null;
}

function createTabsNode(tabs) {
  return {
    type: 'mdxJsxFlowElement',
    name: 'Tabs',
    attributes: [],
    children: tabs.map(tab => ({
      type: 'mdxJsxFlowElement',
      name: 'TabItem',
      attributes: [
        { type: 'mdxJsxAttribute', name: 'value', value: tab.value },
        { type: 'mdxJsxAttribute', name: 'label', value: tab.label }
      ],
      children: tab.children
    }))
  };
}

function addImports(tree) {
  tree.children.unshift({
    type: 'mdxjsEsm',
    value: "import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';",
    data: {
      estree: {
        type: 'Program',
        body: [
          {
            type: 'ImportDeclaration',
            specifiers: [
              {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name: 'Tabs' }
              }
            ],
            source: { type: 'Literal', value: '@theme/Tabs' }
          },
          {
            type: 'ImportDeclaration',
            specifiers: [
              {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name: 'TabItem' }
              }
            ],
            source: { type: 'Literal', value: '@theme/TabItem' }
          }
        ],
        sourceType: 'module'
      }
    }
  });
}

module.exports = plugin;
