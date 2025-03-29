#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> InsertionSort(vector<int> arr)
    {
        for (int i = 1; i < arr.size(); i++)
        {
            int element = arr[i];

            int j = i;
            
            while (j > 0 && arr[j - 1] > element)
            {
                arr[j] = arr[j-1];
                arr[j-1] = element;

                j--;
            }
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
    vector<int> arr = {3, 4, 2, 1, 5};
    Solution solution;
    PrintAnArray(solution.InsertionSort(arr));
}