function Canvas() {
    let nodes = [];
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const selectedColor = "#C74904";

    (function initCanvas() {
        //Canvas init 
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        let canvasLeft = canvas.offsetLeft + canvas.clientLeft,
            canvasTop = canvas.offsetTop + canvas.clientTop

        canvas.addEventListener('click', function (event) {
            let x = event.pageX - canvasLeft,
                y = event.pageY - canvasTop;

            let stateHasChanged = false;

            // Collision detection between clicked offset and element.
            nodes.forEach(function (node) {
                if (Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2) <= Math.pow(node.radius, 2)) {
                    if (!node.isSelected) {
                        node.isSelected = true;
                        stateHasChanged = true;
                    }
                }
                else {
                    if (node.isSelected) {

                        node.isSelected = false;
                        stateHasChanged = true;
                    }
                }
            });

            if (stateHasChanged) {
                redrawCanvas();
            }
        }, false);
    }())

    const createNode =  function createNode(x, y, radius, color) {
        const node = new Node(x, y, radius, color);
        nodes.push(node);
        drawNode(node);
    }

    const deleteSelectedNode = function deleteSelectedNode() {
        const index = nodes.findIndex((node) => node.isSelected);
        if (index > -1) {
            nodes.splice(index, 1);
        }
        redrawCanvas();
    }

    function drawNode(node) {
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2, false);
        context.fillStyle = node.isSelected ? selectedColor : node.color;
        context.fill();
    }

    function redrawCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(function (node) {
            drawNode(node);
        })
    }

    function Node(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.isSelected = false;
    }

    return {
        createNode: createNode,
        deleteSelectedNode: deleteSelectedNode
    }
}

export let canvas = new Canvas();