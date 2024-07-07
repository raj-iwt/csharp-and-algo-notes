// See https://aka.ms/new-console-template for more information
using System.Text;

Console.WriteLine("Hello, World!");
// Span.SpanTest.Run();

var head = new ListNode(1, new ListNode(5, new ListNode(10)));

ListNode? result = null;
while(head != null){
    result = new ListNode(head.val, result);
    head = head.next;
}
