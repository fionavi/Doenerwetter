namespace DoenerTest {
    export let payIsClicked: boolean = false;

    export function cashUpOrder(): void {
        payIsClicked = true;
        ordersMade.push(currentOrder);
        console.log(currentOrder);
        console.log(ordersMade[0]);

        if (ordersMade[0].bread == orders[0].bread && ordersMade[0].lettuce == orders[0].lettuce && ordersMade[0].meat == orders[0].meat
            && ordersMade[0].onion == orders[0].onion && ordersMade[0].tomato == orders[0].tomato) {
            orderCorrect = true;
            console.log("order was right");
            console.log("länge davor: " + customers.length + " " + ordersMade.length + " " + orders.length);


            ordersMade.shift();
            orders.shift();
            displayOrders.shift();


            happyScore++;
            earnings += 3.5;
            let displayEarnings: any = document.getElementById("earnings");
            console.log("Kasse: " + earnings.toString());
            displayEarnings.innerText = earnings.toString() + " €";
            setTimeout(function (): void {
                drawOrders = [];
                breadIsDrawn = tomatoIsDrawn = lettuceIsDrawn = onionIsDrawn = meatIsDrawn = false;
                customers.shift();
                currentCustomerAmount--;
                console.log("Thank you! Bye.");
                let sound: string = "media/bye.wav";
                let audio: HTMLAudioElement = new Audio(sound);
                audio.play();
            }, 3000);

            info.innerHTML = "";
            info.innerHTML += displayOrders;
            console.log("länge danach: " + customers.length + " " + ordersMade.length + " " + orders.length);
            currentOrder.bread = 0;
            currentOrder.tomato = 0;
            currentOrder.lettuce = 0;
            currentOrder.onion = 0;
            currentOrder.meat = 0;


        } else {
            console.log("order was wrong");
            console.log(ordersMade[0]);
            console.log("länge davor: " + customers.length + " " + ordersMade.length + " " + orders.length);

            orderCorrect = false;
            ordersMade.shift();
            orders.shift();
            displayOrders.shift();


            earnings += 3.5;
            let displayEarnings: any = document.getElementById("earnings");
            console.log("Kasse: " + earnings.toString());
            displayEarnings.innerText = earnings.toString() + " €";
            setTimeout(function (): void {
                drawOrders = [];
                breadIsDrawn = tomatoIsDrawn = lettuceIsDrawn = onionIsDrawn = meatIsDrawn = false;
                customers.shift();
                currentCustomerAmount--;
                console.log("That was not what I've ordered! I'm leaving.");
                orderCorrect = true;
                let sound: string = "media/angry.wav";
                let audio: HTMLAudioElement = new Audio(sound);
                audio.play();
            }, 3000);
            info.innerHTML = "";
            info.innerHTML += displayOrders;
            console.log("länge danach: " + customers.length + " " + ordersMade.length + " " + orders.length);
            currentOrder.bread = 0;
            currentOrder.tomato = 0;
            currentOrder.lettuce = 0;
            currentOrder.onion = 0;
            currentOrder.meat = 0;

        }
    }
}