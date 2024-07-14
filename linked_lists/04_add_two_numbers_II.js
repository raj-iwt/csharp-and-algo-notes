function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head) {
  let result = null;
  while (head != null) {
    result = new ListNode(head.val, result);
    head = head.next;
  }
  return result;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newList1 = reverseList(l1);
  let newList2 = reverseList(l2);

  let result = null;
  let carry = 0;

  while (newList1 != null || newList2 != null) {
    let sum =
      (newList1 ? newList1.val : 0) + (newList2 ? newList2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    result = new ListNode(sum % 10, result);
    newList1 = newList1 != null ? newList1.next : newList1;
    newList2 = newList2 != null ? newList2.next : newList2;
  }

  if (carry > 0) {
    result = new ListNode(carry, result);
  }

  return result;
};

const list1 = [5];
const list2 = [5];

createListNode = (arr) => {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

const head1 = createListNode(list1);
const head2 = createListNode(list2);

console.log(addTwoNumbers(head1, head2));
