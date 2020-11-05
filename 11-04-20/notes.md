576. Out of Boundary Paths
https://leetcode.com/problems/out-of-boundary-paths/

Python allows for 3 way comparisons. i.e. `0 <= x <= 5` returns `True` if the value of x is equal to either of the bounds or between the bounds. 

If we have multiple base cases, we want to make sure that either the cases are either exclusive or that the order of how we code our base cases are correct. 

In multi-argument problems it's important to think about which of the arguments are actually limiting in terms of time complexity. 

When simplifying for complexities, there are 2 rules for simplifying. Product rule and sum rule. Product rule is essentially to remove all the constant multipliers on any product (i.e. `2Nm` simplifies to `Nm`). Sum rule is to pick the largest value out of any summed values. (i.e. `Nmn + Nm + Nn`, we only take `Nmn`)