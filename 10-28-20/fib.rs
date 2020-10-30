use std::collections::HashMap;

fn fib(n: u8) -> u32 {
  if n == 1 || n == 2 {
    return 1;
  }

  fib(n - 1) + fib(n - 2)
}

fn memoized_fib(n: u8, mut memo: &mut HashMap<u8, u128>) -> u128 {
  if memo.contains_key(&n) {
    return memo[&n]
  }

  if n == 1 || n == 2 {
    return 1;
  }

  let fib_num = memoized_fib(n - 1, &mut memo) + memoized_fib(n - 2, &mut memo);
  memo.insert(n, fib_num);
  memo[&n]
}

fn main() {
  println!("{}", fib(5));
  println!("{}", fib(12));
  println!("{}", fib(32));
  println!("{}", fib(38));

  println!("{}", memoized_fib(5, &mut HashMap::new()));
  println!("{}", memoized_fib(12, &mut HashMap::new()));
  println!("{}", memoized_fib(32, &mut HashMap::new()));
  println!("{}", memoized_fib(38, &mut HashMap::new()));
  println!("{}", memoized_fib(45, &mut HashMap::new()));
  println!("{}", memoized_fib(110, &mut HashMap::new()));
}