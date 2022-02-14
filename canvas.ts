let crc2: CanvasRenderingContext2D;
let imgData: ImageData;
window.addEventListener("load", handleload);



function handleload(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas) {
        return;
    }
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    // drawBackground();
    drawWorker();
    imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
}

function drawBackground(): void {

    crc2.fillStyle = "grey";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.resetTransform();
    crc2.save();
    crc2.translate(100, 100);
    crc2.fillStyle = "#b38156";
    crc2.save();
    crc2.beginPath();
    crc2.ellipse(-15, -40, 20, 20, 0, 1, 360);
    crc2.moveTo(-30, 0);
    crc2.bezierCurveTo(-35, 20, -40, 20, -40, 0);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    crc2.restore();
    crc2.save();
    crc2.beginPath();
    crc2.moveTo(10, 0);
    crc2.bezierCurveTo(10, 20, 5, 20, 0, 0);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    crc2.restore();
    crc2.fillStyle = "red";
    crc2.beginPath();
    crc2.moveTo(10, 0);
    crc2.bezierCurveTo(9, -25, -39, -25, -40, 0);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    crc2.restore();
    //Schürze
    crc2.translate(100, 100);
    crc2.fillStyle = "white";
    crc2.beginPath();
    crc2.moveTo(0, -15);
    crc2.lineTo(0, 0);
    crc2.lineTo(-5, 0);
    crc2.lineTo(-5, -17.5);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    crc2.restore();
    crc2.resetTransform();

    crc2.translate(100, 100);
    crc2.fillStyle = "white";
    crc2.beginPath();
    crc2.moveTo(-30, -15);
    crc2.lineTo(-30, 0);
    crc2.lineTo(-25, 0);
    crc2.lineTo(-25, -17.5);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    crc2.restore();
    crc2.resetTransform();

    crc2.translate(100, 100);
    crc2.fillStyle = "white";
    crc2.beginPath();
    crc2.moveTo(-30, 0);
    crc2.lineTo(-30, 40);
    crc2.lineTo(-0, 40);
    crc2.lineTo(-0, 0);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    crc2.restore();


    //gesicht
    crc2.resetTransform();
    crc2.save();
    crc2.translate(75, 120);
    crc2.strokeStyle = "black";
    crc2.beginPath();
    crc2.ellipse(5, -65, 2, 2, 2, 20, 40);
    crc2.moveTo(15, -65);
    crc2.ellipse(15, -65, 2, 2, 2, 20, 40);
    crc2.moveTo(17, -55);
    crc2.lineTo(3, -55);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
}

function drawWorker(): void {

    crc2.resetTransform();
    crc2.save();
    // crc2.translate(this.position.x, this.position.y);
    crc2.translate(200, 200);

    crc2.strokeStyle = "black";
    crc2.beginPath();
    crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
    crc2.moveTo(15, -60);
    crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
    crc2.moveTo(8, -65);
    crc2.lineTo(3, -67);
    crc2.moveTo(12, -65);
    crc2.lineTo(18, -67);
    crc2.moveTo(17, -50);
    
    crc2.arcTo(7, -55, 5, -50, 5);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();




    crc2.resetTransform();
    crc2.save();
    crc2.translate(100, 100);
    //arm rechts
    crc2.fillStyle = "#b38156";
    crc2.strokeStyle = "black";
    crc2.beginPath();
    crc2.ellipse(35, -30, 5, 12, 2, 20, 40);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    //arm links
    crc2.beginPath();
    crc2.ellipse(-15, -30, 5, 12, -2, 20, 40);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    //bauch
    crc2.fillStyle = "#7fb5b8";
    crc2.beginPath();
    crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    //Kopf
    crc2.fillStyle = "#b38156";
    crc2.beginPath();
    crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
    crc2.closePath();
    crc2.fill();
    crc2.stroke();
    //Schürze
    crc2.fillStyle = "#264970";
    crc2.beginPath();
    crc2.moveTo(-10, -25);
    crc2.lineTo(30, -25);
    crc2.lineTo(30, 0);
    crc2.lineTo(-10, 0);
    crc2.lineTo(-10, -20);
    crc2.closePath();
    crc2.moveTo(10, -15);
    crc2.lineTo(10, 0);
    crc2.fill();
    crc2.stroke();
    crc2.restore();
    crc2.resetTransform();
}