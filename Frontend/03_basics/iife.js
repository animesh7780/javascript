//name iife

(function chai() {
    console.log('DB Connected');
})();

//need to end it with iife with semicolon 
//to remove global scope pollution we use iife
//unnamed iife

(() => {
    console.log(`DB Connected `);
})();

((name) => {
    console.log(`DB Connected ${name}`);
})('Animesh');

