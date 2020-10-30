use std::collections::HashMap;

fn grid_traveler(m: u8, n: u8, memo: &mut HashMap<String, u128>) -> u128 {
  let key = format!("{}, {}", m, n).to_string();
  if memo.contains_key(&key) {
    return memo[&key];
  }

  if m == 0 || n == 0 {
    return 0;
  }

  if m == 1 || n == 1 {
    return 1;
  }

  let num_ways_going_down = grid_traveler(m - 1, n, memo);
  let num_ways_going_right = grid_traveler(m, n - 1, memo);
  memo.insert(key.clone(), num_ways_going_down + num_ways_going_right);
  memo[&key]
}

fn main() {
  println!("{}", grid_traveler(2, 3, &mut HashMap::new())); // 3
  println!("{}", grid_traveler(3, 2, &mut HashMap::new())); // 3
  println!("{}", grid_traveler(3, 3, &mut HashMap::new())); // 6
  println!("{}", grid_traveler(16, 16, &mut HashMap::new())); // 155117520
}