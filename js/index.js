const initAnimation = () => {
    const title = document.querySelector('main .text h1');
    const span = document.querySelector('main .text span');
    const paragraph = document.querySelector('main .text p');

    const typeAnimation = (element) => {
        if (element === title) {
            element.innerHTML = 'Olá, eu sou o ';
            const textToArray = element.innerHTML.split('');
            element.innerHTML = '';
            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 120 * index)
            })

        } else if (element === span) {
            element.innerHTML = 'Luardino Jaime :)';
            const textToArray = element.innerHTML.split('');
            element.innerHTML = '';
            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 150 * index)
            })

        } else {
            element.innerHTML = 'Desenvolvedor FullStack'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''
            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 75 * index)
            })
        }
    }

    typeAnimation(title);
    setTimeout(() => typeAnimation(span), 1600);
    setTimeout(() => typeAnimation(paragraph), 3700);
}

initAnimation();
