#include <iostream>
using namespace std;

class Solution
{
public:
    int factorialOfNumber(int limit, int number){

        // base case
        if(limit <= 1){
            return number * limit;
        }

        return factorialOfNumber(limit - 1, number * limit);
    }
};

int main()
{
    int x;
    cin >> x;

    Solution solution;

    cout << solution.factorialOfNumber(x, 1) << endl;
}