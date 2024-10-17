#include <iostream>
#include <vector>
using namespace std;

/*

    j = i
    arr[j - 1] > arr[j]


    3, 2, 1, 4, 5
       i
       j

    2, 3, 1, 4, 5
          i
          j

          2, 1, 3, 4, 5
                i
             j

          1, 2, 3, 4, 5
                i
          j

    1, 2, 3, 4, 5
             i
             j

     1, 2, 3, 4, 5
                 i
                 j

*/

vector<int> insertionSort(vector<int> arr)
{

    for (int i = 1; i < arr.size(); i++)
    {
        int element = arr[i];

        int j = i;

        while (j > 0 && arr[j - 1] > element)
        {
            // int temp = arr[j - 1];
            arr[j] = arr[j - 1];
            arr[j - 1] = element;

            j--;
        }
    }
    return arr;
}

void PrintAnArray(vector<int> arr)
{
    for (int i = 0; i <= arr.size() - 1; i++)
    {
        cout << arr[i];
    }
}

int main()
{
    vector<int> arr = {3, 4, 1, 5, 6, 2};

    PrintAnArray(insertionSort(arr));
}