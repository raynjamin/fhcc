function TreeNode(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this._pipes = [];

    /**
     * Inserts a node into the tree.
     */
    this.insert = function (node) {
        if (node.value < this.value) {
            if (this.left) {
                this.left.insert(node);
            } else {
                this.left = node;
            }
        }

        if (node.value > this.value) {
            if (this.right) {
                this.right.insert(node);
            } else {
                this.right = node;
            }
        }
    };

    /**
     * Returns the node with the matching value.
     */
    this.find = function (value) {
        if (value === this.value) {
            console.log(this);
        }

        if (this.left && value < this.value) {
            this.left.find(value);
        }

        if (this.right && value > this.value) {
            this.right.find(value);
        }

        if (value !== this.value && !this.left && !this.right) {
            console.log(`If you were hoping to find a ${value} I'm afraid you're barking up the wrong tree, friend.`)
        }
    };

    /**
     * Gets the depth of this tree.
     */
    this.depth = function () {
        let leftDepth = 0;
        let rightDepth = 0;

        if (this.left) {
            leftDepth = this.left.depth() + 1;
        }

        if (this.right) {
            rightDepth = this.right.depth() + 1;
        }

        return leftDepth > rightDepth ? leftDepth : rightDepth ;
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
