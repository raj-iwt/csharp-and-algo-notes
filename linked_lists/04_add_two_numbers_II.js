function ListNode(val) {
  this.val = val;
  this.next = null;
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
  let sum1 = 0;
  let sum2 = 0;
  while (l1 != null || l2 != null) {
    if (l1 != null) {
      sum1 *= 10;
      sum1 += l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      sum2 *= 10;
      sum2 += l2.val;
      l2 = l2.next;
    }
  }

  let total = sum1 + sum2;
  if (total == 0) {
    return new ListNode(0);
  }
  let result = null;

  while (total > 0) {
    let newNode = new ListNode(Number(total % 10));
    newNode.next = result;
    result = newNode;
    total = Math.floor(total / 10);
  }
  return result;
};

const list1 = [
  2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4,
  3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2,
  4, 3, 2, 4, 3, 2, 4, 3, 9,
];
const list2 = [
  5, 6, 4, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4,
  3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2,
  4, 3, 2, 4, 3, 9, 9, 9, 9,
];

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
