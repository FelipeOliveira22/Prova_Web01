import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    //Guardar os valores
    const [minPopulationCountry, setMinPopulationCountry] = useState('');
    const [maxPopulationCountry, setMaxPopulationCountry] = useState('');

    useEffect(() => {
        const fetchCapitals = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population');
                const data = await response.json();

                if (data.length > 0) {
                    //Inicia com as primeiras posições dos valores que foram buscados no direcionamento.
                    let minCountry = data[0];
                    let maxCountry = data[0];
                    //Aqui ocorre a comparação para verificar se os valores estão maiores, menres ou iguais e vai armazenando;
                    data.forEach((country) => {
                        if (country.population < minCountry.population) {
                            minCountry = country;
                        }
                        if (country.population > maxCountry.population) {
                            maxCountry = country;
                        }
                    });
                    //Guarda o valor que será exibido no final;
                    setMinPopulationCountry(`${minCountry.capital[0]} - ${minCountry.population}`);
                    setMaxPopulationCountry(`${maxCountry.capital[0]} - ${maxCountry.population}`);
                }

            } catch (error) {
                console.error('Dados não encontrados!', error);
            }
        };

        fetchCapitals();
    }, []); //Isso aqui significa que ele só é exibido uma vez depois que forma após ser chamado pelo fetchCapitals;

    return (
        <div>
            <h1>Questão 03</h1>
            <p>Menor população: {minPopulationCountry}</p>
            <p>Maior população: {maxPopulationCountry}</p>
        </div>
    );
};

export default Questao03;
