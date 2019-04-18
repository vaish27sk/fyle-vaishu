
//initial data
let serves=100,icecandy_price,lollipop_price,savings;
let switched = true;
let unit = "Per Month";

function compute(serve){
    serves = serve;
    if(switched){
        
        icecandy_price = serves * 2;
        lollipop_price = serves;
        unit = "Per Month";
    }
    else{

        icecandy_price = serves*12;
        lollipop_price = serves*6;
        unit = "Per Year";
    }
    savings = icecandy_price - lollipop_price;
    $('#lolprice').html(lollipop_price);
    $('#iceprice').html(icecandy_price);
    $('#lolqty').html(serves);
    $('#iceqty').html(serves);
    $('#lolunit').html(unit);
    $('#iceunit').html(unit);
    $('#saveunit').html(unit);
    $('#savings').html(savings);


}
function compare(element){
    compute(element.value);
}
function changeUnit(){
    
    if(switched){
        switched = false;  
    }
    else{
        switched = true;    
    }
    
    compute(serves);
}