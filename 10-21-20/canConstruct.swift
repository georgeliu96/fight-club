func canConstruct(target: String, subs: [String]) -> Bool {
  guard target != "" else { return true }

  for prefix in subs {
    if target.hasPrefix(prefix) {
      let remainder = String(target.dropFirst(prefix.count))
      if canConstruct(target: remainder, subs: subs) == true {
        return true
      }
    }
  }

  return false
}

print(canConstruct(target: "abcd", subs: ["a", "b", "ab", "cd"])) // true
print(canConstruct(target: "soccer", subs: ["er", "so", "c"])) // true
print(canConstruct(target: "bootcamp", subs: ["boo", "boot", "camp"])) // true
print(canConstruct(target: "bootcamp", subs: ["boo", "boots", "camp"])) // false
print(canConstruct(target: "", subs: ["apple", "banana", "o"])) // true
print(canConstruct(target: "", subs: ["a", "b"])) // true
print(can_construct('abc', ['abcdefg'])) // false
