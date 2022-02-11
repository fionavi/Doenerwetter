namespace Doener {

    export class Prepared {
        position: Vector;
        velocity: Vector;

        x: number;
        y: number;



        constructor(_position: number, _x?: number, _y?: number) {
            console.log("Prepared CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number, _x: number, _y: number): void {
            // console.log("Human move");
        }

        drawBread(): void {
            // console.log("Human feel");
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "pink";


            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawTomato(): void {
            // console.log("Human draw");
        }
        drawLettuce(): void {
            // do something
        }
        drawOnion(): void {
            // do something
        }
        drawMeat(): void {
            // do something
        }
    }

}