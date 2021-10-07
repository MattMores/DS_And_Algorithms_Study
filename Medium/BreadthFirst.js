/* Given a node class that has a name and an array of optional children nodes,
implement the breadthFirstSearch method on the Node class (left to right), stores all the
node names in the input array and returns it.
*/

class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array){
        const queue = [this];
        while (queue.length > 0){
            const current = queue.shift();
            array.push(current.name);
            for (const child of current.children){
                queue.push(child);
            }
        }
        return array;
    }
}

class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array){
        let queue = [this];
        while (queue.length > 0){
            let current = queue.shift();
            array.push(current.name);
            for (let children of current.children){
                queue.push(children);
            }
        }
        return array;
    }
}
