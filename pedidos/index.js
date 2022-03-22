
const enviar = document.querySelector("#enviar").addEventListener("click", dados =>{

    const nomecliente = document.querySelector("#name").value
    const pedido = document.querySelector("#txt").value

    if(nomecliente.length == ""  || pedido.length  == ""){
        alert("Faltam dados")
    }else{

        const area = document.querySelector("#area-pedido")
        area.style.backgroundColor = "#000"

        const ivazio = document.querySelector("#vazio")
        ivazio.style.display = "none"
        
        const ul = document.querySelector("#area-pedido")
        const li = document.createElement("li")
        li.classList.add("block-pedidos")
        ul.appendChild(li)
        
        const divnp = document.createElement("div")
        divnp.classList.add("np")
        li.appendChild(divnp)

        const pstrong = document.createElement("strong")
        pstrong.classList.add("ps")
        divnp.appendChild(pstrong)

        const pnp = document.createElement("p")
        pnp.classList.add("p-np")
        divnp.appendChild(pnp)

        let texto1 = document.createTextNode(nomecliente)
        let texto2 = document.createTextNode(pedido)

        pstrong.appendChild(texto1)
        pnp.appendChild(texto2) 

        const label = document.createElement("label")
        label.classList.add("licon")
        li.appendChild(label)

        const icon = document.createElement("img")
        icon.src = "assets/trash-sharp.svg"
        icon.classList.add("lixo")
        label.appendChild(icon)
    }
    document.querySelector("#name").value = ""
    document.querySelector("#txt").value = ""
})



//deletar pedido


const label = document.querySelector(".licon")
label.addEventListener("click", () => {

    const li = document.querySelectorAll("li")

    li.forEach( (item, index) => {

        console.log(item)
        item.remove()
        
        
    });

})



