#include <iostream>
#include <limits.h> 
using namespace std;

class Solution
{
public:
    bool isPalindrome(int x)
    {
        if (x < 0)
        {
            return false;
        }

        int tempVar = x;
        int result = 0;

        while (x > 0)
        {
            int lastNumber = x % 10;

            if (result > (INT_MAX / 10))
            {
                return false; 
            }

            result = (result * 10) + lastNumber;
            x = x / 10;
        }

        return tempVar == result;
    }
};


int main()
{
    Solution solution;

    int x;
    cin >> x;

    cout << solution.isPalindrome(x) << endl;
}