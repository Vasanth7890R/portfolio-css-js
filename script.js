var homeLink = document.querySelector("a[href='#home']");
var skillsLink = document.querySelector("a[href='#skills']");
var projectsLink = document.querySelector("a[href='#projects']");
var interestsLink = document.querySelector("a[href='#interests']");
var certificationsLink = document.querySelector("a[href='#certifications']");
var contactLink = document.querySelector("a[href='#contact']");

var profileImg = document.querySelector("img");

function resetNav() {
    homeLink.style.background = "";
    skillsLink.style.background = "";
    projectsLink.style.background = "";
    interestsLink.style.background = "";
    certificationsLink.style.background = "";
    contactLink.style.background = "";

    homeLink.style.boxShadow = "";
    skillsLink.style.boxShadow = "";
    projectsLink.style.boxShadow = "";
    interestsLink.style.boxShadow = "";
    certificationsLink.style.boxShadow = "";
    contactLink.style.boxShadow = "";
}

homeLink.onclick = function () {
    resetNav();
    homeLink.style.background = "rgba(56,189,248,0.15)";
    homeLink.style.boxShadow = "0 0 14px rgba(56,189,248,0.4)";
    homeLink.style.padding = "2px 8px";
};

skillsLink.onclick = function () {
    resetNav();
    skillsLink.style.background = "rgba(56,189,248,0.15)";
    skillsLink.style.boxShadow = "0 0 14px rgba(56,189,248,0.4)";
    skillsLink.style.padding = "2px 8px";
};

projectsLink.onclick = function () {
    resetNav();
    projectsLink.style.background = "rgba(56,189,248,0.15)";
    projectsLink.style.boxShadow = "0 0 14px rgba(56,189,248,0.4)";
    projectsLink.style.padding = "2px 8px";
};

interestsLink.onclick = function () {
    resetNav();
    interestsLink.style.background = "rgba(56,189,248,0.15)";
    interestsLink.style.boxShadow = "0 0 14px rgba(56,189,248,0.4)";
    interestsLink.style.padding = "2px 8px";
};

certificationsLink.onclick = function () {
    resetNav();
    certificationsLink.style.background = "rgba(56,189,248,0.15)";
    certificationsLink.style.boxShadow = "0 0 14px rgba(56,189,248,0.4)";
    certificationsLink.style.padding = "2px 8px";
};

contactLink.onclick = function () {
    resetNav();
    contactLink.style.background = "rgba(56,189,248,0.15)";
    contactLink.style.boxShadow = "0 0 14px rgba(56,189,248,0.4)";
    contactLink.style.padding = "2px 8px";
};

profileImg.onclick = function () {
    profileImg.style.transform = "scale(1.1)";

    setTimeout(function () {
        profileImg.style.transform = "scale(1)";
    }, 300);
};