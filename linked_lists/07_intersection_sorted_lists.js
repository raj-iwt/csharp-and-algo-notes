function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

createListNode = (arr) => {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  while (headA != null) {
    let current = headB;
    while (current != null) {
      if (headA == current) {
        return headA;
      }
      current = current.next;
    }

    headA = headA.next;
  }

  return null;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const l1 = createListNode(list1);
const l2 = createListNode(list2);

console.log(mergeTwoLists([l1, l2])); // [1, 1, 2, 3, 4, 4]
