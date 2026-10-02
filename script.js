var profileImg = document.querySelector("img");

if (profileImg) {
    profileImg.onclick = function () {

        profileImg.style.transition = "transform 0.4s ease";
        profileImg.style.transform = "scale(1.15) rotate(5deg)";
        setTimeout(function () {
            profileImg.style.transform = "scale(1) rotate(0deg)";
        }, 400);
    };
}

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.onclick = function () {
        link.style.transform = "scale(0.9)";
        setTimeout(function () {
            link.style.transform = "";
        }, 150);
    };
});

var gridTags = document.querySelectorAll(".grid-tags p");

gridTags.forEach(function (tag) {
    tag.onmouseover = function () {
        tag.style.borderColor = "#38bdf8";
        tag.style.backgroundColor = "#1e293b";
        tag.style.cursor = "pointer";
    };

    tag.onmouseout = function () {
        tag.style.borderColor = "#334155";
        tag.style.backgroundColor = "#1e293b";
    };
    tag.onclick = function () {
        if (tag.style.color === "rgb(56, 189, 248)") {
            tag.style.color = "#cbd5e1";
            tag.style.borderColor = "#334155";
        } else {
            tag.style.color = "#38bdf8";
            tag.style.borderColor = "#38bdf8";
        }
    };
});

var contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach(function (item) {
    item.onclick = function () {
        item.style.backgroundColor = "#38bdf8";
        item.style.color = "#0f172a";
        item.style.fontWeight = "bold";
        setTimeout(function () {
            item.style.backgroundColor = "#1e293b";
            item.style.color = "#cbd5e1";
            item.style.fontWeight = "normal";
        }, 300);
    };
});

var projectTitles = document.querySelectorAll("h3");

projectTitles.forEach(function (title) {
    title.onclick = function () {
        title.style.transition = "transform 0.2s ease, color 0.2s ease";
        title.style.transform = "translateX(10px)";
        title.style.color = "#38bdf8";

        setTimeout(function () {
            title.style.transform = "translateX(0px)";
            title.style.color = "white";
        }, 300);
    };
});

var nameTitle = document.querySelector("h2:first-of-type");

if (nameTitle) {
    nameTitle.onclick = function () {
        nameTitle.style.transition = "transform 0.25s ease";
        nameTitle.style.transform = "scale(1.15) translateY(-6px)";

        setTimeout(function () {
            nameTitle.style.transform = "scale(1) translateY(0px)";
        }, 300);
    };
}