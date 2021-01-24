function TreeNode(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this._pipes = [];
    
    this.insert = function (node) {
        // insert node into the tree (which is represented by just one root node)
    };

    this.find = function (value) {
        // return the node with the matching value
    };

    this.depth = function () {
        // get the depth of this tree (how far down does it go?)
    };

    // EXTRA CREDIT (hardmode)
    this.deleteNode = function (node) {
        // delete the specified node. (but don't lose the node's children)
    };
}


TreeNode.createFromEntries = function (entries) {
    // first element becomes the root node
    const root = new TreeNode(entries[0]);

    for (let i = 1; i < entries.length; i++) {
        root.insert(new TreeNode(entries[i]));
    }

    return root;
}

module.exports = TreeNode;
