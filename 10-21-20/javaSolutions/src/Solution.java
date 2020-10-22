import java.util.ArrayList;

public class Solution {
  public boolean canConstruct(String target, ArrayList<String> subs) {
    if (target.equals("")) { return true; }

    for (String prefix : subs) {
      if (prefix.equals(target.substring(0, prefix.length()))) {
        String remainder = target.substring(prefix.length());

        if (canConstruct(remainder, subs)) { return true; }

      }
    }

    return false;
  }

  public ArrayList<String> howConstruct(String target, ArrayList<String> subs) {
    if (target.equals("")) { return new ArrayList<>(); }

    for (String prefix : subs) {
      if (prefix.length() > target.length()) { return null; }

      if (prefix.equals(target.substring(0, prefix.length()))) {
        String remainder = target.substring(prefix.length());
        ArrayList<String> result = howConstruct(remainder, subs);

        if (result != null) {
          result.add(0, prefix);
          return result;
        }

      }
    }

    return null;
  }
}
