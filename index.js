

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  });


   // Function to open the right sidebar
document.getElementById("open-menu").addEventListener("click", function () {
  document.querySelector(".right-sidebar").removeAttribute("hidden");
});

// Function to close the right sidebar
document.getElementById("close-menu").addEventListener("click", function () {
  document.querySelector(".right-sidebar").setAttribute("hidden", true);
});




//faq page
const deliver = document.getElementById("deli")
const company = document.getElementById("comp")
const food = document.getElementById("food")
const ourFood = document.querySelector(".question")
const ourDelivery = document.querySelector(".delivery")
const ourCompany = document.querySelector(".company")



deliver.addEventListener("click", () => {
    ourDelivery.classList.remove("hidden")
    ourFood.style.display = "none" 
    food.style.backgroundColor = "white"
    food.style.color = "black"
    // ourCompany.classList.add("hidden")
    company.style.background = "white"
    company.style.color = "black"
    deliver.style.background = "#35b8be"
    deliver.style.color = "white"
})

company.addEventListener("click", () => {
    ourCompany.classList.remove("hidden")
    ourFood.style.display = "none"
    ourDelivery.classList.add("hidden")
    company.style.background = "#35b8be"
    company.style.color = "white"
    deliver.style.color = "black"
    deliver.style.background = "white"
    food.style.backgroundColor = "white"
    food.style.color = "black"
})

food.addEventListener("click", () => {
    ourDelivery.classList.add("hidden")
    ourFood.style.display = "block" 
    ourCompany.classList.add("hidden")
    food.style.background = "#35B8BE"
    food.style.color = "white"
    deliver.style.color = "black"
    deliver.style.background = "white"
    company.style.background = "white"
    company.style.color = "black"
})

function myFunction() {
    const plus = document.getElementById("one")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function secondFunction() {
    const plus = document.getElementById("two")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function thirdFunction() {
    const plus = document.getElementById("three")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function fourthFunction() {
    const plus = document.getElementById("four")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function fifthFunction() {
    const plus = document.getElementById("five")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function sixthFunction() {
    const plus = document.getElementById("six")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function content() {
    const plus = document.getElementById("deli-1")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function secondContent() {
    const plus = document.getElementById("deli-2")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function thirdContent() {
    const plus = document.getElementById("deli-3")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function fourthContent() {
    const plus = document.getElementById("deli-4")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function fifthContent() {
    const plus = document.getElementById("deli-5")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function sixthContent() {
    const plus = document.getElementById("deli-6")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}


function element() {
    const plus = document.getElementById("comp-1")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function secondElement() {
    const plus = document.getElementById("comp-2")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function thirdElement() {
    const plus = document.getElementById("comp-3")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function fourthElement() {
    const plus = document.getElementById("comp-4")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function fifthElement() {
    const plus = document.getElementById("comp-5")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}

function sixthElement() {
    const plus = document.getElementById("comp-6")
    if (plus.style.display === "block") {
        plus.style.display = "none";
    } else {
        plus.style.display = "block"
    }
}




