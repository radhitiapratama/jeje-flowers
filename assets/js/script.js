document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};


let btnFlower = document.querySelector(".btn-flower");
let textPage = document.querySelector(".text-page");

btnFlower.addEventListener("click", function () {
    let remove = document.querySelector(".flower-page.remove");
    if (remove) {
        remove.classList.remove("remove");
    }
    textPage.style.display = "none";
});
