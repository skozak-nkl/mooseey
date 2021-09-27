let buyTicketsButton = document.getElementById('inline-form-submit');
let modalWindow = document.getElementById('modal-window');

buyTicketsButton.addEventListener("click", function() {
    if (! modalWindow.classList.contains("open")) {
        modalWindow.classList.add("open");
    } else {
        modalWindow.classList.remove("open")
    }
});

function hideModal() {
    if (modalWindow.classList.contains("open")) {
        modalWindow.classList.remove("open");
    }
}

window.onkeydown = function(event) {
    if (event.keyCode == 27) {
        console.log(`==> DEBUG: ESC Pressed`);
        hideModal();
    }
}