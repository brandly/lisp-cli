(define factorial (lambda (n)
  (if (<= n 1)
    n
    (* n (factorial (- n 1))))))

(factorial 5)
