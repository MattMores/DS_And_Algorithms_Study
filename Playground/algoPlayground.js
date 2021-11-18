function tournamentWinner(competitions, results){
    const HOME_TEAM_WON = 1;
    const scores = new Map();
    let currentBestScore = 0;
    let currentBestTeam = '';

    for (let i = 0; i < competitions.length; i++){
        const [homeTeam, awayTeam] = competitions[i];
        const result = results[i];
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        const currentScore = scores.get(winningTeam) || 0;
        const newScore = currentScore + 3
        scores.set(winningTeam, currentScore + 3)
    }

    scores.forEach((score, team) => {
        if (score > currentBestScore){
            currentBestScore = score;
            currentBestTeam = team;
        }
    })
    return currentBestTeam;
}

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Pyton"],
    ["Python", "HTML"],
],
    [0,0,1]
))

let nonConstructibleChange = function (coins){
    let sortedCoins = coins.sort((a, b) => a - b);
    let currentChangeCreated = 0;

    for (const coin of sortedCoins){
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
        currentChangeCreated += coin;
    }
    return currentChangeCreated + 1;
}

class BST {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function findClosestValueInBst(tree, target){
    return findClosestValue(tree, target, Infinity)
}

function findClosestValue(tree, target, closest){
    if (!tree) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)){
        closest = tree.value;
    }
    if (target < tree.value){
        return findClosestValue(tree.left, target, closest);
    } else if (target > tree.value){
        return findClosestValue(tree.right, target, closest)
    } else {
        return closest
    }
}

function findClosestValueInBst(tree, target){
    return findClosestHelper(tree, target, tree.value);
}

function findClosestValueHelper(tree, target, closest){
    let currentNode = tree;
    while (currentNode !== null){
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)){
            closest = currentNode.value;
        }
        if (target < currentNode.value){
            currentNode = currentNode.left
        } else if (target > currentNode.value){
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
    return closest
}

class BST {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function nodeDepths(root, depth = 0){
    if (root === null) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

class BinaryTree {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function nodeDepths(root){
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}]
    while (stack.length > 0){
        const {node, depth} = stack.pop();
        if (node === null) continue;
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1})
    }
    return sumOfDepths;
}

function nodeDepths(root, depth = 0){
    if (root === null) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

function nodeDepths(root){
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];

    while(stack.length > 0){
        const {node, depth } = stack.pop();
        sumOfDepths += depth;

        if (node.left !== null){
            stack.push({ node: node.left, depth: depth + 1});
        }
        if (node.right !== null){
            stack.push({ node: node.right, depth: depth + 1})
        }
    }
    return sumOfDepths;
}

class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    // addChild(name){
    //     this.children.push(new Node(name));
    //     return this;
    // }

    depthFirstSearch(array){
        array.push(this.name);
        for (const child of this.children){
            child.depthFirstSearch(array);
        }
        return array;
    }
}

function minimumWaitingTime(queries){
    let sorted = queries.sort((a, b) => a - b);
    let runningSum = 0;
    for (let i = 1; i < sorted.length; i ++){
        runningSum += sorted[i - 1];
    }
    return runningSum;
}

function minimumWaitingTime(queries){
    queries.sort((a, b) => a - b);
    let waitingTime = 0;
    let totalWaitingTime = 0;
    for (const duration of queries){
        totalWaitingTime += waitingTime;
        waitingTime += duration;
    }
    return totalWaitingTime
}

function classPhotos(redShirtHeights, blueShirtHeights){
    
}
