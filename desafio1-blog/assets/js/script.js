const favoritos = [...document.querySelectorAll('.icon')]
console.log(favoritos)

favoritos.forEach((favorito) => {
    favorito.addEventListener('click', () => {
        favorito.classList.toggle('filled')
    })
})