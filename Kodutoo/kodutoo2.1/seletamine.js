/*const numberArray = [1,2,3,4,5]
const filteredArray = numberArray.filter(element => element < 2)

console.log(1 < 2)

console.log({ numberArray, filteredArray })

/*const newArray = numberArray.map((element, index, array) => {
    console.log({ 
      element: element,
      newElement: element + 5, 
      "index": index, 
      array 
    })

    return element + 5
  })


// Muudame objektiks, et console.log-ides oleks paremini märgata
console.log({ newArray }
*/

/*const nameString = name => `Hello ${name}`;

console.log(nameString("Liisa"))*/

// function addNumbers2(num1, num2){
//   return function addNumbersHelper(num2){
//     return num1+num2
//   }
// }

/*const names = ['Juku', 'Mari', 'Jaan', 'Anni']

const data = names.map(name => {
  return {
    name, 
    age: name.length + 20,
    email: `${name.toLowerCase()}@company.com`,
    address: `${name} Street 55`,
    username: name.split("").reverse().join("")
  }
})

console.log(data)*/

//Оператор == сравнивает на равенство, а вот === это оператор сравнения строгого равенства в JavaScript, который возвращает false для значений, которые не относятся к аналогичному типу
/*const a = 100
const b = '100'
console.log(a == b)

const k = true
const l = 'true'
console.log(k == l)*/

const s = 100
const f = '100'
console.log(s === f)

//промис - это объект, представляющий результат успешного или неудачного завершения асинхронной операции.


let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise
  
    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    setTimeout(() => resolve("done"), 1000)
})
  promise.then(alert); // выведет "done!" спустя одну секунду

let promise2 = new Promise(function(resolve, reject) {
    // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
    setTimeout(() => reject(new Error("Whoops!")), 1000)
})
  promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду




//Async создает Promise. А await ждет выполнения промиса.
async function makeSoup() {
    const pot = boilPot();
    chopCarrots();
    chopOnions();
    await pot;
    addCarrots();
    await letPotKeepBoiling(5);
    addOnions();
    await letPotKeepBoiling(10);
    console.log("Ваш овощной суп готов!");
  }
  
    makeSoup();