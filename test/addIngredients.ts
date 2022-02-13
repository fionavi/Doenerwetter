namespace DoenerTest {

    export function listenToAddButtons(): void {
        document.querySelector("#addB").addEventListener("click", addBread);
        document.querySelector("#addT").addEventListener("click", addTomato);
        document.querySelector("#addL").addEventListener("click", addLettuce);
        document.querySelector("#addO").addEventListener("click", addOnion);
        document.querySelector("#addM").addEventListener("click", addMeat);
        document.querySelector("#pay").addEventListener("click", cashUpOrder);
    }

    export function addBread(): void {
        console.log("bread was clicked");
        currentOrder.bread++;
        counterLeft.bread -= 10;
        let meter: any = document.querySelector("#meterB");
        meter.setAttribute("value", counterLeft.bread / 100);
        /*  console.log("bread was added");
         console.log("current order is: ");
         console.log(currentOrder) */


        let displayBread: Prepared = new Prepared(1, 750, 180);
        displayBread.drawBread();
        drawOrders.push(displayBread);

        if (counterLeft.bread <= 0) {

            alert("refill bread!");
        }
    }

    export function addTomato(): void {
        currentOrder.tomato++;
        counterLeft.tomato -= 10;
        let meter: any = document.querySelector("#meterT");
        meter.setAttribute("value", counterLeft.tomato / 100);
       
        let displayIngredient: Prepared = new Prepared(1, 750, 180);
        displayIngredient.drawTomato();
        drawOrders.push(displayIngredient);

        if (counterLeft.tomato <= 0) {

            alert("refill tomatos!");
        }
        
    }
    export function addLettuce(): void {
        currentOrder.lettuce++;
        counterLeft.lettuce -= 10;
        let meter: any = document.querySelector("#meterL");
        meter.setAttribute("value", counterLeft.lettuce / 100);
       
        let displayIngredient: Prepared = new Prepared(1, 750, 180);
        displayIngredient.drawLettuce();
        drawOrders.push(displayIngredient);

        if (counterLeft.lettuce <= 0) {

            alert("refill lettuce!");
        }
    }

    export function addOnion(): void {
        currentOrder.onion++;
        counterLeft.onion -= 10;
        let meter: any = document.querySelector("#meterO");
        meter.setAttribute("value", counterLeft.onion / 100);
       
        let displayIngredient: Prepared = new Prepared(1, 750, 180);
        displayIngredient.drawOnion();
        drawOrders.push(displayIngredient);

        if (counterLeft.onion <= 0) {

            alert("refill onion!");
        }
    }

    export function addMeat(): void {
        currentOrder.meat++;
        counterLeft.meat -= 10;
        let meter: any = document.querySelector("#meterM");
        meter.setAttribute("value", counterLeft.meat / 100);
       
        let displayIngredient: Prepared = new Prepared(1, 750, 180);
        displayIngredient.drawMeat();
        drawOrders.push(displayIngredient);

        if (counterLeft.meat <= 0) {

            alert("refill meat!");
        }
    }

}