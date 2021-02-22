function TreeNode(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this._pipes = [];
    
    this.insert = function (node) {
        // insert node into the tree (which is represented by just one root node)
    };

    this.find = function (value) {
        if (value === this.value) {
            return this;
        }

        if (this.left && value < this.value) {
            return this.left.find(value);
        }

        if (this.right && value > this.value) {
            return this.right.find(value);
        }

        return null;
    };

    this.depth = function () {
<<<<<<< Updated upstream
        // get the depth of this tree (how far down does it go?)
=======
        let leftDepth = 0;
        let rightDepth = 0;

        if (this.left) {
            leftDepth = this.left.depth();
        }

        if (this.right) {
            rightDepth = this.right.depth();
        }

        const maxDepth = leftDepth > rightDepth ? leftDepth : rightDepth;

        return maxDepth + 1;
>>>>>>> Stashed changes
    };

    this.allNodes = function () {
        let results = [];

        if (this.left) {
            results = results.concat(this.left.allNodes());
        }

        results.push(this.value);

        if (this.right) {
            results = results.concat(this.right.allNodes());
        }

        return results;
    }

    // EXTRA CREDIT (hardmode)
    this.deleteNode = function (value) {
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
