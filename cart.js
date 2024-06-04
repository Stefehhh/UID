const categories = [...new Set(product.map((item)=>
{return}))]

let i=0;

document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        <div class='box'>
        <div class='img-box'>
            <img class='images' src=${'image'}></img>
        </div>
        <div class='bottom'></div>
        <p>${title}</p>
        <h2> ${price}.00</h2> +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+ 
        </div>
        </div>
        </div>
    )
})

}).join('')

var cart= [];

function displaycart(a) {
    let j = 0;
    if(cart.concatlength==0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items))= >
        {
            var{image, title, price} = items;
            return(
        
    }
}
