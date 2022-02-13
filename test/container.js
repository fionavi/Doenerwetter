"use strict";
var DoenerTest;
(function (DoenerTest) {
    function listenToButtons() {
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
    DoenerTest.listenToButtons = listenToButtons;
    function refillBread() {
        console.log("worker is going to refill bread");
        /* let x: number = 100;
        let y: number = 100; */
        //debugger;
        //window.setInterval(walkThere(100, 100), 20);
        let meterB = document.querySelector("#meterB").getAttribute("value");
        let amountMissing = 100 - meterB * 100;
        DoenerTest.storageLeft.bread -= amountMissing;
        let meterStockB = document.querySelector("#stockMeterB");
        meterStockB.setAttribute("value", DoenerTest.storageLeft.bread / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
        /*  _x = 200;
         _y = 100;
         workers[0].move(1 / 50, _x, _y);
         update(_x, _y); */
        // if workers position is in front of container:
        //setTimeout(bringBread, 5000);
        let meter = document.querySelector("#meterB");
        DoenerTest.counterLeft.bread = 100;
        meter.setAttribute("value", 1);
        walkThere(100, 100);
    }
    DoenerTest.refillBread = refillBread;
    function walkThere(_x, _y) {
        DoenerTest.crc2.putImageData(DoenerTest.imgData, 1, 1);
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
        for (DoenerTest.workers[0].position.x < _x; DoenerTest.workers[0].position.x++;) {
            DoenerTest.crc2.putImageData(DoenerTest.imgData, 1, 1);
            console.log("worker moved x++ to " + DoenerTest.workers[0].position.x + DoenerTest.workers[0].position.y);
            DoenerTest.workers[0].move(1, DoenerTest.workers[0].position.x, DoenerTest.workers[0].position.y);
            DoenerTest.workers[0].draw();
        }
        for (DoenerTest.workers[0].position.x > _x; DoenerTest.workers[0].position.x--;) {
            DoenerTest.crc2.putImageData(DoenerTest.imgData, 1, 1);
            console.log("worker moved x--");
            DoenerTest.workers[0].move(1, DoenerTest.workers[0].position.x, DoenerTest.workers[0].position.y);
            DoenerTest.workers[0].draw();
        }
        for (DoenerTest.workers[0].position.y < _y; DoenerTest.workers[0].position.y++;) {
            DoenerTest.crc2.putImageData(DoenerTest.imgData, 1, 1);
            console.log("worker moved y++");
            DoenerTest.workers[0].move(1, DoenerTest.workers[0].position.x, DoenerTest.workers[0].position.y);
            DoenerTest.workers[0].draw();
        }
        for (DoenerTest.workers[0].position.y > _y; DoenerTest.workers[0].position.y--;) {
            DoenerTest.crc2.putImageData(DoenerTest.imgData, 1, 1);
            console.log("worker moved y--");
            DoenerTest.workers[0].move(1, DoenerTest.workers[0].position.x, DoenerTest.workers[0].position.y);
            DoenerTest.workers[0].draw();
        }
    }
    DoenerTest.walkThere = walkThere;
    function refillTomato() {
        console.log("worker is going to refill tomato");
        let meterT = document.querySelector("#meterT").getAttribute("value");
        let amountMissing = 100 - meterT * 100;
        DoenerTest.storageLeft.tomato -= amountMissing;
        let meterStockT = document.querySelector("#stockMeterT");
        meterStockT.setAttribute("value", DoenerTest.storageLeft.tomato / 1000);
        let meter = document.querySelector("#meterT");
        DoenerTest.counterLeft.tomato = 100;
        meter.setAttribute("value", 1);
    }
    DoenerTest.refillTomato = refillTomato;
    function refillLettuce() {
        console.log("worker is going to refill lettuce");
        let meterL = document.querySelector("#meterL").getAttribute("value");
        let amountMissing = 100 - meterL * 100;
        DoenerTest.storageLeft.lettuce -= amountMissing;
        let meterStockL = document.querySelector("#stockMeterL");
        meterStockL.setAttribute("value", DoenerTest.storageLeft.lettuce / 1000);
        let meter = document.querySelector("#meterL");
        DoenerTest.counterLeft.lettuce = 100;
        meter.setAttribute("value", 1);
    }
    DoenerTest.refillLettuce = refillLettuce;
    function refillOnion() {
        console.log("worker is going to refill bread");
        let meterO = document.querySelector("#meterO").getAttribute("value");
        let amountMissing = 100 - meterO * 100;
        DoenerTest.storageLeft.onion -= amountMissing;
        let meterStockO = document.querySelector("#stockMeterO");
        meterStockO.setAttribute("value", DoenerTest.storageLeft.onion / 1000);
        let meter = document.querySelector("#meterO");
        DoenerTest.counterLeft.onion = 100;
        meter.setAttribute("value", 1);
    }
    DoenerTest.refillOnion = refillOnion;
    function refillMeat() {
        console.log("worker is going to refill meat");
        let meterM = document.querySelector("#meterM").getAttribute("value");
        let amountMissing = 100 - meterM * 100;
        DoenerTest.storageLeft.meat -= amountMissing;
        let meterStockM = document.querySelector("#stockMeterM");
        meterStockM.setAttribute("value", DoenerTest.storageLeft.meat / 1000);
        let meter = document.querySelector("#meterM");
        meter.setAttribute("value", 1);
        console.log(DoenerTest.storageLeft.meat);
    }
    DoenerTest.refillMeat = refillMeat;
    function buyBread() {
        let stockMeterB = document.querySelector("#stockMeterB").getAttribute("value");
        let amountMissing = 1000 - stockMeterB * 1000;
        DoenerTest.storageLeft.bread += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let b = document.querySelector("#stockMeterB");
        b.setAttribute("value", 1);
    }
    DoenerTest.buyBread = buyBread;
    function buyTomato() {
        let stockMeterT = document.querySelector("#stockMeterT").getAttribute("value");
        let amountMissing = 1000 - stockMeterT * 1000;
        DoenerTest.storageLeft.tomato += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let t = document.querySelector("#stockMeterT");
        t.setAttribute("value", 1);
    }
    DoenerTest.buyTomato = buyTomato;
    function buyLettuce() {
        let stockMeterL = document.querySelector("#stockMeterL").getAttribute("value");
        let amountMissing = 1000 - stockMeterL * 1000;
        DoenerTest.storageLeft.lettuce += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let l = document.querySelector("#stockMeterL");
        l.setAttribute("value", 1);
    }
    DoenerTest.buyLettuce = buyLettuce;
    function buyOnion() {
        let stockMeterO = document.querySelector("#stockMeterO").getAttribute("value");
        let amountMissing = 1000 - stockMeterO * 1000;
        DoenerTest.storageLeft.onion += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let o = document.querySelector("#stockMeterO");
        o.setAttribute("value", 1);
    }
    DoenerTest.buyOnion = buyOnion;
    function buyMeat() {
        let stockMeterL = document.querySelector("#stockMeterM").getAttribute("value");
        let amountMissing = 1000 - stockMeterL * 1000;
        DoenerTest.storageLeft.meat += amountMissing;
        DoenerTest.earnings -= amountMissing / 100 * 0.5 * Math.floor(1);
        let displayEarnings = document.getElementById("earnings");
        console.log("Kasse: " + DoenerTest.earnings.toString());
        displayEarnings.innerText = DoenerTest.earnings.toString() + " €";
        let m = document.querySelector("#stockMeterM");
        m.setAttribute("value", 1);
    }
    DoenerTest.buyMeat = buyMeat;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=container.js.map