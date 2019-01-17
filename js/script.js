let time = 1,
    hourRate,
    tabLeft = document.querySelector('.calc-tabs-left'),
    tabRigth = document.querySelector('.calc-tabs-rigth'),
    blocksBlock = document.getElementById('blocks-block'),
    pagesBlock = document.getElementById('pages-block'),
    counterBlock = document.getElementById('counter-block'),
    counterPages = document.getElementById('counter-pages'),
    counterHours = document.getElementById('counter-hours'),
    counterRate = document.getElementById('counter-rate'),
    changesCheck = document.getElementById('changes-check'),
    cmsCheck = document.getElementById('changes-cms'),
    totalValue = document.getElementsByClassName('calc-total-count')[0],
    input = document.getElementsByTagName('input');



const   land = 5000,
        corp = 12000,
        cms = 4000,
        changes = 1000,
        blocks = 500,
        pages = 2500;

window.addEventListener('DOMContentLoaded', function() {

    tabLeft.addEventListener('click', () => {

        // обнуление всех значений
        for( let i = 0; i < input.length; i++) {
            input[i].value = "";
            input[i].checked = false;
        };

        // видимость одностраничного блока
        blocksBlock.style.display = 'flex';

        // невидимость многостраничного блока
        pagesBlock.style.display = 'none';

        // добавление активного класса
        tabLeft.classList.add('calc-tabs-active');

        // снятие активного класса неактивному элементу
        tabRigth.classList.remove('calc-tabs-active');

        totalValue.value = land;
    });

    tabRigth.addEventListener('click', () => {

        for( let i = 0; i < input.length; i++) {
            input[i].value = "";
            input[i].checked = false;
        };

        pagesBlock.style.display = 'flex';

        blocksBlock.style.display = 'none';

        tabRigth.classList.add('calc-tabs-active');

        tabLeft.classList.remove('calc-tabs-active');

        totalValue.value = corp;
    });

    counterBlock.addEventListener('change', () => {
        counterHours.value = "";
        counterRate.value = "";
        totalValue.value = counterBlock.value * blocks;
    });

    counterPages.addEventListener('change', () => {
        counterHours.value = "";
        counterRate.value = "";
        totalValue.value = counterPages.value * pages;
    });

    counterHours.addEventListener('change', () => {
        counterBlock.value = "";
        counterPages.value = "";
        time = counterHours.value;
        hourRate = time * counterRate.value;
        totalValue.value = hourRate
    });

    counterRate.addEventListener('change', () => {
        counterBlock.value = "";
        counterPages.value = "";
        hourRate = counterRate.value * time;
        totalValue.value = hourRate
    });

    changesCheck.addEventListener('change', () => {
        if (changesCheck.checked) {
            totalValue.value = parseInt(totalValue.value) + changes;
        } else {
            totalValue.value -= changes;
        }
    });

    cmsCheck.addEventListener('change', () => {
        if (cmsCheck.checked) {
            totalValue.value = parseInt(totalValue.value) + cms;
        } else {
            totalValue.value -= cms;
        }
    });
});
