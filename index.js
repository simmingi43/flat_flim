window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const imgLeft = document.getElementById("imgLeft");
    const imgRight = document.getElementById("imgRight");
    const content = document.querySelector(".content");
    const scrollIndicator = document.getElementById("scrollIndicator");

    const progress = Math.min(scrollY / (windowHeight * 0.5), 1);

    imgLeft.style.transform = `translateX(-${progress * 100}px)`;
    imgLeft.style.opacity = 1 - progress;

    imgRight.style.transform = `translateX(${progress * 100}px)`;
    imgRight.style.opacity = 1 - progress;

    if (scrollY > windowHeight * 0.3) {
        content.style.opacity = 1;
        content.style.transform = "translateY(0px)";
    } else {
        content.style.opacity = 0;
        content.style.transform = "translateY(50px)";
    }

    // 👇 스크롤 안내 문구 제어
    if (scrollY > 50) {
        scrollIndicator.style.opacity = 0;
    } else {
        scrollIndicator.style.opacity = 1;
    }
});



const fixedHeader = document.getElementById("fixedHeader");

window.addEventListener("scroll", () => {
    const triggerPoint = 1000; // 몇 px 이후에 나타날지
    if (window.scrollY > triggerPoint) {
        fixedHeader.classList.add("show");
    } else {
        fixedHeader.classList.remove("show");
    }
});

const fadeEls = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.1,
    }
);

fadeEls.forEach((el) => observer.observe(el));