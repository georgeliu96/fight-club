// To run:
// - say a little prayer
// - compile with: g++ -std=c++11 gridTraveler.cpp -o gridTraveler.exe
// - run with: ./gridTraveler.exe

#include <iostream>
#include <map>

using namespace std;

// Say you are a traveler on a 2D grid. You start at the top left (0, 0). The grid has size m * n.
// Your goal is to get to the bottom right (m - 1, n - 1). You can only go right or down.
// How many different ways can u get to the goal?

int gridTraveler(int m, int n, map<pair<int, int>, int>* memo) {
  pair<int, int> key = make_pair(m, n);

  if (memo->count(key) == 1)
    return memo->at(key);

  if (m == 0 || n == 0)
    return 0;

  if (m == 1 && n == 1)
    return 1;

  int result = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  memo->insert(pair<pair<int, int>, int>(key, result));
  return result;
}

int gridTraveler(int m, int n) {
  map<pair<int, int>, int> newMemo = {};
  return gridTraveler(m, n, &newMemo);
}

int main() {
  cout << gridTraveler(2, 3) << endl; // 3
  cout << gridTraveler(3, 2) << endl; // 3
  cout << gridTraveler(3, 3) << endl; // 6
  cout << gridTraveler(20, 20) << endl; // 985525432
  return 0;
}