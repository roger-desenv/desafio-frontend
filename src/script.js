//https://www.youtube.com/watch?v=mmCuNbChZ9I

const listProducts = document.getElementById('listProducts')
const loadProducts = document.getElementById('loadProducts')

let page = 1


function fetchApi() {

    let url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    
    //LOOP NA API
    page++
    return fetch(url)

        //THEN É UTILIZADO PARA TAREFAS ASSINCRONAS E SERÁ UTILIZADO POSTERIORMENTE OU QUANDO FOR CHAMADO
          .then((response) => response.json())
          .then(show)   
}

function show(data) {
    	
    
    //FOREACH PERCORRE TODOS ELEMENTOS DO ARRAY
    data.products.forEach((product) => {

        //CRIOU UMA NOVA DIV
        const newPage = document.createElement('div') 

        //ADICIOUNOU A DIV A CLASSE 'ITEM'
        newPage.classList.add('item')

        //ATRIBUI AS DIVS CRIADAS OS IDS DOS PRODUTOS
        newPage.setAttribute('id', product.id)

        //ESTRUTURA HTML DOS PRODUTOS
        newPage.innerHTML += `
            <div class="products">
               
                <img class="img" src="${product.image}">
                <h3 class="title-product">Produto ${product.id + 1}</h3>
                <p class="text">${product.description}</p>
                <span class="oldPrice">De R$${product.oldPrice}</span><br>
                <strong><span id="price">Por R$${product.price}</span></strong><br>
                <span>ou ${product.installments.count}x de R$${product.installments.value} </span><br>
                <button class="button">Comprar</button>      
            </div>
         
           `
        // DIVS INSERIDAS COMO FILHO DA DIV PRINCIPAL
        listProducts.appendChild(newPage)
    });
}

// LOAD DOS NOVOS PRODUTOS
loadProducts.onclick = () => {
    fetchApi()
}

fetchApi()


//FORM - HELP THE ALGORITHISM

const btnForm = document.querySelector("#btnForm")

btnForm.addEventListener("click", function(e) {
 
  const cpfClient = document.querySelector("#cpfClient")

  const value = cpfClient.value

    console.log(value.length)

  if (value.length === 11) {
    alert('Formulário Enviado com Sucesso!')
  }

})
