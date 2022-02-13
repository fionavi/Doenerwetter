namespace DoenerTest {

    export class Prepared {
        position: Vector;
        velocity: Vector;

        x: number;
        y: number;

        randomX: number = 70 * Math.random();


        constructor(_position: number, _x?: number, _y?: number) {
            console.log("Prepared CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number, _x: number, _y: number): void {
            // console.log("Human move");
        }
        checkOrder(): void {
            // debugger;
            if (refillBreadIsClicked == true || refillTomatoIsClicked == true || refillLettuceIsClicked == true || refillOnionIsClicked == true || refillMeatIsClicked == true) {
                this.drawContainer();
            }

            if (breadIsDrawn == true) {
                this.drawBread();
            }

            if (tomatoIsDrawn == true) {
                this.drawTomato();
            }

            if (lettuceIsDrawn == true) {
                this.drawLettuce();
            }

            if (onionIsDrawn == true) {
                this.drawOnion();
            }

            if (meatIsDrawn == true) {
                this.drawMeat();
            }
        }


        drawContainer(): void {
            // console.log("Human feel");
            // debugger;
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            console.log("draw at position X= " + this.position.x + " Y= " + this.position.y);
            crc2.fillStyle = "grey";


            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }



        drawBread(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "orange";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.moveTo(0, -50);
            crc2.bezierCurveTo(25, 30, 75, 30, 100, -50);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawTomato(): void {
            this.randomX = Math.floor(this.randomX);
            console.log(" X random " + this.randomX);


            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "red";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.ellipse(this.randomX, -50, 10, 10, 1, 1, 360);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.ellipse(this.randomX + 30, -50, 10, 10, 1, 1, 360);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawLettuce(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "yellowgreen";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.ellipse(this.randomX + 10, -50, 30, 10, 15, 130, 20);
            crc2.ellipse(this.randomX, -70, 10, 20, 50, 2, 30);
            crc2.ellipse(this.randomX - 20, -60, 15, 10, 50, 2, 30);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();
        }
        drawOnion(): void {
            this.randomX = Math.floor(this.randomX);
            console.log(" X random " + this.randomX);


            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "purple";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.moveTo(this.randomX + 10, -50);
            crc2.bezierCurveTo(60, -60, 20, -40, 10, -50);
            crc2.bezierCurveTo(80, -50, 10, -66, 15, -60);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
        }
        drawMeat(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "black";
            /* crc2.beginPath();
            crc2.ellipse(this.randomX, -50, 20, 10, 4, 60, 16);
            crc2.closePath();
            crc2.fill();
            crc2.stroke(); */
            crc2.beginPath();
            crc2.ellipse(this.randomX + 30, -50, 20, 10, 10, 30, 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }

}