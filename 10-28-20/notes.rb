def foo(b = [])
    p b.object_id
end
  
foo()
foo()

# default args have different object ids