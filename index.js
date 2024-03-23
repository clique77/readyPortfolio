let unlist = document.querySelector("ul");

unlist.style.visibility = "hidden";
let mouseCounter = 0;
function projectShow() {
    mouseCounter++;
    if (mouseCounter === 2) {
        unlist.classList.remove("animation");
        unlist.style.animation = "back 1s ease forwards";
        // Add event listener for animation end
        unlist.addEventListener('animationend', function() {
            unlist.style.visibility = "hidden";
        }, {once: true}); // Make sure the event listener only fires once
        mouseCounter = 0;
        document.querySelector("button").innerText = "Show projects";
    } else if (mouseCounter === 1) {
        unlist.style.visibility = "visible";
        unlist.classList.add("animation");
        unlist.style.animation = "rightDrop 1s ease forwards";
        document.querySelector("button").innerText = "Hide projects";
    }
}

let checkBox = document.querySelector("input");

checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
        document.querySelector("body").style.backgroundColor = "#212121";
        document.querySelector("h2").style.color = "white";
        document.querySelector("p").style.color = "white";
        let borderChange = document.getElementsByClassName("container");

        for (let i = 0; i < borderChange.length; i++) {
            borderChange[i].style.borderColor = "white";
        }
        let headerChange = document.getElementsByClassName("header");

        for (let i = 0; i < headerChange.length; i++) {
            headerChange[i].style.backgroundColor = "white";
            headerChange[i].style.color = "black";
        }

        let liChange = document.querySelectorAll(".un-order-list a");

        liChange.forEach(function (liChange) {
            liChange.style.color = "white";
        });
        let ulChange = document.getElementsByClassName("un-order-list");

        for (let i = 0; i < ulChange.length; i++) {
            ulChange[i].style.color = "white";
        }

        document.querySelector("button").style.color = "black";
        document.querySelector("button").style.backgroundColor = "#DCDCDC";

        document.querySelector("label").style.color = "white";
        document.querySelector("label").innerText = "Light Theme";

        let imageTikTok = document.getElementById("tiktok");
        imageTikTok.src = "images/tiktokwhite.png";

        let imageInsta = document.getElementById("instagram");
        imageInsta.src = "images/instawhite.jpg";

        let imageTelegram = document.getElementById("telegram");
        imageTelegram.src = "images/tgwhite.jpg";

        imageTikTok.style.boxShadow = "5px 5px 5px black";
        imageInsta.style.boxShadow = "5px 5px 5px black";
        imageTelegram.style.boxShadow = "5px 5px 5px black";

    } else {

        document.querySelector("body").style.backgroundColor = "";
        document.querySelector("h2").style.color = "";
        document.querySelector("p").style.color = "";

        let borderChange = document.getElementsByClassName("container");
        for (let i = 0; i < borderChange.length; i++) {
            borderChange[i].style.borderColor = "";
        }

        let headerChange = document.getElementsByClassName("header");
        for (let i = 0; i < headerChange.length; i++) {
            headerChange[i].style.backgroundColor = "";
            headerChange[i].style.color = "";
        }

        let liChange = document.querySelectorAll(".un-order-list a");
        liChange.forEach(function (liChange) {
            liChange.style.color = "";
        });

        let ulChange = document.getElementsByClassName("un-order-list");
        for (let i = 0; i < ulChange.length; i++) {
            ulChange[i].style.color = "";
        }

        document.querySelector("button").style.color = "";
        document.querySelector("button").style.backgroundColor = "";

        document.querySelector("label").style.color = "";
        document.querySelector("label").innerText= "Night Theme";

        let imageTikTok = document.getElementById("tiktok");
        imageTikTok.src = "images/tiktok.jpg";

        let imageInsta = document.getElementById("instagram");
        imageInsta.src = "images/insta.jpg"

        let imageTelegram = document.getElementById("telegram");
        imageTelegram.src = "images/tg.jpg";

        imageTikTok.style.boxShadow = "";
        imageInsta.style.boxShadow = "";
        imageTelegram.style.boxShadow = "";
    }
});
