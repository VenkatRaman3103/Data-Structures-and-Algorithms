#include <iostream>
#include <vector>

using namespace std;

vector<int> selectionSort(vector<int> nums) {

    for (int i = 0; i < nums.size(); i++) {

        int min = i;

        for (int j = i; j < nums.size() - 1; j++) {

            // picking the minimum element
            if (nums[j] < nums[min]) {
                min = j;
            }

            // swap the positions
            int temp = nums[min];
            nums[min] = nums[i];
            nums[i] = temp;
        }
    }

    return nums;
};

void printAnArray(vector<int> nums) {

    for (int i = 0; i < nums.size(); i++) {
        int element = nums[i];

        cout << element << endl;
    }
}

int main() { printAnArray(selectionSort({5, 4, 2, 1})); }
