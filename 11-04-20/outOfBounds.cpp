// To run:
// - say a little prayer
// - compile with: g++ -std=c++11 outOfBounds.cpp -o outOfBounds
// - run with: ./outOfBounds

#include <iostream>
#include <string> 
#include <map>
#include <math.h>

using namespace std;

const int MOD_VALUE = pow(10, 9) + 7;

long long int findPaths(int m, int n, int N, int i, int j, map<string, long long int> &memo) {
  string key = to_string(i) + "," + to_string(j) + "," + to_string(N);
  if (memo.count(key) == 1)
    return memo.at(key);

  bool isInbounds = 0 <= i && i < m && 0 <= j && j < n;

  if (!isInbounds)
    return 1;

  if (N <= 0)
    return 0;

  long long int count = 0;
  count += findPaths(m, n, N - 1, i + 1, j, memo);
  count += findPaths(m, n, N - 1, i - 1, j, memo);
  count += findPaths(m, n, N - 1, i, j + 1, memo);
  count += findPaths(m, n, N - 1, i, j - 1, memo);
  long long int result = count % MOD_VALUE;

  memo.insert(pair<string, long long int>(key, result));
  return result;
}

long long int findPaths(int m, int n, int N, int i, int j) {
  map<string, long long int> newMemo;
  return findPaths(m, n, N, i, j, newMemo);
}

int main() {
  cout << findPaths(2,2,2,0,0) << endl; // 6
  cout << findPaths(1,3,3,0,1) << endl; // 12
  cout << findPaths(7, 6, 13, 0, 2) << endl; // 1659429
  return 0;
}