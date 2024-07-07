function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {

    let nodeSeen = new Set();
    let current = head;
    while (current != null){
        if(nodeSeen.has(current)){
            return true;
        }

        nodeSeen.add(current);
        current = current.next
    }

    return false;
};


const list1 = [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9];
const list2 = [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9];



const head = ListNode(3);
head.next = ListNode(2);
head.next.next = ListNode(0)
head.next.next = ListNode(-4)

console.log(hasCycle(head))

