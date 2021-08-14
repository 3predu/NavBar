const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll ('.nav-links li');
    
    hamburger.addEventListener('click', () =>{
        //alternância da Nav
        nav.classList.toggle('nav-active');

        //Animação dos Links
        navLinks.forEach((link, index)=>{
            //console.log(index / 5) + 0.2; testar delay //console.log(index); testar se funcinou
            if(link.style.animation){//condição para não precisar dar refresh na pag
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
        //animação burger(3 linhas)
        hamburger.classList.toggle('toggle');
    });

}

navSlide();