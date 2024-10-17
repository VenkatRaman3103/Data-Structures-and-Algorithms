#include <iostream>
#include <vector>
using namespace std;

void swap(int a, int b, vector<int> &arr)
{
    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

vector<int> bubbleSort(vector<int> arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        for (int j = 1; j < arr.size() - i; j++)
        {
            if (arr[j] < arr[j - 1])
            {
                swap(j, j - 1, arr);
            }
        }
    }
    return arr;
}

void printArray(vector<int> arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    vector<int> arr = {5, 3, 4, 2, 1};
    printArray(bubbleSort(arr));
}
