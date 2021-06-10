const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll ('.nav-links li');
    
    burger.addEventListener('click', () =>{
        //alternância da Nav
        nav.classList.toggle('nav-active');

        //Animação dos Links
        navLinks.forEach((link, index)=>{
            //console.log(index / 5) + 0.2; testar delay //console.log(index); testar se funcinou
            if(link.style.animation){ //condição para não precisar atualizar a página para o delay funcioanr
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
        //animação burger(3 linhas)
        burger.classList.toggle('toggle');
    });

}

navSlide();