# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        num1 = 0
        num2 = 0
        while l1:
            num1 = num1*10 + l1.val
            l1 = l1.next
        while l2:
            num2 = num2 * 10 + l2.val
            l2 = l2.next
        total = num1 + num2
        l3 = ans = ListNode(None)
        for i in str(total):
            nextNode = ListNode(int(i))
            l3.next = nextNode
            l3 = l3.next
        return ans.next
        