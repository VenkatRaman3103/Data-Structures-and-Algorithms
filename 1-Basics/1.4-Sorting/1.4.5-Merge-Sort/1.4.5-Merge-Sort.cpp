#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void mergeSort(int start, int end, vector<int>& arr)
    {

        // base case
        if (start >= end)
        {
            return;
        }
        int mid = start + (end - start) / 2;

        mergeSort(start, mid, arr);
        mergeSort(mid + 1, end, arr);

        merging(start, mid, end, arr);
    }

    void merging(int start, int mid, int end, vector<int>& arr)
    {
        vector<int> tempArr;

        int left = start;
        int right = mid + 1;

        while (left <= mid && right <= end)
        {
            if (arr[left] <= arr[right])
            {
                tempArr.push_back(arr[left]);
                left++;
            }
            else {
                tempArr.push_back(arr[right]);
                right++;
            };
        }

        while (left <= mid)
        {
            tempArr.push_back(arr[left]);
            left++;
        }

        while (right <= end)
        {
            tempArr.push_back(arr[right]);
            right++;
        }

        for (int i = start; i <= end; i++)
        {
            arr[i] = tempArr[i - start];
        }
    };
};

void PrintAnArray(vector<int>& arr)
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

    solution.mergeSort(0, arr.size() - 1, arr);

    PrintAnArray(arr);
}