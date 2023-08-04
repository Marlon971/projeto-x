let idade = 5;
console.log(idade);

 //  let = tipo da variavel
 //  idade = nome da variavel
 //  = operação de distribuição
 //  5 é o valor que está sendo atribuido 
 //  console.log(idade)
        
//função de ceta  ,() => {}

const personagens = document.querySelectorAll('.personagem');   

personagens.forEach((personagem) =>
    { personagem.addEventListener('mouseenter', () => { 
        personagem.classList.add('selecionado')
    })


})
personagens.forEach((personagem) =>
    { personagem.addEventListener('mouseleave', () => { 
        personagem.classList.remove('selecionado') 
    })
})

//foreach = para cada / ele representa um laço,
 //nesse caso ele fez com que, para cada vez que
 // o usuario passar o mouse encima dos personagens 
 //faria com q aparecesse uma borda azul neles

//addEventListener = adicione um evento que nesse caso,
  // o evento é se caso o mouse(mouseenter) passar por cima 
  // da classe personagem, esse personagem se tornará 
  // selecionado(classList.add('selecionado'))
  //obs: na classe 'selecionado', tem uma adição de uma
  //borda azul pro personagem que o mouse passou por cima







    































    

