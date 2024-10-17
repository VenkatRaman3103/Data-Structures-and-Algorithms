#include <iostream>
#include <vector>
using namespace std;

vector<int> bubbleSort(vector<int>arr){

  for (int i = 0; i < arr.size(); i++) {
      
    for(int j = 1; j < arr.size() - i; j++){
      if(arr[j-1] > arr[j]){
        // swapping
        int temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  } 
   
  return arr;
}

void printAnArray(vector<int>arr){

  for (int i = 0; i < arr.size(); i++) {
     cout << arr[i] << " ";
  }
  cout << endl;
}

int main(){
  vector<int> arr = {4, 3, 1, 5, 2};
  printAnArray(bubbleSort(arr));
}
