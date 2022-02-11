"use strict";
var Doener;
(function (Doener) {
    class Prepared {
        constructor(_position, _x, _y) {
            console.log("Prepared CONSTRUCTOR");
            this.position = new Doener.Vector(_x, _y);
            this.velocity = new Doener.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice, _x, _y) {
            // console.log("Human move");
        }
        drawBread() {
            // console.log("Human feel");
            Doener.crc2.resetTransform();
            Doener.crc2.save();
            Doener.crc2.translate(this.position.x, this.position.y);
            Doener.crc2.fillStyle = "pink";
            //Arm rechts
            Doener.crc2.beginPath();
            Doener.crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            Doener.crc2.closePath();
            Doener.crc2.fill();
            Doener.crc2.stroke();
        }
        drawTomato() {
            // console.log("Human draw");
        }
        drawLettuce() {
            // do something
        }
        drawOnion() {
            // do something
        }
        drawMeat() {
            // do something
        }
    }
    Doener.Prepared = Prepared;
})(Doener || (Doener = {}));
//# sourceMappingURL=Prepared.js.map