#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> selectionSort(vector<int> arr)
    {
        int n = arr.size();

        for (int i = 0; i < n - 1; i++)
        {
            int min = i;

            for (int j = i; j < arr.size(); j++)
            {
                if (arr[j] < arr[min])
                {
                   min = j;
                }
            }

            // swapping
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }

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
    vector<int> arr = {3, 2, 4, 5, 1};
    Solution solution;
    PrintAnArray(solution.selectionSort(arr));
}
