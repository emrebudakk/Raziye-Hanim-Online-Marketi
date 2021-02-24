const basketList = [];



document.querySelector("#products-container").innerHTML = createProductCatalog(productList);
document.querySelector("#products-container").addEventListener("click", buyButtonClickedEvent);
document.querySelector("#basket-container").addEventListener("click", removeButtonClickedEvent);
