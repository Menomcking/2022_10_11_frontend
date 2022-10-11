let array = [];
let dividableby5 = [];
document.addEventListener("DOMContentLoaded", () => {
    for (let index = 0; index < 20; index++) {
        array.push(Math.floor(Math.random() * 30));    
    }
    dividableby5.push(array.filter(a => a === 5 || a === 10 || a === 15 || a === 20 || a === 25 || a === 30));
    
document.getElementById("sort").addEventListener('click', () => {
    dividableby5.push(array.filter(a => a === 5 || a === 10 || a === 15 || a === 20 || a === 25 || a === 30));
});
document.getElementById("add").addEventListener('click', () => {
    array.push(parseInt(document.getElementById("megadas").value));
    console.log(array);
});
});
console.log(array);
console.log(dividableby5);