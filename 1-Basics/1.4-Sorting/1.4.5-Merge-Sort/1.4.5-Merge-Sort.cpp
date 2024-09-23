#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int mergeSort(vector<int> arr)
    {
        int mid = arr.size() / 2;

        return mid;
    }
};

void PrintAnArray(vector<int> arr)
{
    for (int n : arr)
    {
        cout << n;
    }
}

int main()
{
    vector<int> arr = {3, 4, 2, 5, 1};

    Solution solution;

    // PrintAnArray(solution.mergeSort(arr));
    cout << solution.mergeSort(arr) << endl;
}