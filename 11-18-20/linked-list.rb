class Node
    attr_accessor :val, :next
  
    def initialize(val)
      @val = val
      @next = nil
    end
  end
  
  # a = Node.new('a')
  # b = Node.new('b')
  # c = Node.new('c')
  # d = Node.new('d')
  # e = Node.new('e')
  # head = a
  # a.next = b
  # b.next = c
  # c.next = d
  # d.next = e
  # a -> b -> c -> d -> e
  
  # Write a fn that takes in the head of a linked list and prints out all values in the list, in order.
  # def print_list(head)
  #   return if head.nil?
  #   p head.val
  #   print_list(head.next)
  # end
  # print_list(head)
  # a
  # b
  # c
  # d
  # e
  
  
  # Write a fn that takes in the head of a linked list and 
  # returns a string containing all values of the LL concatenated together
  
  # n = length of the LL
  # TIME: O(n)  
  # SPACE: O(n)
  # def stringify_list(head)
  #   return '' if head.nil?
    
  #   head.val + stringify_list(head.next)
  # end
  
  # p stringify_list(head) # -> 'abcde'
  
  # def stringify_list(head, s="")
  #   return s if head.nil?
  
  #   stringify_list(head.next, s + head.val)
  # end
  
  # p stringify_list(head) # -> 'abcde'
  
  
  # def stringify_list(head)
  #   curr = head
  
  #   s = ''
  #   while !curr.nil?
  #     s += curr.val
  #     curr = curr.next
  #   end
  
  #   s
  # end
  
  # p stringify_list(head)
  
  
  # Write a fn that takes in a LL containing numbers as values and returns the sum
  # of the LL
  
  a = Node.new(3)
  b = Node.new(7)
  c = Node.new(-5)
  d = Node.new(10)
  e = Node.new(1)
  head = a
  a.next = b
  b.next = c
  c.next = d
  d.next = e
  
  # def sum_list(head)
  #   return 0 if head.nil?
  #   head.val + sum_list(head.next)
  # end
  
  # p sum_list(head) # 16 
  
  
  # Write a fn that takes in a LL and a target value that returns a bool indicating whether or not the
  # target is contained in the LL.
  
  def contains(head, target)
    return false if head.nil?
    
    head.val == target || contains(head.next, target)
  end
  
  def contains(head, target)
    return false if head.nil?
    return true if head.val == target
  
    contains(head.next, target)
  end
  
  p contains(head, -5) # true
  p contains(head, 2) # false
  
  