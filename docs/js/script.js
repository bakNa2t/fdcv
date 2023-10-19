const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');

function pageTransitions(){
    // Button click active class / Замена active-btn на '' в блоке controls
    for(i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    // Section active class / Добавление класса active на элемент section
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        // console.log(id)
        if(id){
            // remove selected from the other buttons / удаляем класс active из sectBtn
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections / скрываем все sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            // show section / показываем нужную section
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle dark/light theme / переключение темы светлая/тёмная
    const themeBtn = document.querySelector('.theme__container');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    })
}
pageTransitions();

function displayControlDesc () {
    sectBtn.forEach((sectBtn) => {
        sectBtn.addEventListener('mouseover', () => {
            if (!sectBtn.contains(document.querySelector('.active-btn'))) {
                sectBtn.children[1].classList.replace('control__desc_hidden', 'control__desc_visible');
            }
        });
        sectBtn.addEventListener('mouseout', () => {
            sectBtn.children[1].classList.replace('control__desc_visible', 'control__desc_hidden');
        });
    });
}

displayControlDesc();