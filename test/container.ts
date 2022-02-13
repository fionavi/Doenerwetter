
namespace DoenerTest {

    export function listenToButtons(): void {

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
    }


    export function refillBread(): void {
        console.log("worker is going to refill bread");

        /* let x: number = 100;
        let y: number = 100; */
        //debugger;
        //window.setInterval(walkThere(100, 100), 20);

        let meterB: any = document.querySelector("#meterB").getAttribute("value");
        let amountMissing: number = 100 - meterB * 100;
        storageLeft.bread -= amountMissing;
        let meterStockB: any = document.querySelector("#stockMeterB");
        meterStockB.setAttribute("value", storageLeft.bread / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
        /*  _x = 200;
         _y = 100;
         workers[0].move(1 / 50, _x, _y);
         update(_x, _y); */
        // if workers position is in front of container:
        //setTimeout(bringBread, 5000);
        let meter: any = document.querySelector("#meterB");
        counterLeft.bread = 100;
        meter.setAttribute("value", 1);
        walkThere(100, 100);
    }

    export function walkThere(_x: number, _y: number): any {
        crc2.putImageData(imgData, 1, 1);
        // walk to bread stock
        // let i: number = 0;
        //    // debugger;
        //     for (workers[0].position.x  != _x || workers[0].position.y  != _y;  ;) {
        //     workers[0].move(1, _x, _y);
        //     //workers[0].draw();
        //     console.log("walkThere aufruf " + i);
        //     console.log("current position of worker: " + workers[0].position.x + workers[0].position.y);
        //     // worker.feel(moodWorker);
        //     }
        /*   for (workers[0].position.x != _x || workers[0].position.y != _y; i++;) {
              debugger
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
              console.log("walkThere aufruf " + i);
              workers[0].move(1, workers[0].position.x, workers[0].position.y);
          } */
        //debugger;
        for (workers[0].position.x < _x; workers[0].position.x++;) {
            crc2.putImageData(imgData, 1, 1);
            console.log("worker moved x++ to " + workers[0].position.x + workers[0].position.y );
            workers[0].move(1, workers[0].position.x, workers[0].position.y);
            workers[0].draw();
        }
        for (workers[0].position.x > _x; workers[0].position.x--;) {
            crc2.putImageData(imgData, 1, 1);
            console.log("worker moved x--");
            workers[0].move(1, workers[0].position.x, workers[0].position.y);
            workers[0].draw();

        }
        for (workers[0].position.y < _y; workers[0].position.y++;) {
            crc2.putImageData(imgData, 1, 1);
            console.log("worker moved y++");
            workers[0].move(1, workers[0].position.x, workers[0].position.y);
            workers[0].draw();

        }
        for (workers[0].position.y > _y; workers[0].position.y--;) {
            crc2.putImageData(imgData, 1, 1);
            console.log("worker moved y--");
            workers[0].move(1, workers[0].position.x, workers[0].position.y);
            workers[0].draw();
        }

    }




    export function refillTomato(): void {
        console.log("worker is going to refill tomato");

        let meterT: any = document.querySelector("#meterT").getAttribute("value");
        let amountMissing: number = 100 - meterT * 100;
        storageLeft.tomato -= amountMissing;
        let meterStockT: any = document.querySelector("#stockMeterT");
        meterStockT.setAttribute("value", storageLeft.tomato / 1000);

        let meter: any = document.querySelector("#meterT");
        counterLeft.tomato = 100;
        meter.setAttribute("value", 1);
    }

    export function refillLettuce(): void {
        console.log("worker is going to refill lettuce");


        let meterL: any = document.querySelector("#meterL").getAttribute("value");
        let amountMissing: number = 100 - meterL * 100;
        storageLeft.lettuce -= amountMissing;
        let meterStockL: any = document.querySelector("#stockMeterL");
        meterStockL.setAttribute("value", storageLeft.lettuce / 1000);

        let meter: any = document.querySelector("#meterL");
        counterLeft.lettuce = 100;
        meter.setAttribute("value", 1);
    }

    export function refillOnion(): void {
        console.log("worker is going to refill bread");

        let meterO: any = document.querySelector("#meterO").getAttribute("value");
        let amountMissing: number = 100 - meterO * 100;
        storageLeft.onion -= amountMissing;
        let meterStockO: any = document.querySelector("#stockMeterO");
        meterStockO.setAttribute("value", storageLeft.onion / 1000);

        let meter: any = document.querySelector("#meterO");
        counterLeft.onion = 100;
        meter.setAttribute("value", 1);
    }

    export function refillMeat(): void {
        console.log("worker is going to refill meat");

        let meterM: any = document.querySelector("#meterM").getAttribute("value");
        let amountMissing: number = 100 - meterM * 100;
        storageLeft.meat -= amountMissing;
        let meterStockM: any = document.querySelector("#stockMeterM");
        meterStockM.setAttribute("value", storageLeft.meat / 1000);

        let meter: any = document.querySelector("#meterM");
        meter.setAttribute("value", 1);
        console.log(storageLeft.meat);
    }

    export function buyBread(): void {
        let stockMeterB: any = document.querySelector("#stockMeterB").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterB * 1000;
        storageLeft.bread += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let b: any = document.querySelector("#stockMeterB");
        b.setAttribute("value", 1);
    }

    export function buyTomato(): void {
        let stockMeterT: any = document.querySelector("#stockMeterT").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterT * 1000;
        storageLeft.tomato += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let t: any = document.querySelector("#stockMeterT");
        t.setAttribute("value", 1);
    }

    export function buyLettuce(): void {
        let stockMeterL: any = document.querySelector("#stockMeterL").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterL * 1000;
        storageLeft.lettuce += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let l: any = document.querySelector("#stockMeterL");
        l.setAttribute("value", 1);
    }

    export function buyOnion(): void {
        let stockMeterO: any = document.querySelector("#stockMeterO").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterO * 1000;
        storageLeft.onion += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let o: any = document.querySelector("#stockMeterO");
        o.setAttribute("value", 1);
    }

    export function buyMeat(): void {
        let stockMeterL: any = document.querySelector("#stockMeterM").getAttribute("value");
        let amountMissing: number = 1000 - stockMeterL * 1000;
        storageLeft.meat += amountMissing;
        earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings: any = document.getElementById("earnings");
        console.log("Kasse: " + earnings.toString());
        displayEarnings.innerText = earnings.toString() + " €";
        let m: any = document.querySelector("#stockMeterM");
        m.setAttribute("value", 1);
    }


}        