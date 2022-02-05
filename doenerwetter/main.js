"use strict";
var Doener;
(function (Doener) {
    window.addEventListener("load", handleload);
    let crc2;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawWorker({ x: 100, y: 100 });
        drawCostumer();
    }
    function drawBackground() {
        console.log("Background is drawing");
        crc2.fillStyle = "grey";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawWorker(_position) {
        console.log("Worker drawing");
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "yellow";
        //Arm rechts
        crc2.beginPath();
        crc2.ellipse(35, -30, 5, 12, 2, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Arm links
        crc2.beginPath();
        crc2.ellipse(-15, -30, 5, 12, -2, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Bauch
        crc2.beginPath();
        crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Kopf
        crc2.beginPath();
        crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Füße -> linker Fuß = Nullpunkt
        crc2.beginPath();
        crc2.ellipse(0, 0, 8, 7, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(20, 0, 8, 7, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        //Gesicht
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.ellipse(15, -50, 2, 2, 0, 20, 40);
        crc2.moveTo(15, -50);
        crc2.lineTo(15, -45);
        crc2.lineTo(10, -45);
        crc2.lineTo(20, -45);
        crc2.lineTo(15, -45);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(10, -55, 1, 1, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(20, -55, 1, 1, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawCostumer() {
        /*     crc2.save();
            crc2.beginPath();
            crc2.lineWidth = 10;
            crc2.ellipse(Math.floor(Math.random() * 500), 300, 100, 30, Math.floor(Math.random() * 100), 32, 42);
            crc2.fillStyle = "black";
            crc2.strokeStyle = colors2[randomC2];
            crc2.stroke();
            crc2.fill();
            console.log("ellipse drawn");
    
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), 100, 550, 300, Math.floor(Math.random() * 20));
            crc2.bezierCurveTo(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), 10, 50, 500, 500);
            crc2.strokeStyle = "white";
            crc2.stroke(); */
    }
})(Doener || (Doener = {}));
//# sourceMappingURL=main.js.map