document.addEventListener("DOMContentLoaded", () => {
    
    //make cover disappear after animation ends
    setTimeout(() => {
        document.querySelector("#cover").style.display = "none";
    }, 4100);
    
    //contact
    document.querySelector("#contact-btn").addEventListener("click", (e) => {
        document.querySelector("#c3").className = "circle-hover";
        document.querySelector("#contact3").style.display = "grid";
        a.style.borderColor = "rgb(134, 173, 255)";
    });

    //onclick functions for circles
    let elements = [...document.querySelectorAll(".circle")];
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            let a = e.target;
            let email = document.querySelector("#email");
            let linkedin = document.querySelector("#linkedin");
            let github = document.querySelector("#github");
            let question = document.querySelector("#question");
            if (a.className == "circle-hover"){
                a.className = "circle";
                if (a.id == "c2") {
                    a.style.borderColor = "black";
                    document.querySelector("#contact2").style.display = "none";
                } else if (a.id == "c3") {
                    a.style.borderColor = "tomato";
                    document.querySelector("#contact3").style.display = "none";
                } else{
                    a.style.borderColor = "black";
                }
            } else if (a.className.includes("circle")){
                a.className = "circle-hover";
                if (a.id == "c2") {
                    a.style.borderColor = "tomato";
                    document.querySelector("#contact2").style.display = "flex";
                } else if (a.id == "c3") {
                    a.style.borderColor = "rgb(134, 173, 255)";
                    document.querySelector("#contact3").style.display = "grid";
                } else {
                    a.style.borderColor = "black";
                }
            }
        });
    });

    //add functionality to all images except snowball
    let allImages = document.querySelectorAll(".white-hover");
    let imageArr = [...allImages];
    imageArr.forEach(element => element.addEventListener("click", (e) => {
        const ID = e.target.id;
        let p;
        if (ID == "veracity-hover"){
            p = "veracity";
        } else if (ID == "weather-hover"){
            p = "weather";
        } else if (ID == "two-hover"){
            p = "2048";
        } else {
            p = "tetris";
        }
        window.open(`https://lilianzlettuce.github.io/${p}`, "_blank");
    }));

    //data for each project container
    let projects = {
        veracity: {
            color: "black",
            currentDotNum: 1
        },
        snowball: {
            color: "black",
            currentDotNum: 1
        },
        weather: {
            color: "rgb(71, 166, 255)",
            currentDotNum: 1
        },
        two: {
            color: "orange",
            currentDotNum: 1
        },
        tetris: {
            color: "rgb(103, 219, 151)",
            currentDotNum: 1
        }
    }

    function getNextDotNum(current) {
        if (current == 3) {
            current = 0;
        }
        let arr = [1, 2, 3];
        return arr[current];
    }

    //add functionality to all right arrows
    let allArrows = document.querySelectorAll(".right-arrow");
    let arrowArr = [...allArrows];
    arrowArr.forEach(element => element.addEventListener("click", (e) => {
        let id = e.target.id;
        let p;
        if (id == "veracity-icon"){
            p = "veracity";
        } else if (id == "snowball-icon"){
            p = "snowball";
        } else if (id == "weather-icon"){
            p = "weather";
        } else if (id == "two-icon"){
            p = "two";
        } else {
            p = "tetris";
        }
        let color;
        let currentDotNum;
        eval("color = projects." + p + ".color;");
        eval("currentDotNum = projects." + p + ".currentDotNum;");

        let currentDot;
        let nextDot;
        let pic2 = document.querySelector(`#${p}2`);
        let pic3 = document.querySelector(`#${p}3`);

        if(currentDotNum === 1) {
            currentDot = document.querySelector(`#${p}-dot1`);
            nextDot = document.querySelector(`#${p}-dot2`);
            pic2.style.opacity = "100%";
        } else if(currentDotNum === 2) {
            currentDot = document.querySelector(`#${p}-dot2`);
            nextDot = document.querySelector(`#${p}-dot3`);
            pic2.style.opacity = "0%";
            pic3.style.opacity = "100%";
        } else {
            currentDot = document.querySelector(`#${p}-dot3`);
            nextDot = document.querySelector(`#${p}-dot1`);
            pic3.style.opacity = "0%";
        } 
        currentDot.style.backgroundColor = "white";
        currentDot.style.border = "1px solid black";
        nextDot.style.backgroundColor = color;
        nextDot.style.border = "none";
        eval("projects." + p + `.currentDotNum = ${getNextDotNum(currentDotNum)};`);
    }));

    //add functionality to all dots
    let allDots = document.querySelectorAll(".dot");
    let dotsArr = [...allDots];
    dotsArr.forEach(element => element.addEventListener("click", (e) => {
        let id = e.target.id;
        let p;
        if (id.includes("veracity")){
            p = "veracity";
        } else if (id.includes("snowball")){
            p = "snowball";
        } else if (id.includes("weather")){
            p = "weather";
        } else if (id.includes("two")){
            p = "two";
        } else {
            p = "tetris";
        }
        let color;
        let currentDotNum;
        eval("color = projects." + p + ".color;");
        eval("currentDotNum = projects." + p + ".currentDotNum;");

        let pic2 = document.querySelector(`#${p}2`);
        let pic3 = document.querySelector(`#${p}3`);

        let currentDot = document.querySelector(`#${p}-dot${currentDotNum}`);
        currentDot.style.backgroundColor = "white";
        currentDot.style.border = "1px solid black";

        let nextDot = document.querySelector(`#${id}`);
        nextDot.style.backgroundColor = color;
        nextDot.style.border = "none";

        let allClasses = e.target.classList;
        let classArr = [...allClasses];
        let changeTo;
        if (classArr.includes("dot2")){
            changeTo = 2;
            pic2.style.opacity = "100%";
            pic3.style.opacity = "0%";
        } else if (classArr.includes("dot3")){
            changeTo = 3;
            pic2.style.opacity = "0%";
            pic3.style.opacity = "100%";
        } else {
            changeTo = 1;
            pic2.style.opacity = "0%";
            pic3.style.opacity = "0%";
        }
        eval("projects." + p + `.currentDotNum = ${changeTo};`);
    }));


});