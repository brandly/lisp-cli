# lisp-cli

> a small cli for [brandly-lisp](https://github.com/brandly/lisp.js)

```shell
$ npm install -g brandly-lisp-cli
```

give it a file name

```shell
$ brandly-lisp factorial.lisp
120
```

or use the repl

```shell
$ brandly-lisp
brandly-lisp v0.8.2
>> (+ 2 2)
4
>> (define dude (+ 2 2))
>> dude
4
>> (* 2 dude)
8
>> (define fact (lambda (n) (if (<= n 1) 1 (* n (fact (- n 1))))))
>> (fact 10)
3628800
>>
```
