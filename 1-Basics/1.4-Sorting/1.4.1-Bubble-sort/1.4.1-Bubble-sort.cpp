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
                if(arr[j] > arr[j + 1]){
                    // swapping
                    int temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;


                }
            }
            cout << endl;
        }
    }
};

int main()
{
    vector<int> arr = {2, 3, 1, 5, 4};
    Solution solution;
    solution.bubbleSort(arr);
}