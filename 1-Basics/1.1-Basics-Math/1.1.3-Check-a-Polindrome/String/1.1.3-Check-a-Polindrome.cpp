#include <iostream>
#include <string>
#include <cctype>
using namespace std;

/*

*/
class Solution
{
public:
    bool isPalindrome(string s)
    {
        int start = 0;
        int end = s.size() - 1;

        while (start < end)
        {
            if (!isalnum(s[start]))
            {
                start++;
            }

            else if (!isalnum(s[end]))
            {
                end--;
            }

            else if (tolower(s[start]) != tolower(s[end]))
            {
                return false;
            }

            else
            {
                start++;
                end--;
            }
        }

        return true;
    }

    bool usingCopy(string str)
    {
        string original;
        string reversedCopy;

        for (int i = 0; i <= str.size() - 1; i++)
        {
            if (isalnum(str[i]))
            {

                original.push_back(tolower(str[i]));
            }
        }

        for (int i = str.size() - 1; i >= 0; i--)
        {
            if (isalnum(str[i]))
            {

                reversedCopy.push_back(tolower(str[i]));
            }
        }

        return reversedCopy == original;
    }
};

int main()
{
    Solution solution;
    string test = "A man, a plan, a canal: Panama";
    // cout << solution.isPalindrome(test) << endl;
    cout << solution.usingCopy(test) << endl;
}
