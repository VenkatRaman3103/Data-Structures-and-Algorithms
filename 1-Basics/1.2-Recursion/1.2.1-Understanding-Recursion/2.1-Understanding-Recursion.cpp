#include <iostream>
using namespace std;

int recursiveFunction(int n){

    // base case
    if(n <=0){
        return n;
    }

    cout << n << endl;

    return recursiveFunction(n - 1);
}

int main(){
    recursiveFunction(10);
}