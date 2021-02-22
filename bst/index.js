const { parse } = require('./parser');
const entries = parse('./data.csv');
const TreeNode = require('./treenode');
const { print } = require('./printer');

var tree = TreeNode.createFromEntries(entries);
print(tree);

console.log(tree.allNodes());

tree.deleteNode(6);

print(tree);


tree.deleteNode(17);
print(tree);
