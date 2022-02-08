namespace Doener {

    export class Costumer extends Human {

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("Costumer CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            // this.velocity.random(100, 150);
            this.velocity.scale(5);
        }

        move(_timeslice: number): void {
            console.log("Costumer move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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

        feel(_mood: string){
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

        draw(): void {
            console.log("Costumer is drawing", this.position);
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
    
            crc2.fillStyle = "#B04F00";
            //Schwanz
            crc2.save();
            crc2.rotate(-0.3);
            crc2.beginPath();
            crc2.moveTo(-5, -5);
            crc2.lineTo(-10, -15);
            crc2.lineTo(-20, -20);
            crc2.lineTo(-16, -25);
            crc2.lineTo(-24, -30);
            crc2.lineTo(-20, -35);
            crc2.lineTo(-28, -40);
            crc2.lineTo(-24, -45);
            crc2.lineTo(-20, -50);
            crc2.lineTo(0, -50);
            crc2.lineTo(-5, -45);
            crc2.lineTo(3, -40);
            crc2.lineTo(0, -35);
            crc2.lineTo(5, -30);
            crc2.lineTo(10, -25);
            crc2.lineTo(5, -20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            crc2.restore();
        }
    }
}

