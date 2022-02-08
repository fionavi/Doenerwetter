namespace Doener {
    export let crc2: CanvasRenderingContext2D;

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleload);
    document.querySelector("#start").addEventListener("click", startGame);


    let currentCostumerAmount: number = 0;
    console.log(currentCostumerAmount);

    let breadStock: number = 80;
    let tomatoStock: number = 80;
    let lettuceStock: number = 80;
    let onionStock: number = 80;
    let meatStock: number = 80;

    let breadCounter: number = 50;
    let tomatoCounter: number = 50;
    let lettuceCounter: number = 50;
    let onionCounter: number = 50;
    let meatCounter: number = 50;






    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);


        drawBackground();
        /*   drawWorker({ x: 100, y: 100 });
          drawCostumer(); */


    }

    function startGame(): void {
        console.log("START");

        const form = document.querySelector('form')!;
        const data = new FormData(form);
        const amountStock = data.get('amountIngredients') as string;
        let stock: number = parseInt(amountStock);    //string in number parsen
        breadStock = tomatoStock = lettuceStock = onionStock = meatStock = stock;
        console.log("Stock Amount: " + breadStock + " bzw. " + amountStock);
       
        //chart in bread stock div soll angepasst werden
        const displayStockBread: any = document.getElementsByClassName('.breadStockChart');
        displayStockBread.getAttribute('height');
        displayStockBread.setAttribute('height', amountStock);
    
        console.log("Bread Amount: " + breadStock + " bzw. " + amountStock);



        const amountWorker = data.get('amountWorker') as string;    //form Data anzahl worker als string holen
        console.log("Anzahl Worker: " + amountWorker);
        const stressLevel = data.get('stressLevel') as string;    //form Data anzahl worker als string holen
        console.log("Stresslevel Worker: " + stressLevel);
        
        // createWorker(amountWorker);
        let amount: number = parseInt(amountWorker);    //string in number parsen
        let worker: Human = new Worker(300, 300);
        worker;
        for (let index = 0; index < amount; index++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let worker: Human = new Worker(300, 300);
            console.log(index + "workers erstellt");
            console.log(worker.position);
 
    }

        const amountCostumer = data.get('amountCostumer') as string;    //form Data anzahl worker als string holen
        console.log("Anzahl Costumer per min: " + amountCostumer);



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

    function createWorker(_amountWorker: string): void {
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


    function drawCostumer(): void {

    }
}