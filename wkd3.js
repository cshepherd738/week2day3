//creating a function and then console.log it 
function helloPeople(){
    console.log ("Do you know what today is?")
}
helloPeople()

//create a function and add parameters . line 9 has 2 parameters or variables and line 13 had two parameter that will override line 9 parameters 

function twoNumbers(num1=6,num2=5){
    let sum=(num1+num2)
    console.log (sum)
}
twoNumbers(5,5)

//return values with functions
//write a function that calculates and returns the area of a rectangle given its width and height 
//store the result in a variable and print to the console. 

function calculateAreaRectangle(width,height){
let area=(width*height)
return area
}
let area= calculateAreaRectangle(7,10)
console.log (area)

//write a function that call the total cost of items in an array of objects 
//commit function to github and share link with class

let shoppingCart=[
    {item:"purse",price:1000,quantity:1},
    {item:"shoe",price:50,quantity:2},
]
function calcTotal(){
    let totalItem=0
    for (let i=0; i<shoppingCart.length;i++){
        totalItem += shoppingCart[i].price * shoppingCart[i].quantity
    }
   return totalItem}
   let totalItem=calcTotal()
   console.log (totalItem)