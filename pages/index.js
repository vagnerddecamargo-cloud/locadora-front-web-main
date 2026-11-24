"use client"

import { useEffect, useState } from 'react'

const urlFilmes = 'http://10.68.114.142:3001/filmes'

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function buscarDados() {
            try {
                const response = await fetch(urlFilmes);

                if (!response.ok) throw new Error('Erro ao buscar filmes');
                const dados = await response.json();
                
                setFilmes(dados); 
            } catch (error) {
                console.log(error.message);
            }
        }

        buscarDados();
    }, []);

    return (
        filmes.map(filme => {

            return <>
                <FilmeCard filme={filme} />
            </>
        })
    );
}

function FilmeCard({ filme }) {
    return <ul>
        <li>
            <p>Titulo: {filme.titulo}</p>
            <p>Ano: {filme.ano}</p>
        </li>
    </ul>
}

export default Home
