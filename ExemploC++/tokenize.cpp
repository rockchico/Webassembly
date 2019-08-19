#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main() {
    string data="",super="",inp[12];
    fstream f;
    size_t a;
    int i=0;
    bool check=true;
    f.open("inp.txt",ios::in);

    while(f.good()) {
        check=true;

        getline(f,data);


        while(check) {
            a=data.find(' ');
            if(a!=string::npos) /*1st token*/ {
                super=data.substr(0,a);
            } else {
                super=data.substr(0,data.size()); /* last token end of inner while */
                check=false;
            }
            if(super!="") {
                inp[i++]=super;/* Token insertion*/
            }
            data=data.substr(a+1,data.size()); /* 2nd substring the original string */
        }

    }

    f.close();

    for(int j=0;j<i;j++) {
        cout<<inp[j]<<endl;
    }

    return 0;
}