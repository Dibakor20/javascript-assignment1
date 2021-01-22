/**  https://github.com/Dibakor20/javascript-assignment1.git */

// kilometerToMeter

function kilometerToMeter(kilo){  
    var meter = kilo * 1000;
    if (meter < 0 ){
        return "Please put a possitive number ";
    }
    else{
        return meter;
    } 
}


// budgetCalculator

function budgetCalculator(watch,phone,laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice ; 
    if(watch < 0){
        return "watch quantity can not be negative";
    }
    else if(phone < 0){
        return "phone quantity can not be negative";
    }
    else if(laptop < 0){
        return "laptop quantity can not be negative";
    }
    else{
        return total; 
    }
      
    }
   

// hotelCost

function hotelCost(day){
var cost = 0 ;
if(day < 0){
    return "days should not be negative";
}
else if(day <= 10){
    cost = day * 100;
}
else if(day <= 20){
    var firstPart = 10 * 100;
    var remaing = day - 10;
    var secondPart = remaing * 80;
    cost = firstPart + secondPart;
}
else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var reaming = day - 20;
    var thirdPart =reaming  * 50;
    cost = firstPart + secondPart + thirdPart ;
}
return cost;

}


// megaFriend

var  friend = ["apu","dibakor","sumith","joy","suhas"];
function megaFriend(arr){
    var long = arr[0];
     for (var i = 0; i < arr.length; i++) {
          var element = arr[i];
     if( long.length < element.length){
          long = element;
            }
        }
        return long;
    } 
  