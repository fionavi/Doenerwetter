namespace Doener {
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;


    let workers: Worker[] = [];
    let customers: Costumer[] = [];
    let orders: Storage[] = [];
    let ordersMade: Storage[] = [];


    let currentOrder: Storage = {
        bread: 0,
        tomato: 0,
        lettuce: 0,
        onion: 0,
        meat: 0,
    };


    export interface Vector {
        x: number;
        y: number;
    }

    // export interface Orders {
    //     order: Storage;
    //     nextOrder: Storage
    // }

    window.addEventListener("load", handleload);
    document.querySelector("#start").addEventListener("click", startGame);


    let currentCostumerAmount: number = 0;
    console.log(currentCostumerAmount);


    export interface Storage {
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
        // console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        // console.log(crc2);
        document.querySelector("#start").addEventListener("click", startGame);


        drawBackground();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);





    }





    function startGame(): void {

        console.log("START");
        document.querySelector("#addB").addEventListener("click", addBread);
        document.querySelector("#addT").addEventListener("click", addTomato);
        document.querySelector("#addL").addEventListener("click", addLettuce);
        document.querySelector("#addO").addEventListener("click", addOnion);
        document.querySelector("#addM").addEventListener("click", addMeat);
        document.querySelector("#pay").addEventListener("click", cashUpOrder);


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




        workers = [];
        customers = [];
        orders = [];
        ordersMade = [];

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
        // console.log("Stock Amount: " + stock);

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

        // console.log("Onion bread: " + storageLeft.bread);

        const stressLevel = data.get('stressLevel') as string;    //form Data stressLevel of worker als string holen
        // console.log("Stresslevel Worker: " + stressLevel);



        const amountWorker = data.get('amountWorker') as string;    //form Data anzahl worker als string holen
        // console.log("Anzahl Worker: " + amountWorker);
        let amount: number = parseInt(amountWorker);    //string in number parsen
        // let worker: Human = new Worker(300, 300);

        // console.log("Aufruf");
        for (let index = 0; index < amount; index++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX: number = Math.random() * 300 + Math.random() * 300 + 50;
            let worker: Human = new Worker(1, randomX, 200);
            worker.draw();
            worker.feel("tired");
            workers.push(worker);
            //window.setInterval(update, 20);

            // console.log(1 + index + " workers erstellt");
            // console.log(worker.position);

        }

        const amountCostumer = data.get('amountCostumer') as string;    //form Data anzahl worker als string holen
        // console.log("Anzahl Costumer per min: " + amountCostumer);
        let amountC: number = parseInt(amountCostumer);

        for (let index = 0; index < amountC; index++) {      //solange index kleiner als anzahl costumer ist soll ein neuer costumer erstellt werden
            // window.setInterval(function() {}, 5000);
            setTimeout(() => {

                createCostumer();
            }, 2000);
            // Math.floor(Math.random() * (60000 - 1000 + 1)) + 1000           
        }

        /* orderInTheMaking();
        console.log("oder in the making aufruf");
 */

        //return false; // prevent reload // Quelle: https://dev.to/deciduously/formdata-in-typescript-24cl
    }

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
        console.log("rechnung Storage /1000 " + storageLeft.lettuce / 1000)


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
        console.log(storageLeft.meat);

    }

    function buyBread(): void {
        let stockMeterB: any = document.querySelector('#stockMeterB').getAttribute("value");
        let amountMissing: number = 1000 - stockMeterB * 1000;
        storageLeft.bread += amountMissing;
        earnings -= amountMissing / 100 * 0.5;
        earnings * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("STRING: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let b: any = document.querySelector('#stockMeterB');
        b.setAttribute("value", 1);
    }

    function buyTomato(): void {
        let stockMeterT: any = document.querySelector('#stockMeterT').getAttribute("value");
        let amountMissing: number = 1000 - stockMeterT * 1000;
        storageLeft.tomato += amountMissing;
        earnings -= amountMissing / 50 * 0.5;
        earnings * Math.floor(2);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("STRING: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let t: any = document.querySelector('#stockMeterT');
        t.setAttribute("value", 1);
    }

    function buyLettuce(): void {
        let stockMeterL: any = document.querySelector('#stockMeterL').getAttribute("value");
        let amountMissing: number = 1000 - stockMeterL * 1000;
        storageLeft.lettuce += amountMissing;
        earnings -= amountMissing / 100 * 0.5;
        earnings * Math.floor(2);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("STRING: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let l: any = document.querySelector('#stockMeterL');
        l.setAttribute("value", 1);
    }

    function buyOnion(): void {
        let stockMeterO: any = document.querySelector('#stockMeterO').getAttribute("value");
        let amountMissing: number = 1000 - stockMeterO * 1000;
        storageLeft.onion += amountMissing;
        earnings -= amountMissing / 100 * 0.5;
        earnings * Math.floor(2);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("STRING: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let o: any = document.querySelector('#stockMeterO');
        o.setAttribute("value", 1);
    }

    function buyMeat(): void {
        let stockMeterL: any = document.querySelector('#stockMeterM').getAttribute("value");
        let amountMissing: number = 1000 - stockMeterL * 1000;
        storageLeft.meat += amountMissing;
        earnings -= amountMissing / 25 * 0.5;
        earnings * Math.floor(2);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("STRING: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let m: any = document.querySelector('#stockMeterM');
        m.setAttribute("value", 1);
    }

    function createCostumer(): any {

        // console.log('new customer created'); 
        let customer: Costumer = new Costumer(1, 830, 380);
        orders.push(customer.myOrder)
        customer.draw();
        customers.push(customer);
        customer.move(1 / 50);

        console.log(" Order of Customer: ")
        console.log(customer.myOrder);
        //console.log(1 + index + " customers erstellt");
        // console.log("c position = " + customer.position.x + " and " + customer.position.y);

    }





    function addBread(): any {
        console.log("bread was clicked");
        currentOrder.bread++;
        counterLeft.bread -= 10;
        let meter: any = document.querySelector('#meterB')
        meter.setAttribute("value", counterLeft.bread /100);
       /*  console.log("bread was added");
        console.log("current order is: ");
        console.log(currentOrder) */;

        if (counterLeft.bread <= 0) {

            alert("refill bread!")
        }
    }

    function addTomato(): any {
        currentOrder.tomato++;
        counterLeft.tomato -= 10;
        let meter: any = document.querySelector('#meterT')
        meter.setAttribute("value", counterLeft.tomato /100);
      /*   console.log("tomato was added");
        console.log("current order is: ");
        console.log(currentOrder); */

        if (counterLeft.tomato <= 0) {

            alert("refill tomatos!")
        }
    }
    function addLettuce(): any {
        currentOrder.lettuce++;
        counterLeft.lettuce -= 10;
        let meter: any = document.querySelector('#meterL')
        meter.setAttribute("value", counterLeft.lettuce /100);
       /*  console.log("lettuce was added");
        console.log("current order is: ");
        console.log(currentOrder); */
        
        if (counterLeft.lettuce <= 0) {

            alert("refill lettuce!")
        }
    }

    function addOnion(): any {
        currentOrder.onion++;
        counterLeft.onion -= 10;
        let meter: any = document.querySelector('#meterO')
        meter.setAttribute("value", counterLeft.onion /100);
       /*  console.log("onion was added");
        console.log("current order is: ");
        console.log(currentOrder); */

        if (counterLeft.onion <= 0) {

            alert("refill onion!")
        }
    }

    function addMeat(): any {
        currentOrder.meat++;
        counterLeft.meat -= 10;
        let meter: any = document.querySelector('#meterM')
        meter.setAttribute("value", counterLeft.meat /100);
      /*   console.log("meat was added");
        console.log("current order is: ");
        console.log(currentOrder); */

        if (counterLeft.meat <= 0) {

            alert("refill meat!")
        }
    }

    function cashUpOrder(): any {

        ordersMade.push(currentOrder);
        console.log(currentOrder);

        if (ordersMade[0] == orders[0]) {
            customers[0].feel("happy");
            console.log(ordersMade[0]);
            console.log("order was right");

        } else {
            customers[0].feel("sad");
            console.log("order was wrong");
            console.log(ordersMade[0]);
        }
    }

    function update(): void {
        // console.log("Update");
        crc2.putImageData(imgData, 1, 1);

        for (let worker of workers) {
            worker.move(1 / 50);
            worker.draw();
            worker.feel("neutral");
        }


        for (let customer of customers) {
            customer.move(1 / 50);
            customer.draw();
            customer.feel("sad");
            // console.log("update c");
        }




    }
}

