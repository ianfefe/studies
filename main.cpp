#include <iostream>
#include "matrizLin.h"

using namespace std;

int main()
{

    int l, c;
    cin >> l;
    cin >> c;

    MatrizLin m(l, c);
    m.imprime();
    m.preenche();
    m.imprime();

    MatrizLin *mTrans = m.transposta();

    mTrans->imprime();
}