namespace Doener {
    export let crc2: CanvasRenderingContext2D;

    let workers: Worker[] = [];
    let customers: Costumer[] = [];

    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleload);
    document.querySelector("#start").addEventListener("click", startGame);
   
   
    document.querySelector("#refillBread").addEventListener("click", refill);
    document.querySelector("#refillTomato").addEventListener("click", refill);
    document.querySelector("#refillLettuce").addEventListener("click", refill);
    document.querySelector("#refillOnion").addEventListener("click", refill);
    document.querySelector("#refillMeat").addEventListener("click", refill);


    let currentCostumerAmount: number = 0;
    console.log(currentCostumerAmount);


    interface Storage {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    let storageLeft: Storage = {
        bread: 50,
        tomato: 50,
        lettuce: 50,
        onion: 50,
        meat: 50,
    };

    interface Counter {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    let counterLeft: Counter = {
        bread: 100,
        tomato: 100,
        lettuce: 100,
        onion: 100,
        meat: 100,
    };



    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);


        drawBackground();
        


    }

    function startGame(): void {
        console.log("START");

        counterLeft.bread = 100;
        counterLeft.tomato = 100;
        counterLeft.lettuce = 100;
        counterLeft.onion = 100;
        counterLeft.meat = 100;


        const form = document.querySelector('form')!;
        const data = new FormData(form);
        const amountStock = data.get('amountIngredients') as string;
        let stock: number = parseInt(amountStock);    //string in number parsen
        storageLeft.bread = storageLeft.tomato = storageLeft.lettuce = storageLeft.onion = storageLeft.meat = stock;
        console.log("Stock Amount: " + amountStock);

        //chart in bread stock div soll angepasst werden
        let chart: any = document.querySelector('.onionStockChart');
        let displayStockOnion: any = chart.getAttribute('style');
        //displayStockOnion.innerHTML = "height" + stock + 'px';
        displayStockOnion.innerHTML = "height" + amountStock + 'px';
        console.log("Chart Height: " + amountStock);
 



        console.log("Onion Amount: " + storageLeft.onion + " bzw. " + amountStock);

        const stressLevel = data.get('stressLevel') as string;    //form Data stressLevel of worker als string holen
        console.log("Stresslevel Worker: " + stressLevel);



        const amountWorker = data.get('amountWorker') as string;    //form Data anzahl worker als string holen
        console.log("Anzahl Worker: " + amountWorker);
        let amount: number = parseInt(amountWorker);    //string in number parsen
        // let worker: Human = new Worker(300, 300);


        console.log(workers[0]);
        for (let index = 0; index < amount; index++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX: number = Math.random() * 300 + Math.random() * 300 + 80;
            let worker: Human = new Worker(1, randomX, 200);
            worker.draw();
            workers.push(worker);
            console.log(index + " workers erstellt");
            console.log(worker.position);

        }

        const amountCostumer = data.get('amountCostumer') as string;    //form Data anzahl worker als string holen
        console.log("Anzahl Costumer per min: " + amountCostumer);
        let amountC: number = parseInt(amountCostumer);
        drawCostumer(amountC);


        //return false; // prevent reload // Quelle: https://dev.to/deciduously/formdata-in-typescript-24cl
    };




    function drawBackground(): void {
        console.log("Background is drawing");



        crc2.fillStyle = "grey";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);



        crc2.resetTransform();
        crc2.save();
        crc2.translate(10, 10)

        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 100);
        crc2.lineTo(700, 100);
        crc2.lineTo(700, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(100, 250)

        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(550, 50);
        crc2.lineTo(0, 50);
        crc2.lineTo(0, 0);
        crc2.lineTo(550, 0);
        crc2.lineTo(550, 50);
        crc2.lineTo(550, 0)
        crc2.lineTo(550, -140);
        crc2.lineTo(610, -140);
        crc2.lineTo(610, 50);



        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(895, 395)
        crc2.strokeStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -150);
        crc2.lineTo(-50, -180);
        crc2.lineTo(-50, -30);

        crc2.closePath();
        //crc2.fill();
        crc2.stroke();

        crc2.restore();



        crc2.resetTransform();
        crc2.save();
        crc2.translate(200, 255)

        crc2.fillStyle = "red";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(120, 255)

        crc2.fillStyle = "orange";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(280, 255)

        crc2.fillStyle = "greenyellow";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(360, 255)

        crc2.fillStyle = "purple";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(440, 255)

        crc2.fillStyle = "brown";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(40, 40);
        crc2.lineTo(40, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(20, 20)

        crc2.fillStyle = "orange";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();


        crc2.resetTransform();
        crc2.save();
        crc2.translate(120, 20)

        crc2.fillStyle = "red";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(220, 20)

        crc2.fillStyle = "greenyellow";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(320, 20)

        crc2.fillStyle = "purple";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        crc2.resetTransform();
        crc2.save();
        crc2.translate(420, 20)

        crc2.fillStyle = "brown";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 80);
        crc2.lineTo(80, 80);
        crc2.lineTo(80, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.restore();



        // Kasse:

        crc2.resetTransform();
        crc2.save();
        crc2.translate(550, 255)

        crc2.fillStyle = "gold";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 40);
        crc2.lineTo(80, 40);
        crc2.lineTo(80, 0);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -15);
        crc2.lineTo(30, -15);
        crc2.lineTo(30, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        crc2.restore();
    }


    function refill(): void {
        console.log("worker is going to refill stock");
    }

    function drawCostumer(_amount: number): void {
       

        for (let index = 0; index < _amount; index++) {      //solange index kleiner als anzahl costumer ist soll ein neuer costumer erstellt werden
            let randomX: number = Math.random() * 300 + Math.random() * 300 + 80;
            let customer: Human = new Costumer(1, 500, 500);
            customer.draw();
            customers.push(customer);
            console.log(index + " customers erstellt");
            console.log("c position = " + customer.position);
        }



    }
}

