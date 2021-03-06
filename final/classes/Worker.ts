namespace DoenerTest {

    export class Worker extends Human {

        public constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            this.position = new Vector(_x, _y);
        }

        public move(_timeslice: number, _x: number, _y: number): void {
    
            if (workers[0].position.x < _x) {
                workers[0].position.x++;
            }

            if (workers[0].position.x > _x) {
                workers[0].position.x--;
            }

            if (workers[0].position.y < _y) {
                workers[0].position.y++;
            }

            if (workers[0].position.y > _y) {
                workers[0].position.y--;
            }
        }

        public feel(_mood: string): void {
            if (_mood == "tired") {
                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.moveTo(12, -60);
                crc2.lineTo(15, -60);
                crc2.moveTo(8, -60);
                crc2.lineTo(5, -60);
                crc2.moveTo(3, -65);
                crc2.lineTo(8, -67);
                crc2.moveTo(18, -65);
                crc2.lineTo(12, -67);
                crc2.moveTo(10, -52);
                crc2.ellipse(10, -52, 1, 2, 0, 20, 40);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.strokeStyle = "blue";
                crc2.beginPath();
                crc2.moveTo(20, -75);
                crc2.lineTo(25, -75);
                crc2.lineTo(20, -70);
                crc2.lineTo(25, -70);
                crc2.stroke();
                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(28, -85);
                crc2.lineTo(33, -85);
                crc2.lineTo(28, -80);
                crc2.lineTo(33, -80);
                crc2.stroke();
            }

            if (_mood == "neutral") {
                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.ellipse(5, -65, 2, 2, 2, 20, 40);
                crc2.moveTo(15, -65);
                crc2.ellipse(15, -65, 2, 2, 2, 20, 40);
                crc2.moveTo(17, -55);
                crc2.lineTo(3, -55);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
            }

            if (_mood == "stressed") {
                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.ellipse(5, -60, 1, 1, 2, 20, 40);
                crc2.moveTo(15, -60);
                crc2.ellipse(15, -60, 1, 1, 2, 20, 40);
                crc2.moveTo(8, -65);
                crc2.lineTo(3, -67);
                crc2.moveTo(12, -65);
                crc2.lineTo(18, -67);
                crc2.moveTo(10, -52);
                crc2.ellipse(10, -52, 4, 3, 0, 20, 40);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
        }

        public draw(): void {
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            //arm rechts
            crc2.fillStyle = "#b38156";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.ellipse(35, -35, 5, 12, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //arm links
            crc2.beginPath();
            crc2.ellipse(-15, -35, 5, 12, -2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //bauch
            crc2.fillStyle = "#487559";
            crc2.beginPath();
            crc2.ellipse(10, -25, 20, 25, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //Kopf
            crc2.fillStyle = "#b38156";
            crc2.beginPath();
            crc2.ellipse(10, -60, 15, 15, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //Sch??rze
            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.moveTo(25, -30);
            crc2.lineTo(25, -40);
            crc2.lineTo(20, -50);
            crc2.lineTo(20, -30);
            crc2.lineTo(-0, -30);
            crc2.lineTo(-0, -50);
            crc2.lineTo(-5, -40);
            crc2.lineTo(-5, -30);
            crc2.lineTo(-10, -30);
            crc2.lineTo(-10, 0);
            crc2.lineTo(30, 0);
            crc2.lineTo(30, -30);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();
            crc2.resetTransform();
        }

        public order(): Storage {
            let currentOrder: Storage = {
                bread: 0,
                tomato: 0,
                lettuce: 0,
                onion: 0,
                meat: 0
            };
            return currentOrder;
        }
    }
}

