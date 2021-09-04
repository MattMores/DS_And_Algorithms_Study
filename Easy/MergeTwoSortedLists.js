// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the
// first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: l1 = [], l2 = []
// Output: []

// Input: l1 = [], l2 = [0]
// Output: [0]

var mergeTwoLists = function(l1, l2) {
    let newList = [...l1];
    newList.splice(0, 0, ...l2)
    return newList.sort()
};

var mergeTwoLists = function(l1, l2) {
    let tempNode = new ListNode(0, null)
    let currentNode = tempNode;

    while (l1 && l2) {
        if(l1.val < l2.val) {
            currentNode.next = l1;
        } else {
            currentNode.next = l2;
            l2 = l2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = l1 || l2;
    return tempNode.next;
}

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    }

    if (l1.val > l2.val) {
        [l1, l2] = [l2, l1] // Swap in place
    }
    l1.next = mergeTwoLists(l1.next, l2)

    return l1 || l2
};

var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode();

    let prev = dummyHead;

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        }
        else if (l2.val < l1.val) {
            prev.next = l2;
            l2 = l2.next;
        }

        prev = prev.next;
    }

    if (l1 != null) prev.next = l1;
    else prev.next = l2;

    return dummyHead.next;
};


console.log(mergeTwoLists([1,2,4], [1,3,4])) // [1,1,2,3,4,4]
console.log(mergeTwoLists([], [0])) // [0]
console.log(mergeTwoLists([], [])) // []
