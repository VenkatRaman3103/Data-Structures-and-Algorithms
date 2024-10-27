#include <iostream>
#include <vector>
using namespace std;

vector<int> insertionSort(vector<int> nums) {

    for (int i = 0; i < nums.size(); i++) {

        int min = i;

        for (int j = i; j < nums.size(); j++) {

            if (nums[j] < nums[min]) {
                min = j;
            }
            // swap
            int temp = nums[min];
            nums[min] = nums[i];
            nums[i] = temp;
        }
    }
    return nums;
};

void printAnArray(vector<int> nums) {
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << endl;
    };
};

int main() { printAnArray(insertionSort({2, 3, 1, 4, 5})); }
