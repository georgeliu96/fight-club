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

    // Write a function, canConstruct, that takes in a target string and an array of strings.
    // The function should return a boolean indicating whether or not
    // the target string can be constructed using strings in the array.
    System.out.println(s.canConstruct("abcd", testSubs1)); // true
    System.out.println(s.canConstruct("soccer", testSubs2)); // true
    System.out.println(s.canConstruct("bootcamp", testSubs3)); // true
    System.out.println(s.canConstruct("bootcamp", testSubs4)); // false
    System.out.println(s.canConstruct("", testSubs5)); // true
    System.out.println(s.canConstruct("", testSubs6)); // true


    // Write a function, howConstruct, that takes in a target string and an array of strings.
    // The function should return an array of possible strings from input array that can be
    // used to construct the target string, null otherwise.
    System.out.println(s.howConstruct("abcd", testSubs1)); // [a, b, cd]
    System.out.println(s.howConstruct("abcdz", testSubs1)); // null
    System.out.println(s.howConstruct("", testSubs1)); // []
  }
}
