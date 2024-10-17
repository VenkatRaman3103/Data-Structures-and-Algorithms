#include <iostream>
#include <vector>
using namespace std;

void PrintAnArray(vector<int> arr)
{
    for (int i = 0; i <= arr.size() - 1; i++)
    {
        cout << arr[i] << endl;
    }
}

class Solution
{
public:
    // Brute Force approach
    int reverseAnArray(vector<int> array)
    {
        for (int i = array.size() - 1; i >= 0; i--)
        {
            cout << array[i] << endl;
        }
        return array.size();
    }

    // Better approach
    vector<int> twoPointers(vector<int> arr)
    {
        // pointers
        int p1 = 0;
        int p2 = arr.size() - 1;

        // arr = [1, 2, 3, 4, 5]
        while (p1 < p2)
        {
            // swapping
            int temp = arr[p1];
            arr[p1] = arr[p2];
            arr[p2] = temp;

            // move the pointer
            p1 = p1 + 1;
            p2 = p2 - 1;
        }

        return arr;
    }

    // Optimal Solution
    vector<int> recursion(vector<int> arr, int p1, int p2)
    {
        // base case
        if (p1 >= p2)
        {
            return arr;
        }

        // swapping
        int temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;

        return recursion(arr, p1 + 1, p2 - 1);
    }
};

int main()
{
    vector<int> arrOfNum = {1, 2, 3, 4, 5};

    Solution solution;

    // solution.reverseAnArray(arrOfNum);

    vector<int> twoPointers = solution.twoPointers(arrOfNum);
    // PrintAnArray(twoPointers);

    vector<int> recursion = solution.recursion(arrOfNum, 0, arrOfNum.size() - 1);
    PrintAnArray(recursion);
    cin.get();
}