import java.util.ArrayList;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> testSubs1 = new ArrayList<>(Arrays.asList("a", "b", "ab", "cd"));
    ArrayList<String> testSubs2 = new ArrayList<>(Arrays.asList("er", "so", "c"));
    ArrayList<String> testSubs3 = new ArrayList<>(Arrays.asList("boo", "boot", "camp"));
    ArrayList<String> testSubs4 = new ArrayList<>(Arrays.asList("boo", "boots", "camp"));
    ArrayList<String> testSubs5 = new ArrayList<>(Arrays.asList("apple", "banana", "o"));
    ArrayList<String> testSubs6 = new ArrayList<>(Arrays.asList("a", "b"));

    Solution s = new Solution();

    System.out.println(s.canConstruct("abcd", testSubs1)); // true
    System.out.println(s.canConstruct("soccer", testSubs2)); // true
    System.out.println(s.canConstruct("bootcamp", testSubs3)); // true
    System.out.println(s.canConstruct("bootcamp", testSubs4)); // false
    System.out.println(s.canConstruct("", testSubs5)); // true
    System.out.println(s.canConstruct("", testSubs6)); // true

    System.out.println(s.howConstruct("abcd", testSubs1)); // [a, b, cd]
    System.out.println(s.howConstruct("abcdz", testSubs1)); // null
    System.out.println(s.howConstruct("", testSubs1)); // []
  }
}
