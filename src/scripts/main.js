function sortear() {
    const totalresultados = Number(document.querySelector('#TotalResultados').value);
    const menorvalor = Number(document.querySelector('#MenorValor').value);
    const maiorvalor = Number(document.querySelector('#MaiorValor').value);
    
    const resultadovalores = document.querySelector('.resultado-valores')
    resultadovalores.innerHTML = ''
    for(let i = 0; i < totalresultados; i++) {
        const resultado = Math.floor(Math.random() * (maiorvalor - menorvalor + 1 )) + menorvalor
        console.log (resultado)
    
        const resultadoHTML = document.createElement('div')
        resultadoHTML.classList.add('valor')
        resultadoHTML.innerText = resultado
    
        resultadovalores.append(resultadoHTML)
    }
}