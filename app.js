
// First class section plus

document.getElementById('first-plus').addEventListener('click', function(){
    let ticket = document.getElementById('first-input').innerText;
    let ticketInNumber = parseInt(ticket)
    ticketInNumber ++;
    
    document.getElementById('first-input').innerText = ticketInNumber;

    let Total = document.getElementById('total').innerText;
    let Total2 = parseInt(Total);

    const amount = 700;
    const vat = 70;
    let all = Total2 + amount;

    document.getElementById('total').innerText = all;

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotal2 = parseInt(subTotal)

    const allAmount = subTotal2 + amount + vat;

    document.getElementById('sub-total').innerText = allAmount;


})

// fisrt class section minus

document.getElementById('first-minus').addEventListener('click', function(){
    let ticket = document.getElementById('first-input').innerText;
    let ticketInNumber = parseInt(ticket)
    if(ticketInNumber > 0){
        ticketInNumber --;
    }

    document.getElementById('first-input').innerText = ticketInNumber;

    let Total = document.getElementById('total').innerText;
    let Total2 = parseInt(Total);


    if(Total2 > 0){
    const amount = 700;
    let all = Total2 - amount;
    document.getElementById('total').innerText = all;
    }

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotal2 = parseInt(subTotal)
    
    if(subTotal2 > 0){
        const amount = 700;
    const vat = 70;

    const allAmount = subTotal2 - amount - vat;

    document.getElementById('sub-total').innerText = allAmount;
    }
    
})





// Business class section plus

document.getElementById('business-plus').addEventListener('click', function(){
    let ticket = document.getElementById('business-input').innerText;
    let ticketInNumber = parseInt(ticket)
    ticketInNumber ++;
    
    document.getElementById('business-input').innerText = ticketInNumber;

    let Total = document.getElementById('total').innerText;
    let Total2 = parseInt(Total);

    const amount = 500;
    const vat = 50;
    let all = Total2 + amount;

    document.getElementById('total').innerText = all;

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotal2 = parseInt(subTotal)

    const allAmount = subTotal2 + amount + vat;

    document.getElementById('sub-total').innerText = allAmount;


})

// Business class section minus

document.getElementById('business-minus').addEventListener('click', function(){
    let ticket = document.getElementById('business-input').innerText;
    let ticketInNumber = parseInt(ticket)
    if(ticketInNumber > 0){
        ticketInNumber --;
    }

    document.getElementById('business-input').innerText = ticketInNumber;

    let Total = document.getElementById('total').innerText;
    let Total2 = parseInt(Total);


    if(Total2 > 0){
    const amount = 500;
    let all = Total2 - amount;
    document.getElementById('total').innerText = all;
    }

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotal2 = parseInt(subTotal)
    
    if(subTotal2 > 0){
        const amount = 500;
    const vat = 50;

    const allAmount = subTotal2 - amount - vat;

    document.getElementById('sub-total').innerText = allAmount;
    }
    
})





// Economic class section plus

document.getElementById('economic-plus').addEventListener('click', function(){
    let ticket = document.getElementById('economic-input').innerText;
    let ticketInNumber = parseInt(ticket)
    ticketInNumber ++;
    
    document.getElementById('economic-input').innerText = ticketInNumber;

    let Total = document.getElementById('total').innerText;
    let Total2 = parseInt(Total);

    const amount = 300;
    const vat = 30;
    let all = Total2 + amount;

    document.getElementById('total').innerText = all;

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotal2 = parseInt(subTotal)

    const allAmount = subTotal2 + amount + vat;

    document.getElementById('sub-total').innerText = allAmount;


})

// Business class section minus

document.getElementById('economic-minus').addEventListener('click', function(){
    let ticket = document.getElementById('economic-input').innerText;
    let ticketInNumber = parseInt(ticket)
    if(ticketInNumber > 0){
        ticketInNumber --;
    }

    document.getElementById('economic-input').innerText = ticketInNumber;

    let Total = document.getElementById('total').innerText;
    let Total2 = parseInt(Total);


    if(Total2 > 0){
    const amount = 300;
    let all = Total2 - amount;
    document.getElementById('total').innerText = all;
    }

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotal2 = parseInt(subTotal)
    
    if(subTotal2 > 0){
        const amount = 300;
    const vat = 30;

    const allAmount = subTotal2 - amount - vat;

    document.getElementById('sub-total').innerText = allAmount;
    }
    
})

