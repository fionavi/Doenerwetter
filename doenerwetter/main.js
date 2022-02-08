"use strict";
var Doener;
(function (Doener) {
    window.addEventListener("load", handleload);
    document.querySelector("#start").addEventListener("click", startGame);
    let currentCostumerAmount = 0;
    console.log(currentCostumerAmount);
    let breadStock = 80;
    let tomatoStock = 80;
    let lettuceStock = 80;
    let onionStock = 80;
    let meatStock = 80;
    let breadCounter = 50;
    let tomatoCounter = 50;
    let lettuceCounter = 50;
    let onionCounter = 50;
    let meatCounter = 50;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        Doener.crc2 = canvas.getContext("2d");
        console.log(Doener.crc2);
        drawBackground();
        /*   drawWorker({ x: 100, y: 100 });
          drawCostumer(); */
    }
    function startGame() {
        console.log("START");
        const form = document.querySelector('form');
        const data = new FormData(form);
        const amountStock = data.get('amountIngredients');
        let stock = parseInt(amountStock); //string in number parsen
        breadStock = tomatoStock = lettuceStock = onionStock = meatStock = stock;
        console.log("Stock Amount: " + breadStock + " bzw. " + amountStock);
        //chart in bread stock div soll angepasst werden
        const displayStockBread = document.getElementsByClassName('.breadStockChart');
        displayStockBread.getAttribute('height');
        displayStockBread.setAttribute('height', amountStock);
        console.log("Bread Amount: " + breadStock + " bzw. " + amountStock);
        const amountWorker = data.get('amountWorker'); //form Data anzahl worker als string holen
        console.log("Anzahl Worker: " + amountWorker);
        const stressLevel = data.get('stressLevel'); //form Data anzahl worker als string holen
        console.log("Stresslevel Worker: " + stressLevel);
        // createWorker(amountWorker);
        let amount = parseInt(amountWorker); //string in number parsen
        let worker = new Doener.Worker(300, 300);
        worker;
        for (let index = 0; index < amount; index++) { //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let worker = new Doener.Worker(300, 300);
            console.log(index + "workers erstellt");
            console.log(worker.position);
        }
        const amountCostumer = data.get('amountCostumer'); //form Data anzahl worker als string holen
        console.log("Anzahl Costumer per min: " + amountCostumer);
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
    function createWorker(_amountWorker) {
        /*
           let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
           console.log(inputs);
     
           let formData2: FormData = new FormData(document.forms[0]);           //Formular (<form> - Tag) -> 0 ist falls es mehrere gibt, dass es 1. Formular wählt, alle Inhalte aus Formular werden ausgewählt
           for (let entry of formData2) {                   // solange Einträge im Formular
               //debugger;
               let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); //item mitsamt Infos wird aufgegriffen bzw selektiert
               //let stepper: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[0] + "']");
     
               if (item != null && item.type == "checkbox") {
                   // let mengenangabe: string = document.getElementById(item.name + "_anzahl").getAttribute("mengenangabe")!; //Attribut mengenangabe vom elemnet mit id _anzahl wird aufgegriffen
                   let price: number = parseInt(item.getAttribute("price")!);                                                  //string zu number geparsed, Attribute price wird rausgegriffen         price * parseInt(item.getElementById(item.name + "_anzahl").getAttribute("value")!)   geht nicht
                   console.log((<HTMLInputElement>document.getElementById(item.id + "_stepper")).value);
                   anweisung.innerHTML += "Füge " + (<HTMLInputElement>document.getElementById(item.id + "_stepper")).value + (<HTMLInputElement>document.getElementById(item.name)).value + " " + item.value + " hinzu" + " (" + price + "Galleonen)" + "<br>"; // schreibt in Rezept den Wert des Attributs mit id anzahl + mengenangabe + preis
                   /* console.log((<HTMLInputElement>document.getElementById(item.getAttribute("id") + "_anzahl")).value);
                   console.log(document.getElementById(item.name + "_anzahl"));
               } */
    }
    function drawCostumer() {
    }
})(Doener || (Doener = {}));
//# sourceMappingURL=main.js.map