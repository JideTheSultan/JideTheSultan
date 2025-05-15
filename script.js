document.addEventListener("DOMContentLoaded", function () {
    let currentprojects = 0;
    const projects = document.querySelectorAll(".projects-card");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showprojects(index) {
        projects.forEach((projects, i) => {
            projects.classList.remove("active");
            projects.style.opacity = "0"; 
        });

        projects[index].classList.add("active");
        projects[index].style.opacity = "1"; 
    }


    nextButton.addEventListener("click", function () {
        currentprojects = (currentprojects + 1) % projects.length;
        showprojects(currentprojects);
    });

    prevButton.addEventListener("click", function () {
        currentprojects = (currentprojects - 1 + projects.length) % projects.length;
        showprojects(currentprojects);
    });


    setInterval(() => {
        currentprojects = (currentprojects + 1) % projects.length;
        showprojects(currentprojects);
    }, 5000);


    showprojects(currentprojects);
});
