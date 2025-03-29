#include <iostream>
#include <vector>
using namespace std;

vector<int> bubbleSort(vector<int> nums) {

    for (int i = 0; i < nums.size(); i++) {

        for (int j = 1; j < nums.size() - i; j++) {

            if (nums[j] < nums[j - 1]) {

                // swap
                int temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
            }
        }
    }

    return nums;
}

void printAnArray(vector<int> nums) {
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << endl;
    }
}

int main() {
    vector<int> arr = {3, 2, 4, 1, 5};

    printAnArray(bubbleSort(arr));
}
