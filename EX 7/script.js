const x = document.getElementById('botao')
const h2 = document.querySelector('h2')

x.addEventListener("click", () => {
    h2.innerHTML = "Conexão realizada com sucessso!"
})