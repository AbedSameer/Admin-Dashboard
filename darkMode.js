let controlUnit = document.querySelector('#control-unit'),
    checkBoxBtn = document.querySelector('#mode-btn-ch-box'),
    toggleBtn = document.querySelector('#mode-btn');

checkBoxBtn.addEventListener('change', ActiveDarkMode, true);

function ActiveDarkMode() {
    // console.log("checked")

    if (checkBoxBtn.checked) {
        document.querySelector("body").setAttribute("style", "--white-color:#202528;--card-shadow: 0px 1rem 1rem rgba(0, 0, 0, 0.4);--bg-color:#181a1e;--black-color:#FFF;--gray-font-color:rgb(171 171 171);--dark-elements-bg:#000; ")
    } else {
        document.querySelector("body").removeAttribute("style")
    }


    //console.log(document.styleSheets[1].cssRules);
}