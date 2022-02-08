"use strict";
var Doener;
(function (Doener) {
    class Costumer extends Doener.Human {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("Costumer CONSTRUCTOR");
            this.position = new Doener.Vector(_x, _y);
            //this.velocity = new Vector(0, 0);
            // this.velocity.random(100, 150);
            //this.velocity.scale(5);
        }
        move(_timeslice) {
            console.log("Costumer move");
            let offset = new Doener.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -50) {
                this.velocity.set(40, -20);
                this.velocity.scale(5);
            }
            if (this.position.y < 500) {
                // this.position.y += 40;
                this.velocity.set(50, 10);
                this.velocity.scale(5);
            }
            if (this.position.x > 1000) {
                this.position.x = -100;
                this.velocity.scale(5);
            }
            if (this.position.y > 600) {
                //this.position.y -= 50;
                this.velocity.set(50, -10);
                this.velocity.scale(5);
            }
        }
        feel(_mood) {
            console.log("Costumer feel");
            if (_mood == "sad") {
                // display sad face
                console.log("costumer turned sad");
            }
            if (_mood == "happy") {
                // display happy face
                console.log("costumer is happy");
            }
        }
        draw() {
            console.log("Customer drawing");
            Doener.crc2.resetTransform();
            Doener.crc2.save();
            Doener.crc2.translate(this.position.x, this.position.y);
            Doener.crc2.fillStyle = "red";
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
    }
    Doener.Costumer = Costumer;
})(Doener || (Doener = {}));
//# sourceMappingURL=Costumer.js.map