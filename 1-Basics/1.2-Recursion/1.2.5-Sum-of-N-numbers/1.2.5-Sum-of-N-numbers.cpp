#include <iostream>
using namespace std;

class Solution
{
public:
    int sumOfNNumbers(int limit, int number)
    {

        // base case
        if (limit <= 0)
        {
            return number;
        }

        return sumOfNNumbers(limit - 1, number +  limit);
    }
};

int main()
{

    Solution solution;
    cout << solution.sumOfNNumbers(10, 0) << endl;
}