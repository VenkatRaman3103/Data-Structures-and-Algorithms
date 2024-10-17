#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        // vector<int> nonRepeatingElements = {};

        // for (int i = 0; i < nums.size(); i++)
        // {
        //     int element = nums[element];

        //     bool isExist = false;

        //     for (int j = 0; j < nonRepeatingElements.size(); j++)
        //     {
        //         int checkWith = nonRepeatingElements[j];

        //         if (checkWith == element)
        //         {
        //             isExist = true;
        //         }
        //     }

        //     if (!isExist)
        //     {
        //         nonRepeatingElements.push_back(element);
        //     }
        // }

        // return nonRepeatingElements.size();

        int j = 1;

        for(int i = 1; i < nums.size(); i++){
            if(nums[i] != nums[i - 1]){
                nums[j] = nums[i];

                j++;
            }
        }

        return j;

    }
};

int main()
{
}