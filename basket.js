function priceFormant(pMoney){
    return pMoney.toFixed(2)
}

function createBasket(pList) {
    return `
        <table>
            ${createBasketItems(pList)}
            ${createTotalSection(pList)}
        <table/>
    `;
}

function createBasketItems(pList) {
    return pList.map((p, index) => `
        <tr>
            <td>${p.productName}</td>
            <td>${p.price}</td>
            <td><img src="${p.productImage}"></td>
            <td><button id="${index}">remove</button></td>
        </tr>
    `).join("");
}

function createTotalSection(pList){
    let total = 0;
    pList.forEach(p => total += p.price);
    
    return `
        <tr>
            <td colspan="2">Total Price</td>
            <td colspan="2" class= "price">${priceFormant(total)}</td>
        </tr>
    `;
}

function removeButtonClickedEvent(pEvent){
    let clickedElement = pEvent.target
    if(clickedElement.tagName.toLowerCase() === "button"){
        let index = parseInt(clickedElement.id);
            basketList.splice(index, 1)
        

        upddateBasket(undefined);
    }
    
}

    

function upddateBasket(pProduct){
    if(pProduct !=null){
        basketList.push(pProduct);
    }
    document.querySelector("#basket-container").innerHTML = createBasket(basketList);
    }