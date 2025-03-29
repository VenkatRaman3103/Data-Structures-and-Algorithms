#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> plusOne(vector<int> &digits)
    {
        int value = 0;

        for (int i = 0; i < digits.size(); i++)
        {

            value = (value * 10) + digits[i];
        };

        value++;

        vector<int> parsedNumberReversed;

        while (value > 0)
        {
            int lastNumber = value % 10;

            parsedNumberReversed.push_back(lastNumber);

            value = value / 10;
        }

        vector<int> result = {};

        for (int i = parsedNumberReversed.size() - 1; i >= 0; i--)
        {
            result.push_back(parsedNumberReversed[i]);
        }

        return result;
    }
};

void PrintAnArray(vector<int> arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << endl;
    }
}

int main()
{
    Solution solution;

    vector<int> arr = {1, 2, 3, 4, 5};

    PrintAnArray(solution.plusOne(arr));
}