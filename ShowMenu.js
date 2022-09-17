let checkBox = document.querySelector('#borger-menu-ch-box'),
    borgerMenu = document.querySelector('#borger-menu');
// console.log(borgerMenu)

checkBox.addEventListener('change', ShowMenu, true);

function ShowMenu() {
    console.log("checked")
    if (checkBox.checked) {
        document.querySelector("aside").setAttribute("style", "left:0; ")
    } else {
        document.querySelector("aside").removeAttribute("style")
    }


    //console.log(document.styleSheets[1].cssRules);
}