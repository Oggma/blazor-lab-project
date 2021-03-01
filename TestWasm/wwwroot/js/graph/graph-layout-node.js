export function initCanvas() {
    var canvas = document.getElementById('layout-node');

    //Canvas init 
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

export function createNode(x, y, radius) {
    let node = new Node(x, y, radius);
    drawNode(node);
}

function drawNode(node) {
    let canvas = document.getElementById('layout-node');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2, false);
        ctx.stroke();
    }
}

function Node(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
