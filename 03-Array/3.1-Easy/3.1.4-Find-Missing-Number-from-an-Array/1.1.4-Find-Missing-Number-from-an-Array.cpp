#include <bits/stdc++.h>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
  public:
    int missingNumber(vector<int> &nums) {
        int n = nums.size();

        int total = n * (n + 1) / 2;

        int totalFromNums = 0;

        for (int num : nums) {
            totalFromNums += num;
        }

        return total - totalFromNums;
    }
};

void printAnArray(vector<int> nums) {

    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << endl;
    }
}

int main() {
    Solution solution;

    // vector<int> arr = {1, 2, 4, 5, 6, 7, 8, 9};
    vector<int> arr = {3, 0, 1};

    int result = solution.missingNumber(arr);

    cout << result << endl;

    // printAnArray(result);
}
