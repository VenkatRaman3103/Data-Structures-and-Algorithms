#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:

    vector<int> bubbleSort(vector<int> arr)
    {
        for (int i = 0; i <= arr.size() - 1; i++)
        {
            for (int j = 0; j <= (arr.size() - i) - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // swapping
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
            cout << endl;
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
    vector<int> arr = {2, 3, 1, 5, 4};
    Solution solution;
    solution.bubbleSort(arr);
    PrintAnArray(solution.bubbleSort(arr));
}