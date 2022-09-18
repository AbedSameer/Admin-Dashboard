//hold green circle
let pagesLinks = document.querySelector("#pages-links").children;
let lis = document.getElementsByTagName("li");

// onchlik function to add active class to element
let linksAsArray = [].slice.call(pagesLinks);
linksAsArray.forEach((element) => {
    element.addEventListener("click", () => {
        for (var i = 0; i < linksAsArray.length; i++) {
            linksAsArray[i].classList.remove("active");
        }
        element.classList.add("active");
        //   inductor.style = "left:calc(20% + 15px)";
    });
});
