import React, { useState } from 'react';

const Questao02 = () => {
// Estado para controlar se a imagem é de frente ou de costas
    const [virar, setVirar] = useState(true);

    const frente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    const costa = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    const alternarImagem = () => {
        setVirar(!virar);
// Função que altera como as imagens se encontram, essa variação altera entre a frente e as costas.

    };

    //Esse return é definido a imagem do pokemón e como ele irá aparecer na tela.
    return (
            //Evento do botão que só é executado apenas ao clicar para girar no OnClick.
        <div>
            <img
                src={virar ? frente : costa} //Aqui é feita uma verificação de que: se não ocorre o caso 1, ocorre o 2, nesse sentido, ele depende da função que gira ou não ele;
                alt="Imagem do Pokémon"
                style={{ width: '200px', height: '200px' }}
            />
            <br />
            <button onClick={alternarImagem}>Girar Pokémon</button>
            
        </div>
    );
};

export default Questao02;
