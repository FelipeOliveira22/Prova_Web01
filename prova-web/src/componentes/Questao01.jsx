import React from 'react';

const Questao01A = () => {

    const lista = [
        { a: 1, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 },
        //Nessa etapa foram implementados os valores em uma const que armazena os valores em uma lista;
    ];

    return (//Aqui é capturado o valor através das props que estão dentro da constante "const"
        <>
            <Questao01B lista={lista} />
        </>
    );
};


function Questao01B({ lista }) {//Recebe a props que vem da função
    return (
        <>
            <div>Maior Valor de cada JSON:</div>
            <br></br>
            {
                //Organizando os valores e mapeando;
                lista.map((item, index) => {
                    //Utiliza da biblioteca para pegar os valores e a partir deles calcular o max e min sem a necessidade de um if
                    const biggest = Math.max(item.a, item.b, item.c);
                    return (
                        //Nesse item é atribuido um Json com o formato estipulado e trabalhamos com a , b e c pq na lista ele tinha dado tudo a, esse key define cada elmento da lista que logo abaixo é convertido  para string
                        <div key={index}>

                            {JSON.stringify(item)} : {biggest} 
                            
                        </div>
                    );
                })
            }
        </>
    );
}

export { Questao01A, Questao01B };
