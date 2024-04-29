const navSlide = ()=> {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    /*
    Amikor rákattintunk a burger-re, azt akarjuk, hogy a nav megkapja a nav-active-class-t!! 
    */
   const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", ()=> {
        nav.classList.toggle("nav-active");

    /*
    ez meg az animation a li-kre, amihez ugye lementettük őket -> const navLinks = document.querySelectorAll(".nav-links li");
    */

        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });
        /*
            Miért kell nekünk az index -> `navLinkFade 0.5s ease forwards ${index / 7}s`;
            ${index / 7}s ez utolsó lesz a delay és akkor az első link jelenik meg utána a második és így, ezért kell az index 
            console.log(index / 7);
            0
            0.14564
            0.28345
            0.42435
            ugye, mert 4 link van és ennyi idő alatt jelennek meg sorban, elsőnek az indexe az nulla, szóval az rögtön 
            most kettő probléma van 
            1. kevés ez azidő ezért még hozzáadunk 1.5s-öt ->  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            2. hogy ez egyszer megy végbe és ha bezárjuk akkor másodjára már nem fog 
            ezért kell egy if, hogyha rajta van az animation, akkor ne csináljon semmit, de ha nincs akkor adja hozzá!!!!!!!
            if(link.style.animation) {
            link.style.animation = "";
                } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
                }
        */

        /*
        ez meg a burger-animation lesz 
            .toggle .line-1 {
                transform: rotate(-45deg) translate(-5px, 6px))
            }
            .toggle .line-2 {
                opacity: 0;
            }
            .toggle .line-3 {
                transform: rotate(45deg) translate(-5px, -6px))
            }

        és akkor emiatt a burger-menüből egy x lesz 
        */
        burger.classList.toggle("toggle");
        });
};


// navSlide();

/*
Ha van több dolog, amit meg kell majd hívni, akkor csinálunk arra egy function-t, hogy ott, abban hívogatjuk meg a dolgokat, meg azt a végén
*/

const app = ()=> {
    navSlide();
};

app();