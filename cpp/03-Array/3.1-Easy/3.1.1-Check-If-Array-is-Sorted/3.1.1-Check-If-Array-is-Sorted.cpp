#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    bool check(vector<int> &nums)
    {

        int counter = 0;

        if(nums[0] < nums[nums.size() - 1]){
            counter++;
        }

        for (int i = 1; i < nums.size(); i++)
        {
            if (nums[i - 1] < nums[i]){
                counter++;
            };
        }

        return counter <= 1;
        
    }
};

int main()
{
    
}
