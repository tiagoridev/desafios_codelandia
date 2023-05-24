const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=56505a13f8014b549e4eb806b575c4a9'


const favoritos = [...document.querySelectorAll('.icon')]
console.log(favoritos)

favoritos.forEach((favorito) => {
    favorito.addEventListener('click', () => {
        favorito.classList.toggle('filled')
    })
})

async function addPost(){
    let contentGroup = document.querySelector('.content-text');
		let secao = document.querySelector('section')
		let container = document.querySelector('.container-main')
		// const title = document.querySelector('.title-text');
		// const text = document.querySelector('.text');	

    try{
			const response = await fetch(url)
			const responseJson = await response.json();
			
			console.log(responseJson.articles)

			if(responseJson.articles.length > 0){
				contentGroup.innerHTML = ''
				// contentGroup.style.display = 'none'
				// main.innerHTML = 'Carregando...'
				for(let indice in responseJson.articles){				
									
					let title = document.createElement('h2');
					title.innerText = responseJson.articles[indice].title;					
					title.classList.add('title-text')					
					contentGroup.appendChild(title);

					let text = document.createElement('p');
					text.innerText = responseJson.articles[indice].content;
					text.classList.add('text')
					contentGroup.appendChild(text)
					
					secao.style.backgroundColor = 'pink'

				}
			} else {
				contentGroup.innerHTML = 'SEM POST PARA EXIBIR'
			}

    } catch (error) {
			contentGroup.innerHTML = 'ERRO DE REQUISIÇÃO DA API'
		}

}
addPost()