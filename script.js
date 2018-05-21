var MI_SALES_TAX = 0.06;
var price = [9, 9, 6, 15, 9, 9];

var products = ["Princess Gloss", "Sugar Baby Gloss", "Mink Lashes", "Gold Digger Brush Set", "Powder Highlighter", "Glow Body Oil" ]
var subTotal = 0;
var cart = [];
var tempText = document.getElementById("temp");

function addToCart(indexNum)
{
    tempText.innerHTML = null; //deletes the your cart is currently empty placeholder
    cart.push(products[indexNum]);
    subTotal += price[indexNum];    
    alert(`${products[indexNum]} added to cart!`);
    printToCart(products[indexNum]);
    
}
function calcTotal(sub)
{
    sub = subTotal;
    return subTotal * MI_SALES_TAX;
}

function printToCart(product)
{         
        var node = document.createElement("LI");
        var textnode = document.createTextNode(product);
        node.appendChild(textnode);
    document.getElementById("cartText").appendChild(node);
      
}

var modal = document.getElementById("modal");
var checkOutBtn = document.getElementById("checkout");
var close = document.getElementById("close");
var body = document.getElementById("recList");

checkOutBtn.addEventListener('click', openModal);

function openModal(){
    var total = 0;
    for (var i = 0; i < price.length; i++)
        {
            total += price[i];
        }
    
       modal.style.display = 'block';
    body.innerHTML = cart.toString() + "\n\n Subtotal: $" + subTotal.toString() + "\n\n Tax: $" + (MI_SALES_TAX * subTotal).toString() + "\n Grand total: $" + ((MI_SALES_TAX * subTotal) + subTotal).toString();
}
close.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}
