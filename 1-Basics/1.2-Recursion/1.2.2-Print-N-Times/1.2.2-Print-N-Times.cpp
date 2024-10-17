#include <iostream>
using namespace std;

class Solution
{
public:
    int printNTimes(int n)
    {

        // base class
        if (n <= 0)
        {
            return n;
        }

        cout << n << endl;

        return printNTimes(n - 1);
    }
};

int main()
{
    int x;

    cin >> x;

    Solution solution;

    cout << solution.printNTimes(x) << endl;
}