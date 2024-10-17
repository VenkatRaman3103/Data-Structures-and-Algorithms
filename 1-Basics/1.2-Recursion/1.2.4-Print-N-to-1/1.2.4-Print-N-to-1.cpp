#include <iostream>
using namespace std;

class Solution
{
public:
    int PrintNto1(int n)
    {
        if (n <= 1)
        {
            return n;
        }

        cout << n << endl;

        return PrintNto1(n - 1);
    }
};

int main()
{
    int x;
    cin >> x;

    Solution solution;
    cout << solution.PrintNto1(x) << endl;
}