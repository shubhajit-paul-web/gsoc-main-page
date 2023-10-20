const newsContainer = document.querySelector(".news-container-scroll");
const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector("#sidebar .right");
const overlay = document.querySelector(".overlay");

function menuIconToogle() {
    if (sideBar.classList.contains("active")) {
        menuIcon.innerHTML = `<img src="./images/close-line.svg" alt="close" />`;
    } else {
        menuIcon.innerHTML = `<img src="./images/menu-line.svg" alt="open menu" />`;
    }
}

menuIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    sideBar.classList.toggle("active");
    overlay.classList.toggle("show");

    menuIconToogle();
});

overlay.addEventListener("click", function (e) {
    e.stopPropagation();
    sideBar.classList.remove("active");
    overlay.classList.remove("show");
    menuIconToogle();
});


const newsData = [{
        title: "GSoC 2023: project results and feedback part 1",
        semiTitle: "By Open Source Programs Office, Sep 7, 2023",
        paragraph: `In 2023, Google Summer of Code brought 966 new contributors into open source software development to work with open source organizations on a 12+ week project. We had 168 participating open source organizations with mentors and contributors from over 75
    countries this year. For 19 years, Google Summer of Code has thrived due to the
    enthusiasm of our open source communities and the 19k+`,
    },
    {
        title: "Google Summer of Code 2023 accepted contributors announced!",
        semiTitle: "By Open Source Programs Office, May 5, 2023",
        paragraph: `We are pleased to announce the Google Summer of Code (GSoC) Contributors for 2023. Over the last few weeks, our 171 mentoring organizations have read through applications, had discussions with applicants, and made the difficult decision of selecting the GSoC Contributors they will be mentoring this summer. Some notable results from this year’s application period: 43,765 applicants from 160`,
    },
    {
        title: "Google Summer of Code 2023 contributor applications open!",
        semiTitle: "By Open Source Programs Office, Mar 21, 2023",
        paragraph: `Contributor applications for Google Summer of Code (GSoC) 2023 are now open! Students and open source beginners 18 years and older are welcome to apply during the registration period, which opened March 20th at 18:00 UTC and closes April 4th at 18:00 UTC. Google Summer of Code is a global online program focused on bringing new contributors into open source software development. GSoC ...`,
    },
];

newsData.forEach(function (news) {
    newsContainer.innerHTML += `
        <div class="news-box">
            <p class="news-heading">${news.title}</p>
            <p class="news-para">
                <span>${news.semiTitle}</span>
                ${news.paragraph}
            </p>
            <a href="#">Read More</a>
        </div>
    `;
});