"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Prepared {
        constructor(_position, _x, _y) {
            this.randomX = 70 * Math.random();
            console.log("Prepared CONSTRUCTOR");
            this.position = new DoenerTest.Vector(_x, _y);
            this.velocity = new DoenerTest.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice, _x, _y) {
            this.position.x = DoenerTest.workers[0].position.x + 10;
            this.position.y = DoenerTest.workers[0].position.y - 10;
        }
        checkOrder() {
            // debugger;
            if (DoenerTest.refillBreadIsClicked == true || DoenerTest.refillTomatoIsClicked == true || DoenerTest.refillLettuceIsClicked == true || DoenerTest.refillOnionIsClicked == true || DoenerTest.refillMeatIsClicked == true) {
                this.drawContainer();
            }
            if (DoenerTest.breadIsDrawn == true) {
                this.drawBread();
            }
            if (DoenerTest.tomatoIsDrawn == true) {
                this.drawTomato();
            }
            if (DoenerTest.lettuceIsDrawn == true) {
                this.drawLettuce();
            }
            if (DoenerTest.onionIsDrawn == true) {
                this.drawOnion();
            }
            if (DoenerTest.meatIsDrawn == true) {
                this.drawMeat();
            }
        }
        drawContainer() {
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            console.log("draw at position X= " + this.position.x + " Y= " + this.position.y);
            DoenerTest.crc2.fillStyle = "grey";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.scale(0.5, 0.5);
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawBread() {
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x + 30, this.position.y);
            DoenerTest.crc2.fillStyle = "orange";
            DoenerTest.crc2.strokeStyle = "black";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.moveTo(0, -50);
            DoenerTest.crc2.bezierCurveTo(0, 20, 35, 20, 50, -50);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawTomato() {
            this.randomX = Math.floor(this.randomX);
            console.log(" X random " + this.randomX);
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x + 30, this.position.y);
            DoenerTest.crc2.fillStyle = "red";
            DoenerTest.crc2.strokeStyle = "black";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(this.randomX - 10, -50, 5, 5, 1, 1, 360);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(this.randomX - 10, -50, 5, 5, 1, 1, 360);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawLettuce() {
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x + 30, this.position.y);
            DoenerTest.crc2.fillStyle = "yellowgreen";
            DoenerTest.crc2.strokeStyle = "black";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(this.randomX + 10, -50, 10, 5, 15, 130, 20);
            DoenerTest.crc2.ellipse(this.randomX, -60, 10, 5, 20, 2, 30);
            DoenerTest.crc2.ellipse(this.randomX - 20, -55, 5, 13, 50, 2, 30);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            //crc2.stroke();
        }
        drawOnion() {
            this.randomX = Math.floor(this.randomX);
            console.log(" X random " + this.randomX);
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x + 30, this.position.y);
            DoenerTest.crc2.fillStyle = "purple";
            DoenerTest.crc2.strokeStyle = "black";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.moveTo(this.randomX, -50);
            DoenerTest.crc2.bezierCurveTo(60, -60, 20, -40, 10, -50);
            DoenerTest.crc2.bezierCurveTo(80, -50, 10, -66, 15, -60);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawMeat() {
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x + 30, this.position.y);
            DoenerTest.crc2.fillStyle = "brown";
            DoenerTest.crc2.strokeStyle = "black";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(this.randomX, -50, 10, 5, 10, 30, 1);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
    }
    DoenerTest.Prepared = Prepared;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Prepared.js.map