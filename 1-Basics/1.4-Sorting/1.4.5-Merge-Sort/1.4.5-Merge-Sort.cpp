#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> mergeSort(int start, int end, vector<int> arr)
    {
        int mid = arr.size() / 2;
        
        // base case
        if (start >= end)
        {
            return arr;
        }

        mergeSort(end, mid, arr);
        mergeSort(mid + 1, end, arr);

        return arr;
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

    PrintAnArray(solution.mergeSort(0, arr.size()-1, arr));
}