#include <iostream>
#include <vector>
using namespace std;

void Merging(int start, int mid, int end, vector<int> &arr)
{
    // pointer
    int left = start;
    int right = mid + 1;

    vector<int> temp;

    while (left <= mid && right <= end)
    {
        if (arr[left] <= arr[right])
        {
            temp.push_back(arr[left]);
            left++;
        }
        else
        {
            temp.push_back(arr[right]);
            right++;
        }
    }

    while (left <= mid)
    {
        temp.push_back(arr[left]);
        left++;
    }

    while (right <= end)
    {
        temp.push_back(arr[right]);
        right++;
    }

    for (int i = start; i <= end; i++)
    {
        arr[i] = temp[i - start];
    }
}

void MergeSort(int start, int end, vector<int> &arr)
{
    // base case
    if (start >= end)
    {
        return;
    }

    int mid = (start + end) / 2;

    MergeSort(start, mid, arr);
    MergeSort(mid + 1, end, arr);
    Merging(start, mid, end, arr);
}

void PrintAnArray(vector<int> &arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << endl;
    }
}

int main()
{
    vector<int> arr = {3, 2, 4, 1, 5};

    MergeSort(0, arr.size() - 1, arr);

    PrintAnArray(arr);
}