let currentSection = "home";


function showSection(sectionId){

    if(sectionId === currentSection) return;


    const currentPage = document.getElementById(currentSection);

    const nextPage = document.getElementById(sectionId);


    currentPage.classList.remove("active");


    setTimeout(()=>{

        nextPage.classList.add("active");

    },300);


    currentSection = sectionId;


    document.querySelectorAll(".nav-link").forEach(link=>{

        link.classList.remove("active-nav");


        if(link.dataset.section === sectionId){

            link.classList.add("active-nav");

        }

    });


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



window.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("home").classList.add("active");

});

const pages = document.querySelectorAll(".page-section");


pages.forEach(page=>{

    page.addEventListener("mousemove",(e)=>{

        const rect = page.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;


        page.style.setProperty("--mouse-x",`${x}px`);

        page.style.setProperty("--mouse-y",`${y}px`);

    });

});
window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },3000);

});

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");


document.addEventListener("mousemove",(e)=>{

    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;


    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;

});



const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .detail-card, .contact-card"
);


hoverElements.forEach(element=>{

    element.addEventListener("mouseenter",()=>{

        cursorRing.classList.add("hover");

    });


    element.addEventListener("mouseleave",()=>{

        cursorRing.classList.remove("hover");

    });

});

/* ===========================
   LIGHTBOX
=========================== */

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-grid img, .certificate-card img")
.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImg.src=image.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});


/* ==========================================
   MY WORK ACCORDION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const categories = document.querySelectorAll(".work-category");

    categories.forEach(category => {

        const header = category.querySelector(".category-header");

        header.addEventListener("click", () => {

            const isActive = category.classList.contains("active");

            // Close every category
            categories.forEach(item => {

                item.classList.remove("active");

            });

            // Open the selected category
            if (!isActive) {

                category.classList.add("active");

            }

        });

    });

});


/* ==========================================
   AUTO PROJECT COUNTER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const categories = document.querySelectorAll(".work-category");

    categories.forEach(category => {

        const counter = category.querySelector(".category-count");

        const projects = category.querySelectorAll(".project-card");

        const comingSoon = category.querySelector(".coming-soon-card");

        if (projects.length > 0) {

            counter.textContent =
                projects.length + (projects.length === 1 ? " Project" : " Projects");

        }

        else if (comingSoon) {

            if (category.querySelector("h3").textContent.includes("Digital")) {

                counter.textContent = "Coming Soon";

            }

            else if (category.querySelector("h3").textContent.includes("Video")) {

                counter.textContent = "Future Videos";

            }

        }

    });

});