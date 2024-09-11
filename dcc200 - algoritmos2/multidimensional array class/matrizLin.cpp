#include <iostream>
#include "matrizLin.h"

using namespace std;

MatrizLin::MatrizLin(int i, int j)
{
    nl = i;
    nc = j;

    vet = new int[nl * nc];
};

MatrizLin::MatrizLin()
{
    nl = 3;
    nc = 3;

    vet = new int[nl * nc];
};

MatrizLin::~MatrizLin()
{
    delete[] vet;
};

int MatrizLin::detInd(int i, int j)
{
    if (i >= 0 && i < nl && j >= 0 && j < nc)
    {
        return 0;
    }
    else
    {
        return -1;
    }
};

int MatrizLin::get(int i, int j)
{
    int k = detInd(i, j);

    if (k != -1)
    {
        return vet[i * nc + j];
    }
    else
    {
        cout << "Índice inválido! (get)" << endl;
        exit(1);
    }
}

void MatrizLin::set(int i, int j, int val)
{
    int k = detInd(i, j);

    if (k != -1)
    {
        vet[i * nc + j] = val;
    }
    else
    {
        cout << "Índice inválido! (set)" << endl;
    }
};

void MatrizLin::imprime()
{
    for (int i = 0; i < nl; i++)
    {
        cout << "[";
        for (int j = 0; j < nc; j++)
        {
            cout << " " << get(i, j) << " ";
        }
        cout << "]" << endl;
    }
    cout << "\n";
}

MatrizLin *MatrizLin::transposta()
{

    MatrizLin *transposta = new MatrizLin(nc, nl);

    for (int i = 0; i < nl; i++)
    {
        for (int j = 0; j < nc; j++)
        {
            transposta->set(j, i, get(i, j));
        }
    }
    return transposta;
}

void MatrizLin::preenche()
{
    for (int i = 0; i < nl; i++)
    {
        int contador = 1;
        for (int j = 0; j < nc; j++)
        {
            this->set(i, j, contador++);
        }
    }
}