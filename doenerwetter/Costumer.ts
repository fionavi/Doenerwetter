namespace Doener {

    export class Costumer extends Human {

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("Costumer CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            //this.velocity = new Vector(0, 0);
            // this.velocity.random(100, 150);
            //this.velocity.scale(5);
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
            console.log("Customer drawing");
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
    
            crc2.fillStyle = "red";
    
    
            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(35, -30, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //Arm links
            crc2.beginPath();
            crc2.ellipse(-15, -30, 5, 12, -2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
    
            //Bauch
            crc2.beginPath();
            crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
       
    
            //Kopf
            crc2.beginPath();
            crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            //Füße -> linker Fuß = Nullpunkt
            crc2.beginPath();
            crc2.ellipse(0, 0, 8, 7, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.ellipse(20, 0, 8, 7, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
    
            crc2.restore();
    
            //Gesicht
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.ellipse(15, -50, 2, 2, 0, 20, 40);
            crc2.moveTo(15, -50);
            crc2.lineTo(15, -45);
            crc2.lineTo(10, -45);
            crc2.lineTo(20, -45);
            crc2.lineTo(15, -45);
    
            crc2.closePath();
    
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.ellipse(10, -55, 1, 1, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.ellipse(20, -55, 1, 1, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
        }
    }
}

