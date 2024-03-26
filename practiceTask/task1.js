function groceryTracker(){
    let a = parseFloat(document.getElementById('grocery1').value);
    let b = parseFloat(document.getElementById('grocery2').value);
    let c = parseFloat(document.getElementById('grocery3').value);

    let total = a+b+c;
    console.log(total);
document.getElementById('text').innerText= `The total number is :$ ${total}`;

}