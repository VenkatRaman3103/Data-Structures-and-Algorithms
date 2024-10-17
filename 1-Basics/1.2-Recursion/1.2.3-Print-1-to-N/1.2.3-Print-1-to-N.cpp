#include <iostream>
using namespace std;

class Solution
{
public:
    int print1toN(int limit, int number)
    {
        // base case
        if (limit == number)
        {
            return limit;
        }

        cout << number << endl;

        number = number + 1;

        return print1toN(limit, number);
    }
};

int main()
{
    Solution solution;

    int x;
    cin >> x;

    cout << solution.print1toN(x, 0) << endl;
}