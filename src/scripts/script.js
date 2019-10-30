const stroke = document.querySelectorAll('.card__stroke');
const card = document.querySelectorAll('.card');

card.forEach((i) => {
    const foot = i.querySelector('.card__footer');
    const main = i.querySelector('.card__main');
    const weight = i.querySelector('.card__weight');
    const block = i.querySelector('.card__disabled');
    const what = i.querySelector('.card__subtitle').textContent;
    const head = i.querySelector('.card__head');
    const str = i.querySelector('.card__stroke');

    stroke.forEach((i) => {
        i.addEventListener('mouseenter', () => {
            i.classList.add('card__stroke_dashed');
        })
    });
    
    stroke.forEach((i) => {
        i.addEventListener('mouseout', () => {
            i.classList.remove('card__stroke_dashed');
        })
    });

    main.addEventListener('mouseover', () => {
        str.classList.add('card__stroke_dashed');
    })

    main.addEventListener('mouseout', () => {
        str.classList.remove('card__stroke_dashed');
    })

    function swapCard() {
        main.addEventListener('click', () => {
    
            main.classList.add('card__main-selected');
            weight.classList.add('card__weight-selected');
            if (foot.classList.contains('fua')) {
                foot.textContent = 'Печень утки разварная с артишоками.';
            }
            if (foot.classList.contains('fish')) {
                foot.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
            }
            if (foot.classList.contains('chk')) {
                foot.textContent = 'Филе из цыплят с трюфелями в бульоне.';
            }

            block.classList.add('card__disabled-select');

            main.addEventListener('mouseover', () => {
                head.classList.remove('card__head-select');
                head.textContent = 'Сказочное заморское яство';
            });

            main.addEventListener("mouseout", () => {   
                head.classList.add('card__head-select');
                head.textContent = 'Котэ не одобряет?';
                setTimeout(function() {
                    head.classList.remove('card__head-select');
                    head.textContent = 'Сказочное заморское яство';
                }, 1000);
            }, false);
    
            main.addEventListener('click', () => {

                main.addEventListener('mouseout', () => {   
                    head.classList.remove('card__head-select');
                    head.textContent = 'Сказочное заморское яство';
                }, false);
    
                main.classList.remove('card__main-selected');
                weight.classList.remove('card__weight-selected');
                block.classList.remove('card__disabled-select');
                main.classList.add('card__main-disabled');
                weight.classList.add('card__weight-disabled');
                block.classList.add('card__disabled-dis');
                block.classList.add('card__disabled-disabled');
                foot.textContent = `Печалька, ${what} закончился.`;
                foot.classList.add('card__footer-dis');
    
                main.addEventListener('click', () => {
                    foot.classList.remove('card__footer-dis');
                    main.classList.remove('card__main-disabled');
                    weight.classList.remove('card__weight-disabled');
                    block.classList.remove('card__disabled-dis');
                    block.classList.remove('card__disabled-disabled');
                    foot.textContent = 'Чего сидишь? Порадуй котэ, '
                    const stroke = document.createElement('span');
                    stroke.textContent = 'купи';
                    stroke.classList.add('card__stroke');
                    const dot = document.createElement('span');
                    dot.textContent = '.'
                    dot.style.color = '#1698D9';
                    foot.appendChild(stroke);
                    foot.appendChild(dot);
    
                    stroke.addEventListener('mouseenter', () => {
                        stroke.classList.add('card__stroke_dashed');
                    })
                    
                    stroke.addEventListener('mouseout', () => {
                        stroke.classList.remove('card__stroke_dashed');
                    })
    
                    main.addEventListener('mouseover', () => {
                        stroke.classList.add('card__stroke_dashed');
                    })
    
                    main.addEventListener('mouseout', () => {
                        stroke.classList.remove('card__stroke_dashed');
                    })
    
                    swapCard();
    
                })
            })
        })
    }
    swapCard();
});