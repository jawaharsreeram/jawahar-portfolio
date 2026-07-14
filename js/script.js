function showSection(sectionId){

    const sections = document.querySelectorAll(".page-section");


    sections.forEach(section => {

        section.style.display = "none";

    });


    document.getElementById(sectionId).style.display = "block";


    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}


window.onload = function(){

    showSection("home");

};