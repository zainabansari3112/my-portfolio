// function findDuplicates(arr) {
    // let seen = new Set();
    //  (the set is use to check that no duplicatesare present)
    // jab bhi array se value aage gi tho woo check karega ka phle seen variable mai save hogi phir agr koi bhi aise value aati hai jo seen variable mai phle se present hai tho woo duplicate variable mai save hogi 
    // let duplicates = new Set();
    // has is a method of the spicefic valu is present in the set
    // .add is use an object at the end of the object set 
    // .from is method return in the array from any object with the property with length and it only take string and do not convert it in to the numbers

//     for (let num of arr) {
//         if (seen.has(num)) {
//             duplicates.add(num);
//         } else {
//             seen.add(num);
//         }
//     }
//      Convert the duplicates set into an array using Array.from() and return it.
//    The duplicates set collects all the numbers that were found to be duplicates during the loop.
//  Finally, Array.from(duplicates) converts the duplicates set into an array (since the question asks for a list of duplicate numbers), and this array is returned as the result of the function.


//     return Array.from(duplicates);
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 2, 5, 3];
// console.log(numbers)
// console.log(findDuplicates(numbers)); // Output: [2, 3]

// this is the functionof duplicate array


// function findDuplicates(arr){
//     let seen = new Set();
//     let duplicate  = new Set();

//     for (let item of arr){
//         if (seen.has(item)){
//             duplicate.add(item)
//         }else {
//             (seen.add(item));
//         }

//         }
//         return Array.from(duplicate)

// }

//  let number = [2,3,4,5,6,7,8,3,4,5,6,7];
// console.log(number)
// console.log(findDuplicates(number));


// operaters in js 
// arthmitic operaters
/*let a = 10;
let b = 4;
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a**b",a**b);
console.log("a/b",a/b);
console.log("a%b",a%b);
console.log("++a",++a);
console.log("a++",a++);
console.log("--a",--a);
console.log("a--",a--);
console.log("a=",a);
console.log("a--",a--);
// assingment operatter
let c = 10
 c += 3;
 console.log(c)
 c -= 1;
 console.log(c)
  c *= 5;
  console.log(c)
  c = 2;
  console.log(c)
 c %= 5; 
 console.log(c)
 c **= 3;
 console.log(c)

//  comparision operaters
// ! the not convert false in to true and true into false
let comp1 = 2;
let comp2 = 3;
console.log("comp1==comp2" ,comp1==comp2);
console.log("comp1!=comp2" ,comp1!=comp2);
console.log("comp1===comp2" ,comp1===comp2);
console.log("comp1!==comp2" ,comp1!==comp2);
console.log("comp1>comp2" ,comp1>comp2);
console.log("comp1<comp2" ,comp1< comp2);

// logical operaters
let l = 4
let p = 3
console.log(l > p && l==p)
console.log(l > p || l==p)
console.log(!p)*/

// if and else condition

// let con = prompt("what is your age");
// con = Number.parseInt(con);
// if(con <0){
//     alert("you are not  valid")
// }else if (con<9){
//     alert (" you are not egnous")
// }else if(con<18 && con <= 15){
//     alert("good gooo")
// }else{
//     alert("you can driveee valid")
// }
// console.log("you can", (con<18? "not drive" : "drive crazy"))

// person = prompt("what is your age ?");
// person = Number.parseInt(person);
// if(person>10 && person<20){
//     alert("your age lies between 10 and 20")
// }
// else{
//     alert("your age doesn't  lies between 10 and 20")
// }

// let age = prompt("price of pineapple")
// age = Number.parseInt(age);
// switch(age){
//     case  34 :
//     console.log("your pineapple is 34 rupeya")
//     break
//     case 20 :
//     console.log("your pineapple is 20 rupeya")
//     break
//     case 45 :
//     console.log("your pineapple is 45 rupeya")
//     break
//     case 345 :
//     console.log("your pineapple is 345 rupeya")
//     break
//     case 3467 :
//     console.log("your pineapple is 3467 rupeya")
// }


//  Divisiable by 2 and 3 simple program
/*let num = prompt("enter number")
 num = Number.parseInt(num);
 if (num% 2 ==0 ){
    console.log("your number is divisiable by 2 ")
 }
 else if(num % 3==0){
    console.log("your number is divisiable by 3")
 }
 else{
    console.log("not any number")
 }*/

    // ternay operater
   /* let age = prompt("your age ")
    age = Number.parseInt(age);
    let j = age>18? "you can drive" : "you can not drive";
    console.log(j)*/

    // loops of for loop

    /*let sum = 0
    let n = prompt("any number")
    n= Number.parseInt(n)
    for(let i=0; i<n ; i++){
        sum += (i+1)
        console.log((i+1), "+")
    }
    console.log("your number is" +n+ "is tha" +sum)? */

   //  for in loop 
   /* let obj = {
      zainab : 23,
      harry : 35,
      kasim : 45,
      diva : 344
    }
    for ( let k in obj){
      console.log("your marks is" + k + "are" + obj[k])
    }
   //  for of loop
    for ( let s of "harry"){
      console.log(s)
    }*/


      // while loop in js
     /* let n = prompt("any number")
      let i = 10
      while(i<n){
         console.log (i);
         i++;
      }*/

      // do while loop
      /*let n = prompt("any number")
      let i = 10
      do{
         console.log (i);
         i++;
      }while(i<n)*/


      //function of the prograam
      // function oneplus(x,y){
      //    return Math.round(1+(x+y)/2)
      // }
      // let a = 8
      // let b = 9
      // let c = 50


      // console.log("one plus in average of sum", oneplus(a,b))
      // console.log("one plus in average of sum", oneplus(b,c))
      // console.log("one plus in average of sum", oneplus(a,c))

      // practice question 

     /* let obj = {
         harry : 34,
         goaaa : 56,
         hania :90
      };

      for (let i = 0 ; i<Object.keys(obj).length; i++){
         console.log( " your marks is " +Object.keys(obj)[i] + "are" + obj[Object.keys(obj)[i]] )
      }

      for (let key in obj){
         console.log( "mark of " + key + "are" + obj[key])
      }

      let cn = 54
      let i 
      while(i != cn){
        
         i = prompt("enter number")
      }
      console.log("you are right")*/


   // const mean = (a,b,c,d) => {
   //    return( a+b+c+d)/4
   // }
   // console.log(mean(2,3,5,7))
   // let casss = "harryy"
   // console.log(casss.length)

   // let xsss = 'maina'
   // console.log(xsss)

   // let boy1 = "ali";
   // let boy2 = "faiz";
   // let sent = `${boy1} is a friend of ${boy2}`;
   // console.log (sent);

   // escape squence cheraters

   // let k = "angle \"man" 
   // console.log(k)
   // let p = "angle \"man" 
   // console.log(p)


//    console.log("har\"".length)

//    let dog = "hi i cannot jump on the fox"
//    let word = "fox"
//   console.log(`the "${word}" ${dog.includes(word)? "can" : "later"} yesss`)
   // it use in side the string with ""

   // let h = "KASIM"
   // console.log(h.toLowerCase())

   // let df = "please give me Rs 1000"
   // let nh = Number.parseInt (df.slice("please give me Rs".length))
   // console.log(nh)
   // console.log(typeof nh)
   // // string are imutable 

   // let oyo = "zainab is a boy"
   // console.log(oyo.replace("boy", "girl"))


   // let zoha =[3,"got",]


//    let marks = [55, 66, 88, 98, 55, 78];
// let i;
// for (i = 0; i < marks.length; i++) {
//   console.log( "this is student marks" + marks[i]);
// }

// let c = marks.toString()
// console.log(c)

// let bee = marks.join("/")
// console.log(bee)

// let man = marks.push(78 )
// console.log(man)

//  marks.pop()
//  let real = marks.pop()
//  console.log(real)

//  console.log(marks) 

// let what = marks.shift()
// console.log(what,marks )

// let what = marks.unshift(20)
// console.log(what,marks)


// let s = [1,2,3,4,5,6,7,8,9]
// let get = [90,45,34,56,23,55,11 ]
// delete s[0]
// console.log(s.length)
// let newarray = s.concat(get)
// console.log(newarray)

// let compare = (a,b)=>{
//    return b - a
// }
// let task = [55,89,90,34,89,23,45,78]
// task.sort(compare)
// task.reverse( )
// console.log(task)

// let num = [45,3,4,56,12,23,46]
//  let deletevalues = num.splice(1,4,120,34,123,457)
// console.log(num)
// console.log(deletevalues)

// let num = [2,5,6,7,8,9]
//  for(i=0; i<num.length; i++){
//    console.log(num[i])
//  }

// num.forEach((element) =>{
//    console.log(element**element)
// })

// for (let item of num){
//    console.log(item)
// }

// for ( let sum in num){
//    console.log(sum)
// }

// this is a map array method
//  let arr = [78,89,45]
//  let a = arr.map((value,array,index)=>{
//    console.log(value)
//    return value + index
//  })
//  console.log(a)

// let arr3 = [45,23,48,98,2,5,7,5]
// let dsa = arr3.filter((e)=>{
//    return e<10
// })
// console.log(dsa)


// let nonsens = [67.9,6,4,5]
// let arr5 = nonsens.reduce((h1,h2)=>{
//  return h1 +h2
// })
// console.log(arr5)

// create an array of numbers and take
// input from the user to add the number to an arrays
// let arr = [2,3,4,5,6]
// let input = prompt("any number")
// input = Number.parseInt(input)
// arr.push(input)
// console.log (arr)

// problem 2 of chap 5
// let arr = [2,3,4,5,6]
// let input;
// do{
//     input = prompt("any number")
//    input = Number.parseInt(input)
//    arr.push(input)
// }while(input!=0 );
// console.log (arr)

// problem 3 of chap 5 this is divisiable by 10 
// let arr = [2,3,4,5,6,10,20,630]
// let n = arr.filter((x)=>{
//    return x % 10 == 0
// })
// console.log (n)

// problem no 5 of chap 5

// let arr = [2,3,4,5,6,10,20,630]
// let n = arr.map((x)=>{
//    return x * x
// })
// console.log (n)


// let arr = [1,2,3,4,5]
// let n = arr.reduce((x1,x2)=>{
//    return x1 * x2
// })
// console.log (n)

// let r = Math.ceil(Math.random());
// let score = 0;
// console.log(r)
// for(let i = 1;i <= 100; i++){
//     let userInput = Number(prompt("Enter your number"));
//     if(r > userInput){gshs
//         score+=1;gshs
//     }gshs
//     else if(r < userInput){
//         score+=1;
//     }
//     else{
//         break;
//     }
// }
// let res = (100 - score);
// console.log(res);

// adding 2 number

// function addingnum(x,y){
//    return (x-y)

// }
// console.log ("the add number is " , addingnum(750,1000))

// write a function on even odd
// let num = prompt("enter the number")
// const max = Number.parseInt(num)
// function evenodd(number){
//  if(number % 2 === 0)
//   {
//    return "even";
//  }  else{
//    return "odd"
//  }
// }
// if (!isNaN(max)){
//    console.log(`the number ${max} is ${evenodd(max)}.`)
// }else{
//    console.log("enter the vaild number")
// }



// chapter 6 question 
// write a program using prompt funtion to take input of age as a value from the user and use alert to tell him if he can drive
// const candrive = (age) =>{
//    return age>=18?true:false
//  }
// let runagian= true
// while(runagian){
// let age = prompt("enter your age")
// age = Number.parseInt(age)   
// if(age<0){
//    console.error("please enter any")
//    break;
// }
//  if (candrive(age)){
//    alert("you can drive")
//  }else{
//    alert("you can not drive")
//  }
//  runagian= confirm("do you want to play again")
// } 




// let number = prompt("enter the number")
// number= Number.parseInt(number)
// if(number>5){
//    location.href= "https://google.com"
// }

// let color = prompt("enter the color")
// document.body.style.background = color

// const ctitle = document.querySelectorAll(".card-title")
// ctitle[0].style.color = "red"
// ctitle[1].style.color = "blue"
// ctitle[2].style.color = "green"
// console.log(ctitle)

// document.querySelector(".this").style.color = "green"

// console.log(id1.matches(".box"))
// console.log(id1.contains("sp1"))


// const display = document.querySelector('.display');
// const startBtn = document.getElementById('start');
// const stopBtn = document.getElementById('stop');
// const resetBtn = document.getElementById('reset');

// let timer = null;
// let elapsedTime = 0;

// // Format time to display as HH:MM:SS
// function formatTime(time) {
//   const hours = Math.floor(time / 3600).toString().padStart(2, '0');
//   const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
//   const seconds = (time % 60).toString().padStart(2, '0');
//   return `${hours}:${minutes}:${seconds}`;
// }

// // Start the stopwatch
// startBtn.addEventListener('click', () => {
//   if (!timer) {
//     timer = setInterval(() => {
//       elapsedTime++;
//       display.textContent = formatTime(elapsedTime);
//     }, 1000);
//   }
// });

// // Stop the stopwatch
// stopBtn.addEventListener('click', () => {
//   clearInterval(timer);
//   timer = null;
// });

// // Reset the stopwatch
// resetBtn.addEventListener('click', () => {
//   clearInterval(timer);
//   timer = null;
//   elapsedTime = 0;
//   display.textContent = formatTime(elapsedTime);
// });


// chapter 7 practice qustion

// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";
// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green";
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "pink";


// document.querySelector(".box").style.color = "red"

// let element = document.getElementById("elementId");
// elementId.style.color = "green"

// document.querySelector(".box").style.color = "yellow"

// const btn =document.querySelectorAll(".btn")
// btn[0].style.color = "red"
// btn[1].style.color = "blue"
// btn[2].style.color = "green"
// console.log(btn)




// Array.from(document.getElementsByTagName("p")).forEach((element) => {
//    element.style.background = "red"
// });

// Array.from(document.getElementsByTagName("li")).forEach((element) =>{
//    element.style.background = "cyan";
//  })     

 
// in inner html 
// console.log(document.body.firstChild)
// console.log(document.body.firstChild.data)
// console.log(document.body.textContent)
// (if you want to cody as a text)

// let a = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style  "))
// console.log(first.hasAttribute("style  "))
// first.removeAttribute("class")
// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.play)

let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div')
div.innerHTML='h1>Hello World!</h1>';
// a.append(div) //this is at end of the note
// a.prepend(div) //this is  statr of the container note
// a.before(div) //insert befor the notes
// a.after(div) //insert after the nodes
// a.replaceWith(div)  // it will replace the hole div