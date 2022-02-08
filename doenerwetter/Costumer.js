"use strict";
var Doener;
(function (Doener) {
    class Costumer extends Doener.Human {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("Costumer CONSTRUCTOR");
            this.position = new Doener.Vector(_x, _y);
            this.velocity = new Doener.Vector(0, 0);
            // this.velocity.random(100, 150);
            this.velocity.scale(5);
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
            console.log("Costumer is drawing", this.position);
            Doener.crc2.resetTransform();
            Doener.crc2.save();
            Doener.crc2.translate(this.position.x, this.position.y);
            Doener.crc2.fillStyle = "#B04F00";
            //Schwanz
            Doener.crc2.save();
            Doener.crc2.rotate(-0.3);
            Doener.crc2.beginPath();
            Doener.crc2.moveTo(-5, -5);
            Doener.crc2.lineTo(-10, -15);
            Doener.crc2.lineTo(-20, -20);
            Doener.crc2.lineTo(-16, -25);
            Doener.crc2.lineTo(-24, -30);
            Doener.crc2.lineTo(-20, -35);
            Doener.crc2.lineTo(-28, -40);
            Doener.crc2.lineTo(-24, -45);
            Doener.crc2.lineTo(-20, -50);
            Doener.crc2.lineTo(0, -50);
            Doener.crc2.lineTo(-5, -45);
            Doener.crc2.lineTo(3, -40);
            Doener.crc2.lineTo(0, -35);
            Doener.crc2.lineTo(5, -30);
            Doener.crc2.lineTo(10, -25);
            Doener.crc2.lineTo(5, -20);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
            Doener.crc2.restore();
        }
    }
    Doener.Costumer = Costumer;
})(Doener || (Doener = {}));
//# sourceMappingURL=Costumer.js.map