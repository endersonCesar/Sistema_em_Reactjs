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