let td = document.querySelectorAll('td');
let display = document.getElementById('display');
let submit = document.getElementById('submit');


submit.addEventListener('click', function () {
    display.value = eval(display.value);
});

for (let item of td) {
    // console.log(item.textContent);
    let val = item.textContent;
    if (val !== '=') {
        item.addEventListener('click', function () {
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

