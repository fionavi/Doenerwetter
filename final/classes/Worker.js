"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Worker extends DoenerTest.Human {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new DoenerTest.Vector(_x, _y);
        }
        move(_timeslice, _x, _y) {
            if (DoenerTest.workers[0].position.x < _x) {
                DoenerTest.workers[0].position.x++;
            }
            if (DoenerTest.workers[0].position.x > _x) {
                DoenerTest.workers[0].position.x--;
            }
            if (DoenerTest.workers[0].position.y < _y) {
                DoenerTest.workers[0].position.y++;
            }
            if (DoenerTest.workers[0].position.y > _y) {
                DoenerTest.workers[0].position.y--;
            }
        }
        feel(_mood) {
            if (_mood == "tired") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.fillStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.moveTo(12, -60);
                DoenerTest.crc2.lineTo(15, -60);
                DoenerTest.crc2.moveTo(8, -60);
                DoenerTest.crc2.lineTo(5, -60);
                DoenerTest.crc2.moveTo(3, -65);
                DoenerTest.crc2.lineTo(8, -67);
                DoenerTest.crc2.moveTo(18, -65);
                DoenerTest.crc2.lineTo(12, -67);
                DoenerTest.crc2.moveTo(10, -52);
                DoenerTest.crc2.ellipse(10, -52, 1, 2, 0, 20, 40);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.fill();
                DoenerTest.crc2.strokeStyle = "blue";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.moveTo(20, -75);
                DoenerTest.crc2.lineTo(25, -75);
                DoenerTest.crc2.lineTo(20, -70);
                DoenerTest.crc2.lineTo(25, -70);
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.moveTo(28, -85);
                DoenerTest.crc2.lineTo(33, -85);
                DoenerTest.crc2.lineTo(28, -80);
                DoenerTest.crc2.lineTo(33, -80);
                DoenerTest.crc2.stroke();
            }
            if (_mood == "neutral") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.fillStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.ellipse(5, -65, 2, 2, 2, 20, 40);
                DoenerTest.crc2.moveTo(15, -65);
                DoenerTest.crc2.ellipse(15, -65, 2, 2, 2, 20, 40);
                DoenerTest.crc2.moveTo(17, -55);
                DoenerTest.crc2.lineTo(3, -55);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.fill();
                DoenerTest.crc2.stroke();
            }
            if (_mood == "stressed") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.fillStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.moveTo(15, -60);
                DoenerTest.crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.moveTo(8, -65);
                DoenerTest.crc2.lineTo(3, -67);
                DoenerTest.crc2.moveTo(12, -65);
                DoenerTest.crc2.lineTo(18, -67);
                DoenerTest.crc2.moveTo(10, -52);
                DoenerTest.crc2.ellipse(10, -52, 4, 3, 0, 20, 40);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.fill();
            }
        }
        draw() {
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            //arm rechts
            DoenerTest.crc2.fillStyle = "#b38156";
            DoenerTest.crc2.strokeStyle = "black";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(35, -35, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //arm links
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(-15, -35, 5, 12, -2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //bauch
            DoenerTest.crc2.fillStyle = "#487559";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //Kopf
            DoenerTest.crc2.fillStyle = "#b38156";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            //Schürze
            DoenerTest.crc2.fillStyle = "white";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.moveTo(25, -30);
            DoenerTest.crc2.lineTo(25, -40);
            DoenerTest.crc2.lineTo(20, -50);
            DoenerTest.crc2.lineTo(20, -30);
            DoenerTest.crc2.lineTo(-0, -30);
            DoenerTest.crc2.lineTo(-0, -50);
            DoenerTest.crc2.lineTo(-5, -40);
            DoenerTest.crc2.lineTo(-5, -30);
            DoenerTest.crc2.lineTo(-10, -30);
            DoenerTest.crc2.lineTo(-10, 0);
            DoenerTest.crc2.lineTo(30, 0);
            DoenerTest.crc2.lineTo(30, -30);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.restore();
            DoenerTest.crc2.resetTransform();
        }
        order() {
            let currentOrder = {
                bread: 0,
                tomato: 0,
                lettuce: 0,
                onion: 0,
                meat: 0
            };
            return currentOrder;
        }
    }
    DoenerTest.Worker = Worker;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Worker.js.map