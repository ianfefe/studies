#ifndef MATRIZLIN_H
#define MATRIZLIN_H

class MatrizLin
{
private:
    int nc, nl;
    int *vet;

    int detInd(int i, int j);

public:
    MatrizLin(int i, int j);
    MatrizLin();
    ~MatrizLin();

    int get(int i, int j);
    void set(int i, int j, int val);

    MatrizLin *transposta();

    void imprime();
    void preenche();
};

#endif