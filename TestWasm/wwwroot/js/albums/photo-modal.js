export function open(modalId) {
    var modal = document.getElementById(modalId);
    console.log(modal);
    modal.style.display = "block";

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}