// To run:
// - say a little prayer
// - compile with: g++ -std=c++11 fib.cpp -o fib.exe
// - run with: ./fib.exe

#include <iostream>
#include <map>

using namespace std;

int fib(int n, map<int, int>* memo) {
  if (memo->count(n) == 1)
    return memo->at(n);

  if (n == 1 || n == 2)
    return 1;

  int result = fib(n - 1, memo) + fib(n - 2, memo);
  memo->insert(pair<int, int>(n, result));
  return result;
}

int fib(int n) {
  map<int, int> newMemo {};
  return fib(n, &newMemo);
}

int main() {
  cout << fib(6) << endl; // 8
  cout << fib(7) << endl; // 13
  cout << fib(8) << endl; // 21
  cout << fib(45) << endl; // 1134903170
}