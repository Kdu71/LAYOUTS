openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';

    menu.style.right = (menu.offsetWidth * -1) + 'px' //faz o menu deslizar e captura o tamanho da Tela em tempo real.

    openMenu.style.display = 'none'  //oculta o botão

    setTimeout(() =>{
        menu.style.opacity = '1'

        menu.style.right = '0'
    }, 10)
    
})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(() =>{
        menu.removeAttribute('style');
        openMenu.removeAttribute('style')  //reapresenta o botão
    }, 200)  
})