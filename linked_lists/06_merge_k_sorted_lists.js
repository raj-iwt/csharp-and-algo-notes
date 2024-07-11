function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (lists) {
  if (lists == null || lists.length === 0) {
    return null;
  }
  let result = lists[0];
  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i]);
  }

  return result;
};

var mergeTwoLists = function (list1, list2) {
  let result = new ListNode();

  let current = result;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 != null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return result.next;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

createListNode = (arr) => {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

const l1 = createListNode(list1);
const l2 = createListNode(list2);

console.log(mergeTwoLists([l1, l2])); // [1, 1, 2, 3, 4, 4]
