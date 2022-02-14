"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Customer extends DoenerTest.Human {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new DoenerTest.Vector(_x, _y);
            this.velocity = new DoenerTest.Vector(0, 0);
            this.velocity.set(100, 0);
            this.myOrder = this.order();
        }
        move(_timeslice, _x, _y) {
            let offset = new DoenerTest.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 100) {
                this.position.x += 10;
                this.velocity.set(10, 0);
                this.velocity.scale(5);
            }
            if (this.position.x > 830) {
                this.position.x -= 10;
                this.velocity.set(-10, 0);
                this.velocity.scale(5);
            }
        }
        feel(_mood) {
            if (_mood == "sad") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.moveTo(15, -60);
                DoenerTest.crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.moveTo(8, -65);
                DoenerTest.crc2.lineTo(3, -67);
                DoenerTest.crc2.moveTo(12, -65);
                DoenerTest.crc2.lineTo(18, -67);
                DoenerTest.crc2.moveTo(17, -50);
                DoenerTest.crc2.arcTo(7, -55, 5, -50, 5);
                DoenerTest.crc2.closePath();
                DoenerTest.crc2.fill();
                DoenerTest.crc2.stroke();
            }
            if (_mood == "happy") {
                DoenerTest.crc2.resetTransform();
                DoenerTest.crc2.save();
                DoenerTest.crc2.translate(this.position.x, this.position.y);
                DoenerTest.crc2.strokeStyle = "black";
                DoenerTest.crc2.beginPath();
                DoenerTest.crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.moveTo(15, -60);
                DoenerTest.crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
                DoenerTest.crc2.fill();
                DoenerTest.crc2.moveTo(17, -55);
                DoenerTest.crc2.arcTo(7, -50, 5, -55, 5);
                DoenerTest.crc2.stroke();
                DoenerTest.crc2.closePath();
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
            DoenerTest.crc2.fillStyle = "#7fb5b8";
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
            //T-shirt
            DoenerTest.crc2.fillStyle = "#264970";
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.moveTo(-10, -25);
            DoenerTest.crc2.lineTo(30, -25);
            DoenerTest.crc2.lineTo(30, 0);
            DoenerTest.crc2.lineTo(-10, 0);
            DoenerTest.crc2.lineTo(-10, -20);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.moveTo(10, -15);
            DoenerTest.crc2.lineTo(10, 0);
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
            DoenerTest.crc2.restore();
            DoenerTest.crc2.resetTransform();
        }
        order() {
            let guestOrder = {
                bread: 1,
                tomato: randomOrder(),
                lettuce: randomOrder(),
                onion: randomOrder(),
                meat: randomOrder()
            };
            return guestOrder;
        }
    }
    DoenerTest.Customer = Customer;
    function randomOrder() {
        let random = Math.floor(Math.random() * (2 + 1));
        return random;
    }
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Customer.js.map