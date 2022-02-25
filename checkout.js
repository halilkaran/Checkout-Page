const buton = document.querySelectorAll(".quantity-controller button");
const bttn = document.querySelectorAll("button");
console.log(bttn);

buton.forEach((item) => {
  console.log(item);
    item.addEventListener("click", () => {
      


        if (item.value == 1) {
         
      increase(item);
    }   if (item.value ==0) {
      decrease(item);
        }
        
        update();
        
    });
    const remove = document.querySelectorAll(".remove-product");
    remove.forEach((r) => {
      r.addEventListener("click", () => {
        let rem = r.parentElement.parentElement.parentElement;
        rem.textContent = "";
        update(item);
      });
    });
    
});

const increase = (item) => {
  const quant = item.previousElementSibling;
  const pricetotal = item.parentElement.nextElementSibling.nextElementSibling;

  pricetotal.innerHTML = (
    (Number(pricetotal.textContent) / Number(quant.textContent)) *
    (Number(quant.textContent) + 1)
  ).toFixed(2);
  quant.textContent = Number(quant.textContent) + 1;
};

const decrease = (item) => {
  const quant = item.nextElementSibling;
  console.log(quant);
  const pricetotal = item.parentElement.nextElementSibling.nextElementSibling;
    if (quant.textContent > 1) {
      pricetotal.innerHTML = (
        (Number(pricetotal.textContent) / Number(quant.textContent)) *
        (Number(quant.textContent) - 1)
      ).toFixed(2);
      quant.textContent = Number(quant.textContent) - 1;
}

};


const update = () => {

    const price = document.querySelectorAll(".product-line-price");
    let summ = 0;
    console.log(price);
    price.forEach((p) => {
        summ += +p.textContent
        
   })
    const subTotal = document.querySelector(".subtotal")
    subTotal.textContent = summ.toFixed(2);
    const tax = document.querySelector(".tax")
    tax.textContent = (summ * 0.18).toFixed(2);
    const ship = document.querySelector(".shipping")
    ship.textContent =4.99;
    const total = document.querySelector(".total")
    total.textContent =(
      Number(subTotal.textContent) +
      Number(tax.textContent) +
      Number(ship.textContent)).toFixed(2);
    
}


    
    
    
