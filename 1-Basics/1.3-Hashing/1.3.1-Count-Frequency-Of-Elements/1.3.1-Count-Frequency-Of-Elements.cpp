#include <iostream>
#include <vector>
#include <map>
using namespace std;

class Solution
{
public:
    map<int, int> countFrequencyOfElements(vector<int> arr)
    {
        map<int, int> hashTable;

        for (int i : arr)
        {
            hashTable[i]++;
        }

        return hashTable;
    }
};

void PrintMap(map<int, int>arr){
    for(auto pair:arr){
        cout << pair.first << " - " << pair.second << endl;
    }
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5, 5, 5, 3, 2, 1, 1};
    Solution solution;
    map<int, int> result =  solution.countFrequencyOfElements(arr);
    PrintMap(result);
}