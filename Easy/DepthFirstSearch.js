// Given a Node class that has a name and an array of optional children nodes.
//When put together, nodes form an acylclic tree-like structure. Implement DFS.
//Which take in an empty array, traverses the tree using DFS from left to right
//stores all the nodes' names in the input array and returns it.
//In Order Traversal = Self, Left, Right

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this
    }

    depthFirstSearch(array) {
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array)
        }
        return array;
    }
}
