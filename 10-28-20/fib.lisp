(defun fib (target)
  (let ((memo (make-list (+ 1 target))))
    (defun _fib (n)
      (if (nth n memo) 
        (nth n memo) 
        (if (< n 3)
          1
          (let ((result (+ (_fib (- n 1)) (_fib (- n 2) ))))
            (setf (nth n memo) result)))))
    (_fib target)))


(print (fib 6)) ;; 8
(print (fib 7)) ;; 13
(print (fib 8)) ;; 21
(print (fib 45)) ;; 1134903170

