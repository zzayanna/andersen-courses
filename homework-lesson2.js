// Task 1

// Функция multiplier принимает один арумент х, возвращает анонимную функцию, которая также принимает один аргумент у
// и возвращает произведение х и у. После инициализации переменных waterWeight, mercuryWeight, oilWeight каждая из них
// хранит в себе реализацию функции multiplier именно со значением параметра х, переданным в момент инициализации.
// После мы вызываем waterWeight, mercuryWeight, oilWeight с различным значением аргумента y и происходит перемножение.

function multiplier(x) {
    return function(y) {
        return x * y;
    } 
}
   
function processData(input) {
    const waterWeight = multiplier(1000);
    const mercuryWeight = multiplier(1355);
    const oilWeight = multiplier(900);
     
    console.log("Weight of " + input + " metric cube of water = " + waterWeight(input) + " kg");
    console.log("Weight of " + input + " metric cube of mercury = " + mercuryWeight(input) + " kg");
    console.log("Weight of " + input + " metric cube of oil = " + oilWeight(input) + " kg");
}


// Task 2&3

// Функция makeRandomFn поддерживает произвольное количество аргументов, т.к. используется оставшиеся параметры, и возвращает
// анонимную функцию, где объявляется переменная arr, в нее записывается массив, полученный после поднятия элементов вложенных подмассивов
// аргумента args (на 1 уровень, т.к. вызвали flat без параметров). Это нужно, потому что при передаче в качестве параметра функции makeRandomFn
// массива rest parameters кладет его также в массив. После анонимная функция возвращает рандомный элемент массива arr, получая 
// произвольный индекс элемента от нуля до arr.length.  

function makeRandomFn(...args) {
    return function() {
        let arr = args.flat();
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

const getRandomNumber = makeRandomFn([1, 2, 100, 34, 45, 556, 33]);
const getRandomNumber2 = makeRandomFn(1, 2, 100, 34, 45, 556, 33);
console.log(getRandomNumber()); 
console.log(getRandomNumber2());
