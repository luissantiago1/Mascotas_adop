//funcion de cambio de imagen

function activarImgA(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.remove("active");
    imgA.classList.add("active");

    btnB.classList.remove("active");
    btnA.classList.add("active");
}

function activarImgB(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.add("active");
    imgA.classList.remove("active");
    
    btnB.classList.add("active");
    btnA.classList.remove("active");
}

//funcion de cambio de botones en home

function activarDog(){
    let btn3 = document.getElementById("btn-3");
    let btn4 = document.getElementById("btn-4");
    let targets_dog = document.getElementById("targets-dog");
    let targets_cat = document.getElementById("targets-cat");

    btn4.classList.remove("active");
    btn3.classList.add("active");
    
    targets_cat.classList.remove("active");
    targets_dog.classList.add("active");
}

function activarCat(){
    let btn3 = document.getElementById("btn-3");
    let btn4 = document.getElementById("btn-4");
    let targets_dog = document.getElementById("targets-dog");
    let targets_cat = document.getElementById("targets-cat");

    btn4.classList.add("active");
    btn3.classList.remove("active");

    targets_cat.classList.add("active");
    targets_dog.classList.remove("active");
}

// funcion de mostrar infromacion en las tarjetas

function home_p(){
    let home_p = document.getElementById("home-p");
    let dog1 = document.getElementById("dog1");
    let cat1 = document.getElementById("cat1");

    home_p.classList.add("active")
    dog1.classList.remove("active")
    cat1.classList.remove("active")
}

function dog1(){
    let home_p = document.getElementById("home-p");
    let dog1 = document.getElementById("dog1");
    let cat1 = document.getElementById("cat1");

    home_p.classList.remove("active")
    dog1.classList.add("active")
    cat1.classList.remove("active")
}

function cat1(){
    let home_p = document.getElementById("home-p");
    let dog1 = document.getElementById("dog1");
    let cat1 = document.getElementById("cat1");

    home_p.classList.remove("active")
    dog1.classList.remove("active")
    cat1.classList.add("active")
}

