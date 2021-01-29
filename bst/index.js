const { parse } = require('./parser');
const entries = parse('./data.csv'); // alt entries to test depth -> 10,5,8,3,26,17,38,42,7,25,33
const TreeNode = require('./treenode');
const { print } = require('./printer');

var tree = TreeNode.createFromEntries(entries);
print(tree);

tree.find(3);
tree.find(44);
tree.find(37);
tree.find(36);
tree.find(2);
tree.find(11); // NOPE
tree.find(12); // NOPE. THE FURY IS REAL.
console.log(tree.depth());
