import React, { useState } from 'react'
import './Mega.css';

export default props =>{
    function gerarNumeroNaoContido (min, max, array){
        const aleatorio = parseInt(Math.random()*(max+1 - min))+min
        return array.includes(aleatorio) ? gerarNumeroNaoContido (min, max, array) : aleatorio
    }
    
    function gerarNumeros(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums)=>{
            const numeroNovo = gerarNumeroNaoContido(1,60,nums);
            return [...nums,numeroNovo];
        },[])
        .sort((n1,n2)=>n1-n2)
        return numeros
    }

const [qtd, setQtd]=useState ( props.qtde || 6)
const numerosInicais = gerarNumeros(qtd)
const [numeros, setNumero]=useState (numerosInicais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <div>
                <label>Quantidade</label>
                <input type="number"  min="6" max ="7"value={qtd} onChange={e =>{
                    setQtd(+e.target.value)
                    setNumero(gerarNumeros(+e.target.value))
                    }}></input>
            </div>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_=>setNumero(gerarNumeros(qtd))}>Gerar Números</button>
        </div>
    );
}