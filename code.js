// 
//   TODO: Write a function that sums two numbers
//   TODO: Write a function that subtracts two numbers
//   TODO: Write a function that divides two numbers.
//   TODO: Write a function that multiplies two numbers.
//   *NOTE* be sure to handle dividing by zero 😉
//   ES5 Syntax: function Add(){}
//   ES6 Syntax (Arrow function): const add = () => {}
// function add(a,b){
//   return (a + b)
// };

// addTwo = (a,b) => a + b;
//  sub = (a,b)=>{
//  return(a - b)
// };

// subTwo = (a,b) =>  a - b;



// function div(a,b){
//   console.log(a / b)
// };

// divTwo = (a,b) =>  a / b;

// function mul(a,b){
//   alert(a * b)
// };

// mulTwo = (a,b) => {
//   return(a * b)
// };

// add(1,2);
// addTwo(3,4);
// sub(5,6);
// subTwo(7,8);
// div(9,10);
// divTwo(11,12);
// mul(13,14);
// mulTwo(15,16);

////////////////////////////////THE BEGINNING/////////////////////////////

// console.log("hello world");



// let food = Number(prompt('Please enter bill amount'));
// let tipPercentage = Number(prompt('Please enter tip %')/100);
// let tip = food * tipPercentage;
// let bill = food + tip;
// alert('your bill is ' + bill + '$.');





// let totallBill = (totall, tip) => {

//   bill = Number(totall * tip + totall);
//   alert(`your bill is ${bill}$.`)
// };

// totallBill (Number(prompt('Please enter bill amount')),
// Number(prompt('Please enter tip %')/100));




// let weather = prompt("what's the weather like");

// if (weather == 'rainy') {
// alert("Don't forget your umbrella")
// }
// else {
// alert("Don't forget your sunglasses")
// };





// let sum = (a,b) => a + b;


//   sum(1,2);
// let total = sum(1,2);

// function add(a,b){
//   return (a + b)
// };


// add(1,2);


//////////////////////////////////LOOPING///////////////////////////////

// const fruits = ['🍌','🍎','🍊','🍐'];

// fruits.push('🍪');
// fruits.push('🫐');
// console.log(fruits.slice(2,6));

// const greeting = () => {
// const object = {
//   name: prompt('enter your name please'), 
//   color: prompt('enter your shirt color please'),
//   assets: prompt('enter your assets please'),
//   debts: prompt('enter your debts please'),
//   netWorth: function totall () {
//     return(this.assets - this.debts)
//   }
// }
//   object.country = 'lebanon'
//   alert(`hello ${object.name} your ${object.color} shirt is awesome your networth is
//   ${object.netWorth()}$ and by the way ${object.country} is awesome!`)
// }

// greeting()

// const fruits = ['🍌','🍎','🍊','🍐','🍌','🍎','🍊','🍐','🍌','🍎','🍊','🍐',
// '🍌','🍎','🍊','🍐','🍌','🍎','🍊','🍐','🍌','🍎','🍊','🍐',];


// for (const array of fruits){
//   console.log(array);


// }

// const numbers = [1,2,3,4,5,6];

// let result = []

// for (let numbersArray of numbers){
//   result.push(numbersArray * 2)
// }

// console.log(result);




// function unknown (numbers) {
//   let result = []                 
//   for (let array of numbers){
//     result.push(array * 2)
//   }
//   return result
//   }
//   console.log(unknown ([1,2,3,4,5,6]));





// function loops () {
// let x = prompt('enter text please')
// for(let result in x){
// output = Number(result) + 1
// }
// return {output}
// }

// console.log(loops ())




// function loops () {
// let x = prompt('enter text please')
// for(let result=1; result<=x.length; result++){
// output = result
// }
// return {output}
// }
// console.log(loops ())


// function greeting (){
// let x = prompt('enter your name please')
// if (x == 'abed' )
// alert ('hello ' + x)
// else alert('fuck off ' + x)
// }  


// greeting()

// let x = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// function fx(x){
// let sum = 0
// for (let y=0; y<=x.length; y++){
// sum = sum + y
// }
// return sum
// }

// console.log(fx())



// function fx(x){
//   let sum = 0
//   for (let y=0; y<=x.length; y++){
//   sum = sum + y
//   }
//   return sum
//   }

//   console.log(fx([1,2,3,4,5,6,7,8,9,10,11,12,13]))






// const array = [1,22,43,1,5,6,7,8,9,10,11,12,13,12,10];



// for (let i=0; i<=array.length; i++){
// let x = array[i]
// if (x > i) {result=x}
// console.log(result)
// }



// function max (x) {
//   let result = 0
//   for (let i=0; i<x.length; i++){
//   let z = x[i]
//   if (z > i) {result=z}

//   }
//   console.log(result)

//   }

//   max([1,2,3,2,5,4,15,8,9,10,11,12,13,10])




//  function max (numbers) {
//    let result = numbers[0]
//    for (let number of numbers){
//    if (number > result) {
//    result=number
//    }
//    console.log(number)
//    }
//    return result
//     }

//   max([2,4,3,2,3,6])///not done by me
//   ////[1,2,3,4,5,6]



//   let y = [9,11,10,13,5,6,12,1,14]
//   let x = y[0]
//   for (let number of y){
//    if (number>x) {x=number}
//    console.log(x)
// }



// let phrase = 'haha'

// let x = {h:0, a:0}
// for(let result of phrase)
// if (result=='h') (x.h=x.h+1)
// for(let result of phrase)
// if (result=='a') (x.a=x.a+1)

// console.log(x)


// function letterFrequency(x){
// let y = {}
// for(let result of x)
// if (result in y){y[result]+=1}
// else{y[result]=1}
// console.log(y)
// }

// letterFrequency('haha haha biggie smalls')




// function wordFrequency(x){
//   let z = x.split('')
//   let y = {}
//   for(let result of z)
//   if (result in y){y[result]+=1}
//   else{y[result]=1}
//   console.log(y)
//   }

//   wordFrequency('haha haha biggie smalls')



//   function wordFrequency(x){
//     let z = x.split(' ')
//     letterFrequency (z)
//     }

//     wordFrequency('haha haha biggie smalls')








// function wordFrequency(x){
//   let z = x.split(' ')
//   letterFrequency (z)
//   }

//   wordFrequency(prompt('enter you paragraph here'))

//////////////////////////////////SORTING AN ARRAY///////////////////////////////

//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   fruits.sort();
//   fruits.reverse();
//   console.log(fruits)



//   const points = [40, 100, 1, 5, 25, 10];

// points.sort( function srt (a,b){
//   return a-b
// })

// console.log(points)


//////////////////////////////////MAPING AN ARRAY///////////////////////////////

// let doubleMap = (array) =>
//   array.map(number=>number*2)


//   console.log(doubleMap ([1,2,3,4,5,6]))


// let x = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// function fx(){
// let sum = 0
// x.map(y=>
// sum = sum + y
// )
// console.log (sum)
// }

// fx()



// const array = [1,22,43,1,5,6,7,8,9,10,11,12,13,12,10,50];


// let fx = () =>{
// let x = array[0]
// array.map(map =>{
// if (map>x) {x=map}
// })

// console.log(x)
// }


// fx()  

//////////////////////////////////FILTERING AN ARRAY///////////////////////////////


// const filter = (numbers, greaterThan) =>{
// let x = []
// for (let loop of numbers){
// if (loop>greaterThan) {x.push(loop)}
// }
// console.log(x)
// }

// filter([1,2,3,4,5,6], 3)




// x=[1,2,3,4,5,6]


// y= x.filter(fltr=>fltr>=2)
// console.log(y)



// let actors = [
// {name:'leonardo',netWorth:'20000000'},
// {name:'amber',netWorth:'10'},
// {name:'brad',netWorth:'100000000'}
// ]

// ////////////////////////////method 1///////////////////////////////
// console.log(actors.filter(actor => actor.netWorth>10))
// ////////////////method 2///////////////////////////////
// fx = () => {
// let x = []
// for (let loop of actors){
// if(loop.netWorth>10){x.push(loop)}
// }
// return x
// }

// console.log(fx())

/////////////////////////////method 3///////////////////////////////
// fx = () => {
//  let x = actors.filter(actor => actor.netWorth>10)
//     console.log(x)
// }
// fx()
/////////////////////////// MAP AND FILTER USING DOM /////////////////


// let actors = [
//   {name:'johnny',netWorth:'20000000'},
//   {name:'amber',netWorth:'10'},
//   {name:'matt',netWorth:'170000000'},
//   {name:'brad',netWorth:'300000000'},
//   {name:'leonardo',netWorth:'100000000'}
//   ]



// let result = (actors.filter(actor => actor.netWorth>10))

// let names = result.map(actor=>actor.name).join(', ')
// console.log(names)




// document.getElementById("demo").innerHTML=`<h1>${names}</h1>`

/////// done by me/////////////

// let z=[]
// for (let loop of actors){
// if (loop.netWorth>10){z.push(loop.name)}}
// let y = z.join(', ')
// console.log(y)


// document.getElementById("demo").innerHTML=`<h1>${y}</h1>`


/////////////////////////// REDUCING AN ARRAY /////////////////

// const points = [40, 100, 1, 5, 25, 10];

// x = points.reduce(srt = (a,b) => a+b)


// console.log(points)


//////////////////////OR////////////////////

// sum = (a,b) => a+b

// x = points.reduce(sum)


// console.log(x)



// let actors = [
//   {name:'johnny',netWorth: 20},
//   {name:'amber',netWorth: 10},
//   {name:'matt',netWorth: 17},
//   {name:'brad',netWorth: 30},
//   {name:'leonardo',netWorth: 10}
//   ]


//   x = actors.map(net=>net.netWorth)  
//   y = x.reduce(sum=(a,b) => a + b )
//   console.log(y)



//   z = actors.reduce(sum=(a,b) => a + b.netWorth, 0) 
//   console.log(z)


/////////////////////////////DOM MANIPULATION///////////////////////////////
// let z = 'boudddzzzzzzz'

// let x = document.getElementById('dom')


// console.log(x.innerText)

// x.innerHTML = `<h3>${z}</h3>`


// x.style.backgroundColor = 'white'


// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')




// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')
///////////////////////////////////FOR EACH LOOP////////////////////////////////////////////

// let v = document.querySelectorAll(".color-square")


// v.forEach(box=>box.onclick = () => console.log(box.value))
///////////////////BOX COUNTING APP////////////////////////////////////////


// let x = document.querySelectorAll(".color-square")


// let y = {red:0,yellow:0,green:0}
// x.forEach(square=>
//   square.onclick=()=>{
//   square.innerHTML=y[square.value]+=1
// })

// let z=document.getElementById('clear-button')

// z.onclick=()=>{
//   x.forEach(reset=>
//     reset.innerHTML=y[reset.value]=0)
//   }https://github.com/Codemaster1288/tip-calculator.git

////////////////////////////// MY TIP CALCULATOR APP///////////////////////////////////////////////
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let billTotall = document.getElementById('bill-totall')
let tip = document.getElementById('tip')


function billT() {
  let z = (Number(tip.value) / 100 * Number(billTotall.value) + Number(billTotall.value)) / box1.innerText
  box2.innerHTML = `<p class="box-value">$${z.toFixed(2)}</p>`
}

let peopleValue = 1


plus = () => {
  box1.innerHTML = `<p>${peopleValue += 1}</p>`
  let z = (Number(tip.value) / 100 * Number(billTotall.value) + Number(billTotall.value)) / box1.innerText
  box2.innerHTML = `<p class="box-value">$${z.toFixed(2)}</p>`
}

minus = () => {
  if(peopleValue>1){
  box1.innerHTML = `<p>${peopleValue -= 1}</p>`
  let z = (Number(tip.value) / 100 * Number(billTotall.value) + Number(billTotall.value)) / box1.innerText
  box2.innerHTML = `<p class="box-value">$${z.toFixed(2)}</p>`}
}








  ////////////////////////////// QAZI TIP CALCULATOR APP///////////////////////////////////////////////

