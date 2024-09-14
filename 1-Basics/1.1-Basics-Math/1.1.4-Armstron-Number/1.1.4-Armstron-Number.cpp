#include <iostream>
using namespace std;

class Solution
{
public:
    bool isArmstrongNumber(int number)
    {
        int originalNumber = number;
        int tempVar = number;

        int count = 0;
        int armstrongNumber = 0;

        while (tempVar > 0)
        {
            tempVar = tempVar / 10;
            count = count + 1;
        }

        tempVar = originalNumber;

        while (tempVar > 0)
        {
            int lastNumber = tempVar % 10;

            int poweredNumber = 1;

            for (int i = 0; i < count; i++)
            {
                poweredNumber = lastNumber * poweredNumber;
            }

            armstrongNumber = armstrongNumber + poweredNumber;

            tempVar = tempVar / 10;
        }

        return armstrongNumber == originalNumber;
    }
};

int main()
{
    Solution solution;

    int x;
    cin >> x;
    cout << solution.isArmstrongNumber(x) << endl;
}