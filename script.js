let createProductForm = document.querySelector(".create-product-form");
let product_name = document.getElementById('product-name')
let product_description = document.getElementById('product-description')
let product_image = document.getElementById('image')
let product_price = document.getElementById('price')

let create_product_btn = document.querySelector('.create-product-btn')

let products = [];

createProductForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    let name = product_name.value
    let description = product_description.value
    let imageUrl = product_image.value
    let price = product_price.value

    let item = name.trim() != "" && description.trim() != "" && imageUrl.trim() != "" && price.trim() != ""

    let product = {
        name : name,
        desc : description,
        image: imageUrl,
        price :price
    } 

    if(item){
        products.push(product)

        getProducts()

        product_name.value = ""
        product_description.value = ""
        product_image.value = ""
        product_price.value = ""
        create_product_btn.value = "Create Product"
    }

    

    console.log(products);

})

function getProducts(){

    let productCards = document.querySelectorAll(".products .product")

    productCards.forEach(el =>{
        el.remove()
    })


    products.forEach((product, index)=>{

        let product_title = document.createElement('p')
        product_title.className = "productTitle"
        product_title.textContent = product.name

        let prod_desc = document.createElement('p')
        prod_desc.className = "productDesc"
        prod_desc.textContent= product.desc

        let imgUrl = document.createElement('img')
        imgUrl.className = "imageUrl";
        imgUrl.setAttribute("src", `${product.image}`)

        let prod_price = document.createElement('p')
        prod_price.className = "productPrice"
        prod_price.textContent = product.price

        
        let deleteBtn =document.createElement ('button')
        deleteBtn.className ="delete"
        deleteBtn.textContent= "Delete"
        deleteBtn.addEventListener("click", ()=>{
            products.splice(index, 1)

            getProducts()
        })

        let updateBtn =document.createElement ('button')
        updateBtn.className ="update"
        updateBtn.textContent = "Update"
        updateBtn.addEventListener('click', ()=>{

            product_name.value = product.name
            product_description.value = product.desc
            product_image.value = product.image
            product_price.value = product.price
            create_product_btn.value = "Update Product"

            products.splice(index, 1)
            getProducts()
        })

        let cardfooter = document.createElement('div')
        cardfooter.appendChild(deleteBtn)
        cardfooter.appendChild(updateBtn)


        let singleProductCard = document.createElement('div')
        singleProductCard.className="product"

        singleProductCard.appendChild(imgUrl)
        singleProductCard.appendChild(product_title)
        singleProductCard.appendChild(prod_desc)
        singleProductCard.appendChild(prod_price)
        singleProductCard.appendChild(cardfooter)

        console.log(singleProductCard);

        let productsCard = document.querySelector('.products');
        productsCard.appendChild(singleProductCard)
    })
}
