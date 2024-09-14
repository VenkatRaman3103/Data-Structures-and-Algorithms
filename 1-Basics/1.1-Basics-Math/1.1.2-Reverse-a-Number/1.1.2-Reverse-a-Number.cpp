#include <iostream>
#include <climits> 
using namespace std;

class Solution
{
public:
    int reverse(int x)
    {
        int result = 0;
        bool isNegative = x < 0; 

        x = abs(x);  

        while (x > 0)
        {
            int lastNumber = x % 10;

            if (result > (INT_MAX - lastNumber) / 10)
            {
                return 0;  
            }

            result = (result * 10) + lastNumber;

            x = x / 10;
        }

        return isNegative ? -result : result;  
    }
};

int main()
{
    Solution solution;

    int x;
    cin >> x;

    cout << solution.reverse(x) << endl;
}
