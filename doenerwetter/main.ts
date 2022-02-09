namespace Doener {
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;


    let workers: Worker[] = [];
    let customers: Costumer[] = [];

    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleload);
    document.querySelector("#start").addEventListener("click", startGame);


    document.querySelector("#buyBread").addEventListener("click", buyBread);
    document.querySelector("#buyTomato").addEventListener("click", buyTomato);
    document.querySelector("#buyLettuce").addEventListener("click", buyLettuce);
    document.querySelector("#buyOnion").addEventListener("click", buyOnion);
    document.querySelector("#buyMeat").addEventListener("click", buyMeat);

    document.querySelector("#refillBread").addEventListener("click", refillBread);
    document.querySelector("#refillTomato").addEventListener("click", refillTomato);
    document.querySelector("#refillLettuce").addEventListener("click", refillLettuce);
    document.querySelector("#refillOnion").addEventListener("click", refillOnion);
    document.querySelector("#refillMeat").addEventListener("click", refillMeat);


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
        bread: 1000,
        tomato: 1000,
        lettuce: 1000,
        onion: 1000,
        meat: 1000,
    };

    interface Counter {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    let counterLeft: Counter = {
        bread: 80,
        tomato: 80,
        lettuce: 80,
        onion: 80,
        meat: 80,
    };

    let earnings: number = 0;



    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);

        
        
        drawBackground();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);


    }

    function startGame(): void {
        console.log("START");
        workers = [];
        customers = [];

        counterLeft.bread = 80;
        counterLeft.tomato = 80;
        counterLeft.lettuce = 80;
        counterLeft.onion = 80;
        counterLeft.meat = 80;


        const form = document.querySelector('form')!;
        const data = new FormData(form);
        const amountStock = data.get('amountIngredients') as string;
        let stock: number = parseInt(amountStock + Math.floor);    //string in number parsen
        storageLeft.bread = storageLeft.tomato = storageLeft.lettuce = storageLeft.onion = storageLeft.meat = stock;
        console.log("Stock Amount: " + stock);

        //chart in bread stock div soll angepasst werden
        let meterB: any = document.querySelector('#stockMeterB');
        meterB.setAttribute("value", stock / 100);
        storageLeft.bread = 10 * stock;
        let meterT: any = document.querySelector('#stockMeterT');
        meterT.setAttribute("value", stock / 100);
        storageLeft.tomato = 10 * stock;
        let meterL: any = document.querySelector('#stockMeterL');
        meterL.setAttribute("value", stock / 100);
        storageLeft.lettuce = 10 * stock;
        let meterO: any = document.querySelector('#stockMeterO');
        meterO.setAttribute("value", stock / 100);
        storageLeft.onion = 10 * stock;
        let meterM: any = document.querySelector('#stockMeterM');
        meterM.setAttribute("value", stock / 100);
        storageLeft.meat = 10 * stock;

        console.log("Onion bread: " + storageLeft.bread);

        const stressLevel = data.get('stressLevel') as string;    //form Data stressLevel of worker als string holen
        console.log("Stresslevel Worker: " + stressLevel);



        const amountWorker = data.get('amountWorker') as string;    //form Data anzahl worker als string holen
        console.log("Anzahl Worker: " + amountWorker);
        let amount: number = parseInt(amountWorker);    //string in number parsen
        // let worker: Human = new Worker(300, 300);


        for (let index = 0; index < amount; index++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX: number = Math.random() * 300 + Math.random() * 300 + 50;
            let worker: Human = new Worker(1, randomX, 200);
            worker.draw();
            workers.push(worker);
            //window.setInterval(update, 20);

            console.log(1 + index + " workers erstellt");
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


    function refillBread(): void {
        console.log("worker is going to refill bread");
    
        //workers[0].move(3)      // walk to bread stock
        let meterB: any = document.querySelector('#meterB').getAttribute("value");
        let amountMissing: number = 100 - meterB * 100;
        //console.log("missing: " + amountMissing) 
       // console.log("before Storage " + storageLeft.bread)
        storageLeft.bread -= amountMissing;  
       // console.log("after Storage " + storageLeft.bread) 
        let meterStockB: any = document.querySelector('#stockMeterB');
        meterStockB.setAttribute("value", storageLeft.bread / 1000);  
       // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
     
       
                 // if workers position is in front of container:
        setTimeout(bringBread, 5000);
    }
    function bringBread(): void {
        console.log("worker is bringing bread to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.bread = 100;
        let meterB: any = document.querySelector('#meterB')
        meterB.setAttribute("value", 1);
        
    }

    function refillTomato(): void {
        console.log("worker is going to refill tomato");
    
        //workers[0].move(3)      // walk to bread stock
        let meterT: any = document.querySelector('#meterT').getAttribute("value");
        let amountMissing: number = 100 - meterT * 100;
        //console.log("missing: " + amountMissing) 
       // console.log("before Storage " + storageLeft.bread)
        storageLeft.tomato -= amountMissing;  
       // console.log("after Storage " + storageLeft.bread) 
        let meterStockT: any = document.querySelector('#stockMeterT');
        meterStockT.setAttribute("value", storageLeft.tomato / 1000);  
       // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
     
       
                 // if workers position is in front of container:
        setTimeout(bringTomato, 5000);
    }
    function bringTomato(): void {
        console.log("worker is bringing tomato to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.tomato = 100;
        let meterT: any = document.querySelector('#meterT')
        meterT.setAttribute("value", 1);
        
    }

    function refillLettuce(): void {
        console.log("worker is going to refill lettuce");
    
        //workers[0].move(3)      // walk to bread stock
        let meterL: any = document.querySelector('#meterL').getAttribute("value");
        let amountMissing: number = 100 - meterL * 100;
        console.log("missing: " + amountMissing) 
       console.log("before Storage " + storageLeft.lettuce)
        storageLeft.lettuce -= amountMissing;  
       console.log("after Storage " + storageLeft.lettuce) 
        let meterStockL: any = document.querySelector('#stockMeterL');
        meterStockL.setAttribute("value", storageLeft.lettuce / 1000);  
       console.log("rechnung Storage /1000 " + storageLeft.lettuce /1000) 
     
       
                 // if workers position is in front of container:
        setTimeout(bringLettuce, 5000);
    }
    function bringLettuce(): void {
        console.log("worker is bringing lettuce to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.lettuce = 100;
        let meterL: any = document.querySelector('#meterL')
        meterL.setAttribute("value", 1);
        
    }

    function refillOnion(): void {
        console.log("worker is going to refill bread");
    
        //workers[0].move(3)      // walk to bread stock
        let meterO: any = document.querySelector('#meterO').getAttribute("value");
        let amountMissing: number = 100 - meterO * 100;
        //console.log("missing: " + amountMissing) 
       // console.log("before Storage " + storageLeft.bread)
        storageLeft.onion -= amountMissing;  
       // console.log("after Storage " + storageLeft.bread) 
        let meterStockO: any = document.querySelector('#stockMeterO');
        meterStockO.setAttribute("value", storageLeft.onion / 1000);  
       // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
     
       
                 // if workers position is in front of container:
        setTimeout(bringOnion, 5000);
    }
    function bringOnion(): void {
        console.log("worker is bringing onion to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.onion = 100;
        let meterO: any = document.querySelector('#meterO')
        meterO.setAttribute("value", 1);
    }

    function refillMeat(): void {
        console.log("worker is going to refill meat");
    
        //workers[0].move(3)      // walk to bread stock
        let meterM: any = document.querySelector('#meterM').getAttribute("value");
        let amountMissing: number = 100 - meterM * 100;
        //console.log("missing: " + amountMissing) 
       // console.log("before Storage " + storageLeft.bread)
        storageLeft.meat -= amountMissing;  
       // console.log("after Storage " + storageLeft.bread) 
        let meterStockM: any = document.querySelector('#stockMeterM');
        meterStockM.setAttribute("value", storageLeft.meat / 1000);  
       // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
     
       
                 // if workers position is in front of container:
        setTimeout(bringMeat, 5000);
    }
    function bringMeat(): void {
        console.log("worker is bringing meat to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.meat = 100;
        let meterM: any = document.querySelector('#meterM')
        meterM.setAttribute("value", 1);
        
    }

    function buyBread(): void {
        let stockMeterB: any = document.querySelector('#stockMeterB').getAttribute("value");
        let amountMissing: number = 1000 - stockMeterB *1000;
        storageLeft.bread += amountMissing;  
        earnings -= amountMissing * 0.3;
        let displayEarnings = document.getElementById("#earnings");
        displayEarnings.innerHTML = earnings;
    }




    function drawCostumer(_amountC: number): void {


        for (let index = 0; index < _amountC; index++) {      //solange index kleiner als anzahl costumer ist soll ein neuer costumer erstellt werden

            let customer: Human = new Costumer(1, 810, 380);
            customer.draw();
            customers.push(customer);
            console.log(1 + index + " customers erstellt");
            console.log("c position = " + customer.position.x + " and " + customer.position.y);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.putImageData(imgData, 1, 1);

        for (let worker of workers) {
            worker.move(1 / 50);
            worker.draw();
        }

        
        for (let customer of customers) {
            customer.move(1 / 50);
            customer.draw();
            console.log("update c");
        }




    }
}

