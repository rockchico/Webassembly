#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;
 
int main () {
   int i,j;

   int r[10];
 
   // set the seed
   srand( (unsigned)time( NULL ) );

   /* generate 10  random numbers. */
   for( i = 0; i < 10; i++ ) {
      // generate actual random number
      r[i] = rand();
      cout <<" Random Number "<< i << ": " << r[i] << endl;

      cout <<" Random Number "<< i << ": " << &r[i] << endl;
   }


    double balance[5] = {1000.0, 2.0, 3.4, 17.0, 50.0};
    cout <<" tamanho balance :"<< sizeof(balance) << endl;

    double balance2[] = {1000.0, 2.0, 3.4, 17.0, 50.0};
    cout <<" tamanho balance2 :"<< sizeof(balance2) << endl;




   return 0;
}