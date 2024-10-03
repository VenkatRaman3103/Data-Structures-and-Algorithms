#include <iostream>
#include <vector>
#include <set>
using namespace std;

class Solution
{
public:
    vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
    {
        set<int> resultSet;
        vector<int> result;

        for (int i = 0; i < nums1.size(); i++)
        {
            int element = nums1[i];
            for (int j = 0; j < nums2.size(); j++)
            {
                if (element == nums2[j])
                {
                    resultSet.insert(element); 
                    break; 
                } }
        }

        result.assign(resultSet.begin(), resultSet.end()); 
        return result;
    }
};

void PrintArray(const vector<int>& arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << endl;
    }
}

int main()
{
    Solution solution;

    vector<int> nums1 = {1, 2, 2, 1};
    vector<int> nums2 = {2, 2};
    vector<int> result = solution.intersection(nums1, nums2);
    PrintArray(result);
}
