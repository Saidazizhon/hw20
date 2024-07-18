const API_URL = "https://dummyjson.com"
const wrapper = document.querySelector(".wrapper")

async function fetchUsers(api){
    let reponse = await fetch(`${api}/products`)

    reponse
        .json()
        .then((res)=> createCard(res))
        .catch((err)=> console.log(err))
}

fetchUsers(API_URL)


function createCard(data){
    data.products.forEach((products)=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML =`
            <img src="${products.images}" alt="">
            <h3>${products.id}</h3>
            <h3>${products.title}</h3>
            <h4>${products.description}</h4>
            <h5>${products.category}</h5>
            <h5>${products.price}</h5>
            <h5>${products.discountPercentage}</h5>
            <h5>${products.rating}</h5>
            <h5>${products.stock}</h5>
            <h5>${products.tags}</h5>
            <h5>${products.brand}</h5>
            <h5>${products.sku}</h5>
            <h5>${products.weight}</h5>
            <h5>${products.warrantyInformation}</h5>
            <h5>${products.shippingInformation}</h5>
            <h5>${products.availabilityStatus}</h5>
            <h5>${products.reviews[0].rating}</h5>
            <h5>${products.reviews[0].comment}</h5>
            <h5>${products.reviews[0].date}</h5>
            <h5>${products.reviews[0].reviewerName}</h5>
            <h5>${products.reviews[0].reviewerEmail}</h5>
            <h5>${products.returnPolicy}</h5>
            <h5>${products.minimumOrderQuantity}</h5>
            <h5>${products.meta.createdAt}</h5>
            <h5>${products.meta.updatedAt}</h5>
            <h5>${products.meta.barcode}</h5>
            `
        wrapper.appendChild(card)
    })
}