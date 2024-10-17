#include <iostream>
using namespace std;

int main()
{
    int numbers = 12345;

    int count = 0;

    int test = 23 / 10;
    cout << test << endl;

    while (numbers > 0)
    {
        count = count + 1;

        numbers = numbers / 10;
    }

    cout << count << endl;
}