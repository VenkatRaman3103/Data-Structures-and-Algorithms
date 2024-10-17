#include <iostream>
#include <map>
using namespace std;

class Solution
{
public:
    int romanToInteger(string s)
    {
        map<char, int> letterWithNumber = {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};

        int result = 0;

         for(int i = 0; i < s.length(); i++){
            if(letterWithNumber[s[i]] < letterWithNumber[s[i+1]]){
                result -= letterWithNumber[s[i]];
            }
            else{
                result += letterWithNumber[s[i]];
            }
        }

        return result;
    }

};

int main()
{
    string s = "MCMXCIV";
    Solution solution;
    cout << solution.romanToInteger(s) << endl;
}
