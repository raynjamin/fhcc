const { parse } = require('./parser');
const entries = parse('./data.csv');
const TreeNode = require('./treenode');
const { print } = require('./printer');

print(TreeNode.createFromEntries(entries));