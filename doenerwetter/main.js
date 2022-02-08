"use strict";
var Doener;
(function (Doener) {
    let workers = [];
    let customers = [];
    window.addEventListener("load", handleload);
    document.querySelector("#start").addEventListener("click", startGame);
    document.querySelector("#refillBread").addEventListener("click", refill);
    document.querySelector("#refillTomato").addEventListener("click", refill);
    document.querySelector("#refillLettuce").addEventListener("click", refill);
    document.querySelector("#refillOnion").addEventListener("click", refill);
    document.querySelector("#refillMeat").addEventListener("click", refill);
    let currentCostumerAmount = 0;
    console.log(currentCostumerAmount);
    let storageLeft = {
        bread: 50,
        tomato: 50,
        lettuce: 50,
        onion: 50,
        meat: 50,
    };
    let counterLeft = {
        bread: 100,
        tomato: 100,
        lettuce: 100,
        onion: 100,
        meat: 100,
    };
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        Doener.crc2 = canvas.getContext("2d");
        console.log(Doener.crc2);
        drawBackground();
    }
    function startGame() {
        console.log("START");
        counterLeft.bread = 100;
        counterLeft.tomato = 100;
        counterLeft.lettuce = 100;
        counterLeft.onion = 100;
        counterLeft.meat = 100;
        const form = document.querySelector('form');
        const data = new FormData(form);
        const amountStock = data.get('amountIngredients');
        let stock = parseInt(amountStock); //string in number parsen
        storageLeft.bread = storageLeft.tomato = storageLeft.lettuce = storageLeft.onion = storageLeft.meat = stock;
        console.log("Stock Amount: " + amountStock);
        //chart in bread stock div soll angepasst werden
        let chart = document.querySelector('.onionStockChart');
        let displayStockOnion = chart.getAttribute('style');
        //displayStockOnion.innerHTML = "height" + stock + 'px';
        displayStockOnion.innerHTML = "height" + amountStock + 'px';
        console.log("Chart Height: " + amountStock);
        console.log("Onion Amount: " + storageLeft.onion + " bzw. " + amountStock);
        const stressLevel = data.get('stressLevel'); //form Data stressLevel of worker als string holen
        console.log("Stresslevel Worker: " + stressLevel);
        const amountWorker = data.get('amountWorker'); //form Data anzahl worker als string holen
        console.log("Anzahl Worker: " + amountWorker);
        let amount = parseInt(amountWorker); //string in number parsen
        // let worker: Human = new Worker(300, 300);
        console.log(workers[0]);
        for (let index = 0; index < amount; index++) { //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX = Math.random() * 300 + Math.random() * 300 + 80;
            let worker = new Doener.Worker(1, randomX, 200);
            worker.draw();
            workers.push(worker);
            console.log(index + " workers erstellt");
            console.log(worker.position);
        }
        const amountCostumer = data.get('amountCostumer'); //form Data anzahl worker als string holen
        console.log("Anzahl Costumer per min: " + amountCostumer);
        let amountC = parseInt(amountCostumer);
        drawCostumer(amountC);
        //return false; // prevent reload // Quelle: https://dev.to/deciduously/formdata-in-typescript-24cl
    }
    ;
    function drawBackground() {
        console.log("Background is drawing");
        Doener.crc2.fillStyle = "grey";
        Doener.crc2.fillRect(0, 0, Doener.crc2.canvas.width, Doener.crc2.canvas.height);
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(10, 10);
        Doener.crc2.fillStyle = "black";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 100);
        Doener.crc2.lineTo(700, 100);
        Doener.crc2.lineTo(700, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(100, 250);
        Doener.crc2.fillStyle = "black";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(550, 50);
        Doener.crc2.lineTo(0, 50);
        Doener.crc2.lineTo(0, 0);
        Doener.crc2.lineTo(550, 0);
        Doener.crc2.lineTo(550, 50);
        Doener.crc2.lineTo(550, 0);
        Doener.crc2.lineTo(550, -140);
        Doener.crc2.lineTo(610, -140);
        Doener.crc2.lineTo(610, 50);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(895, 395);
        Doener.crc2.strokeStyle = "black";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, -150);
        Doener.crc2.lineTo(-50, -180);
        Doener.crc2.lineTo(-50, -30);
        Doener.crc2.closePath();
        //crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(200, 255);
        Doener.crc2.fillStyle = "red";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 40);
        Doener.crc2.lineTo(40, 40);
        Doener.crc2.lineTo(40, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(120, 255);
        Doener.crc2.fillStyle = "orange";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 40);
        Doener.crc2.lineTo(40, 40);
        Doener.crc2.lineTo(40, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(280, 255);
        Doener.crc2.fillStyle = "greenyellow";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 40);
        Doener.crc2.lineTo(40, 40);
        Doener.crc2.lineTo(40, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(360, 255);
        Doener.crc2.fillStyle = "purple";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 40);
        Doener.crc2.lineTo(40, 40);
        Doener.crc2.lineTo(40, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(440, 255);
        Doener.crc2.fillStyle = "brown";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 40);
        Doener.crc2.lineTo(40, 40);
        Doener.crc2.lineTo(40, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(20, 20);
        Doener.crc2.fillStyle = "orange";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 80);
        Doener.crc2.lineTo(80, 80);
        Doener.crc2.lineTo(80, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(120, 20);
        Doener.crc2.fillStyle = "red";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 80);
        Doener.crc2.lineTo(80, 80);
        Doener.crc2.lineTo(80, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(220, 20);
        Doener.crc2.fillStyle = "greenyellow";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 80);
        Doener.crc2.lineTo(80, 80);
        Doener.crc2.lineTo(80, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(320, 20);
        Doener.crc2.fillStyle = "purple";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 80);
        Doener.crc2.lineTo(80, 80);
        Doener.crc2.lineTo(80, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(420, 20);
        Doener.crc2.fillStyle = "brown";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 80);
        Doener.crc2.lineTo(80, 80);
        Doener.crc2.lineTo(80, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
        // Kasse:
        Doener.crc2.resetTransform();
        Doener.crc2.save();
        Doener.crc2.translate(550, 255);
        Doener.crc2.fillStyle = "gold";
        Doener.crc2.save();
        Doener.crc2.beginPath();
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, 40);
        Doener.crc2.lineTo(80, 40);
        Doener.crc2.lineTo(80, 0);
        Doener.crc2.moveTo(0, 0);
        Doener.crc2.lineTo(0, -15);
        Doener.crc2.lineTo(30, -15);
        Doener.crc2.lineTo(30, 0);
        Doener.crc2.closePath();
        Doener.crc2.fill();
        Doener.crc2.stroke();
        Doener.crc2.restore();
    }
    function refill() {
        console.log("worker is going to refill stock");
    }
    function drawCostumer(_amount) {
        for (let index = 0; index < _amount; index++) { //solange index kleiner als anzahl costumer ist soll ein neuer costumer erstellt werden
            let randomX = Math.random() * 300 + Math.random() * 300 + 80;
            let customer = new Doener.Costumer(1, 500, 500);
            customer.draw();
            customers.push(customer);
            console.log(index + " customers erstellt");
            console.log("c position = " + customer.position);
        }
    }
})(Doener || (Doener = {}));
//# sourceMappingURL=main.js.map