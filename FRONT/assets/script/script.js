const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark",
};

const theme = localStorage.getItem('theme') ||
    (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;

function MyFuncion() {
    var element = document.getElementById("spin");
    element.classList.toggle("on");
}

function color() {
    var element = document.getElementById("corzinha");
    element.classList.add("gre");
    element.classList.remove("purp", "ree", "blu");

}

function color2() {
    var element = document.getElementById("corzinha");
    element.classList.add("blu");
    element.classList.remove("gre",
        "ree",
        "purp");

}

function color3() {
    var element = document.getElementById("corzinha");
    element.classList.add("purp");
    element.classList.remove("gre", "ree", "blu");

}

function color4() {
    var element = document.getElementById("corzinha");
    element.classList.add("ree");
    element.classList.remove("gre", "purp", "blu");

}

function likeit1() {
    var element = document.getElementById("like1");
    if(document.getElementById("like1").classList.contains("fa-regular")){
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
    element.classList.add("red-h")
    }
    else {
        element.classList.remove("fa-solid");
        element.classList.remove("red-h")
        element.classList.add("fa-regular");
    }
}
function likeit2() {
    var element = document.getElementById("like2");
    if(document.getElementById("like2").classList.contains("fa-regular")){
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
    element.classList.add("red-h")
    }
    else {
        element.classList.remove("fa-solid");
        element.classList.remove("red-h")
        element.classList.add("fa-regular");
    }
}

function saveit1() {
    var element = document.getElementById("save1");
    if(document.getElementById("save1").classList.contains("fa-regular")){
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
    element.classList.add("blue-h")
    }
    else {
        element.classList.remove("fa-solid");
        element.classList.remove("blue-h")
        element.classList.add("fa-regular");
    }
}

function saveit2() {
    var element = document.getElementById("save2");
    if(document.getElementById("save2").classList.contains("fa-regular")){
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
    element.classList.add("blue-h")
    }
    else {
        element.classList.remove("fa-solid");
        element.classList.remove("blue-h")
        element.classList.add("fa-regular");
    }
}
   