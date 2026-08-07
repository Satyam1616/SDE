#include <iostream>
using namespace std;

// int square(int n){
//     int x = n*n;
//     return x;
// }



// void change(int x) {
//     x = 100;
// }

// int main() {
//     int a = 10;

//     change(a);

//     cout << a;
// }
// int main(){
// //     string name = "Satyam";
// //     int age = 22;
// //     float CGPA = 8.4;
// //     bool isStudent = true;
// //     char  grade = 'A';

// //     cout << name << endl;
// //     cout << age << endl;
// //     cout << CGPA << endl;
// //     cout << isStudent << endl;
// //     cout << grade << endl;

// //     return 0;


// // square(12);

// }

int main(){

int a = 20;

int *p = &a;

cout << a << endl;
cout << *p << endl;

*p = 50;

cout << a << endl;
}