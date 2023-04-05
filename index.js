let td = document.querySelectorAll('td');
let display = document.getElementById('display');
let submit = document.getElementById('submit');


submit.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (err) {
        display.value = err.name;
    }
});

for (let item of td) {
    // console.log(item.textContent);
    let val = item.textContent;
    if (val !== '=') {
        item.addEventListener('click', () => {
            switch (val) {
                case 'AC':
                    display.value = '';
                    break;
                case 'Del':
                    display.value = display.value.slice(0, (display.value).length - 1)
                    break;
                default:
                    display.value += item.textContent;
            }
        });
    }
}

