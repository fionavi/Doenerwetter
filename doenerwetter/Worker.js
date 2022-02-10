"use strict";
var Doener;
(function (Doener) {
    class Worker extends Doener.Human {
        constructor(_position, _x, _y) {
            super(_position);
            // console.log("Worker CONSTRUCTOR");
            this.position = new Doener.Vector(_x, _y);
            this.velocity = new Doener.Vector(0, 0);
            this.velocity.set(50, 0);
            this.currentOrder = this.order();
            //this.velocity.scale(5);
        }
        move(_timeslice) {
            //  console.log("Worker move");
            let offset = new Doener.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 80) {
                this.position.x += 10;
                this.velocity.set(15, 0);
                this.velocity.scale(5);
            }
            if (this.position.x > 600) {
                this.position.x -= 10;
                this.velocity.set(-15, 0);
                this.velocity.scale(5);
            }
        }
        feel(_mood) {
            // console.log("Worker feel");
            if (_mood == "neutral") {
                // display neutral face
                //console.log("workers mood is neutral");
                Doener.crc2.resetTransform();
                Doener.crc2.save();
                Doener.crc2.translate(this.position.x, this.position.y);
                Doener.crc2.strokeStyle = "black";
                Doener.crc2.beginPath();
                Doener.crc2.ellipse(5, -65, 2, 2, 2, 20, 40);
                Doener.crc2.moveTo(15, -65);
                Doener.crc2.ellipse(15, -65, 2, 2, 2, 20, 40);
                Doener.crc2.moveTo(17, -55);
                Doener.crc2.lineTo(3, -55);
                Doener.crc2.closePath();
                Doener.crc2.fill();
                Doener.crc2.stroke();
            }
            if (_mood == "stressed") {
                // display neutral face
                // console.log("workers mood is stressed");
                Doener.crc2.resetTransform();
                Doener.crc2.save();
                Doener.crc2.translate(this.position.x, this.position.y);
                Doener.crc2.strokeStyle = "black";
                Doener.crc2.beginPath();
                Doener.crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
                Doener.crc2.moveTo(15, -60);
                Doener.crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
                Doener.crc2.moveTo(8, -65);
                Doener.crc2.lineTo(3, -67);
                Doener.crc2.moveTo(12, -65);
                Doener.crc2.lineTo(18, -67);
                Doener.crc2.moveTo(10, -52);
                Doener.crc2.ellipse(10, -52, 4, 3, 0, 20, 40);
                Doener.crc2.closePath();
                Doener.crc2.stroke();
                Doener.crc2.fill();
            }
            if (_mood == "tired") {
                // display neutral face
                // console.log("workers mood is tired");
                Doener.crc2.resetTransform();
                Doener.crc2.save();
                Doener.crc2.translate(this.position.x, this.position.y);
                Doener.crc2.strokeStyle = "black";
                Doener.crc2.beginPath();
                Doener.crc2.moveTo(12, -60);
                Doener.crc2.lineTo(15, -60);
                Doener.crc2.moveTo(8, -60);
                Doener.crc2.lineTo(5, -60);
                Doener.crc2.moveTo(3, -65);
                Doener.crc2.lineTo(8, -67);
                Doener.crc2.moveTo(18, -65);
                Doener.crc2.lineTo(12, -67);
                Doener.crc2.moveTo(10, -52);
                Doener.crc2.ellipse(10, -52, 1, 2, 0, 20, 40);
                Doener.crc2.closePath();
                Doener.crc2.stroke();
                Doener.crc2.fill();
                Doener.crc2.strokeStyle = "blue";
                Doener.crc2.beginPath();
                Doener.crc2.moveTo(20, -75);
                Doener.crc2.lineTo(25, -75);
                Doener.crc2.lineTo(20, -70);
                Doener.crc2.lineTo(25, -70);
                Doener.crc2.stroke();
                Doener.crc2.resetTransform();
                Doener.crc2.save();
                Doener.crc2.translate(this.position.x, this.position.y);
                Doener.crc2.beginPath();
                Doener.crc2.moveTo(28, -85);
                Doener.crc2.lineTo(33, -85);
                Doener.crc2.lineTo(28, -80);
                Doener.crc2.lineTo(33, -80);
                Doener.crc2.stroke();
            }
        }
        draw() {
            // console.log("Worker drawing");
            Doener.crc2.resetTransform();
            Doener.crc2.save();
            Doener.crc2.translate(this.position.x, this.position.y);
            Doener.crc2.fillStyle = "yellow";
            //Arm rechts
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(35, -30, 5, 12, 2, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            //Arm links
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(-15, -30, 5, 12, -2, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            //Bauch
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            //Kopf
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            //Füße -> linker Fuß = Nullpunkt
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(0, 0, 8, 7, 0, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(20, 0, 8, 7, 0, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            Doener.crc2.restore();
            //Gesicht
            Doener.crc2.fillStyle = "black";
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(15, -50, 2, 2, 0, 20, 40);
            Doener.crc2.moveTo(15, -50);
            Doener.crc2.lineTo(15, -45);
            Doener.crc2.lineTo(10, -45);
            Doener.crc2.lineTo(20, -45);
            Doener.crc2.lineTo(15, -45);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(10, -55, 1, 1, 0, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(20, -55, 1, 1, 0, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
        }
        order() {
            let currentOrder = {
                bread: 0,
                tomato: 0,
                lettuce: 0,
                onion: 0,
                meat: 0,
            };
            return currentOrder;
        }
    }
    Doener.Worker = Worker;
})(Doener || (Doener = {}));
//# sourceMappingURL=Worker.js.map