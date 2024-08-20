import React, { useState, useEffect } from 'react';

//Função utilizada para atribuir os valores e encontrar.
const fetchCountriesData = () => {
    //Aqui a promisse é desenvolvida e nela ocorre a distribuição dos dados de forma local;
    return new Promise((resolve) => {
        const data = [
            { "capital": ["Dublin"], "population": 4994724 },
            { "capital": ["Nicosia"], "population": 1207361 },
            { "capital": ["Madrid"], "population": 47351567 }
        ];
        resolve(data);
    });
};

const Questao04 = () => {
    const [minPopulationCountry, setMinPopulationCountry] = useState('');
    const [maxPopulationCountry, setMaxPopulationCountry] = useState('');
    //Essas duas const irão armazenar o valor atribuido que veio da Promisse lá de cima;

    useEffect(() => {
        const fetchCapitals = async () => {
            try {
                const data = await fetchCountriesData();
                //Inicia com as primeiras posições dos valores que foram buscados no direcionamento.
                if (data.length > 0) {
                    let minCountry = data[0];
                    let maxCountry = data[0];
                    //Aqui ocorre a comparação para verificar se os valores estão maiores, menores ou iguais e vai armazenando, as comparações necessárias;
                    data.forEach((country) => {
                        if (country.population < minCountry.population) {
                            minCountry = country;
                        }
                        if (country.population > maxCountry.population) {
                            maxCountry = country;
                        }
                    });
                    //Armazena os valores minimos e maximos dos locais;
                    setMinPopulationCountry(`${minCountry.capital[0]} - ${minCountry.population}`);
                    setMaxPopulationCountry(`${maxCountry.capital[0]} - ${maxCountry.population}`);
                }
                //Caso o valor não seja capturado gera um erro
            } catch (error) {
                console.error('Dados não encontrados', error);
            }
        };

        fetchCapitals();
    }, []); //Isso aqui significa que ele só é exibido uma vez depois que forma após ser chamado pelo fetchCapitals;

    return (
        <div>
            <h1>Questão 04</h1>
            <p>Menor população: {minPopulationCountry}</p>
            <p>Maior população: {maxPopulationCountry}</p>
        </div>
    );
};

export default Questao04;
