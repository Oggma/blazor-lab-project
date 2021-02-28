export function open(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";

    window.onclick = function (event) {
        if (event.target == modal) {
            close(modalId);
        }
    }
}

export function close(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
}