
function addMessage(element, message){
    var el = document.createElement("li");
    el.textContent = message;
    element.appendChild(el);
}
console.log('running');

var first = document.getElementById('first');
addMessage(first, 'My message');

// оголошення функції та функціональний вираз
function myFun(){ return 1;}
console.log(myFun())

// стрілочна функція
// стрылочна функція отримує контекст з місція визначення а не виклику 667
my_Arr_fun = myRes => myRes * 2;
console.log(my_Arr_fun(5));

// функціональний вираз відразу виконується
(function(){return 2})();
console.log((function(){return 2})());
console.log((function(){2})());

console.log(Number(3.4))