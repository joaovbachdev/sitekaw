var quadrados = []

function criarQuadrado(x, cor, imagem, titulo, id) {
    const quadrado = document.createElement('div'); // Cria um novo elemento div
    quadrado.classList.add('quadrado'); // Adiciona a classe para estilização
    quadrado.style.left = `${x}px`; // Define a posição x
    quadrado.style.top = '10%'; // Define a posição y (pode ser ajustada)
    quadrado.style.backgroundImage = `url('imagens/area3/${imagem}')`;
    quadrado.style.textAlign= 'center'
    quadrado.setAttribute('id',id)

    tit = document.createElement('h3')
    tit.textContent = titulo
    tit.style.zIndex = '50'
    tit.style.position = 'relative'
      tit.style.marginTop = '60%'
      tit.style.marginRight = '10%'
    quadrado.appendChild(tit)
    return quadrado; // Retorna o elemento criado
}

// Seleciona a div pai
const divPai = document.querySelector('.minha-div');

// Cria e adiciona os quadrados
const posicoesX = [-350, 620, 1600, 2700];
const cor = ['red','blue','yellow', 'pink']
const imagens = ['diagramacao.png','identidade-visual.png','ilustracao.png','sobre-mim.png']
const titulos = ['Diagramação','Criação de identidade visual', 'Ilustração', 'Midias-sociais']
const ids = ['diagramacao', 'ident-visual','ilustracao','midias-sociais']

posicoesX.forEach((posicao,index) => {
    const quadrado = criarQuadrado(posicao, cor[index], imagens[index], titulos[index], ids[index]);
    divPai.appendChild(quadrado); // Adiciona o quadrado à div pai
    quadrados.push(quadrado)
});


function move(){
    quadrados.unshift(quadrados.pop());
    console.log(quadrados)
    quadrados.forEach((item, index)=>{
        item.style.left = `${posicoesX[index]}px`

    })
}
function direita(){
    quadrados.push(quadrados.shift());
    quadrados.forEach((item, index)=>{
        item.style.left = `${posicoesX[index]}px`
    })
}



document.getElementById('sobreMimBtn').addEventListener('click', function() {
    console.log("dale")
    window.location.href = '/sitekaw/sobremim'; // Redireciona para a URL desejada
});
document.getElementById('first').addEventListener('click', function() {
    console.log("dale")
    window.location.href = '/sitekaw/first'; // Redireciona para a URL desejada
});

document.getElementById('confira').addEventListener('click', function() {
    console.log("dale")
    window.location.href = '/sitekaw/confira'; // Redireciona para a URL desejada
});

document.getElementById('ident-visual').addEventListener('click', function() {
    console.log("dale")
    window.location.href = '/sitekaw/ident-visual'; // Redireciona para a URL desejada
});

document.getElementById('midias-sociais').addEventListener('click', function() {
    console.log("dale")
    window.location.href = '/sitekaw/Midias-sociais'; // Redireciona para a URL desejada
});
document.getElementById('midias-sociais').addEventListener('click', function() {
    console.log("dale")
    window.location.href = '/sitekaw/Midias-sociais'; // Redireciona para a URL desejada
});
document.getElementById('ilustracao').addEventListener('click', function() {
    console.log("dale")
    window.location.href = '/sitekaw/ilustracao'; // Redireciona para a URL desejada
});
