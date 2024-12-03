const dec = document.querySelector('.dec');
const inc = document.querySelector('.inc');
const reset = document.querySelector('.reset');
const msg = document.querySelector('.msg');

let val = 0;

dec.addEventListener('click', () => {
    val--;
    msg.innerText = val;
})

inc.addEventListener('click', () => {
    val++;
    msg.innerText = val;
})

reset.addEventListener('click', () => {
    val = 0;
    msg.innerText = val;
})

