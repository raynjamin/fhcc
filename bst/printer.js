function print(tree, depth, isLeft) {
    depth = depth || 0;

    if (tree.left) {
        insertPipes(tree.left.right, depth);
        print(tree.left, depth + 1, true);
    }

    process.stdout.write(buildSpacer(tree, depth, isLeft) + String(tree.value) + "\n");

    if (tree.right) {
        insertPipes(tree.right.left, depth);
        print(tree.right, depth + 1, false);
    }
}

function insertPipes(node, depth) {
    if (node == null) {
        return;
    }

    insertPipes(node.left, depth);
    node._pipes.push(depth);
    insertPipes(node.right, depth);
}

function buildSpacer(node, level, left) {
    let string = "";
    for (let i = 0; i < level; i++) {
        if (node._pipes.indexOf(i) > -1) {
            string += "   |";
        } else {
            string += "    ";
        }
    }

    if (level > 0) {
        if (left) {
            string += ".";
        } else {
            string += "`";
        }
    }

    string += "---";
    return string;
}

module.exports = {
    print
}