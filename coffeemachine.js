let water = 200;
let milk = 50;
let beans = 15;
//let sugar = 10;
let coffeeCups = 1;

let cups = document.getElementById('calc').value;

let waterLabel = document.getElementById('water-label');
let milkLabel = document.getElementById('milk-label');
let beansLabel = document.getElementById('beans-label');
//let sugarLabel = document.getElementById('sugar-label');
let coffeeCupsLabel = document.getElementById('cups-label');
let cupsLabel = document.getElementById('calc-label');

let calcBtn = document.getElementById('calc-submit');
let cupsBtn = document.getElementById('cups-submit');
let brewBtn = document.getElementById('brew');
let sellBtn = document.getElementById('sell');

let calcP = document.getElementById('calc-p');
let coffeeAmountP = document.getElementById('coffee-amount-p');
let customerP = document.getElementById('customer-p');
let processP = document.getElementById('process-p');
let moneyP = document.getElementById('money-p');
let machineP = document.getElementById('machine-p');
let waterAmountP = document.getElementById('water-amount');
let milkAmountP = document.getElementById('milk-amount');
let beansAmountP = document.getElementById('beans-amount');
let cupsAmountP = document.getElementById('cups-amount');

let addWater = document.getElementById('add-water');
let addMilk = document.getElementById('add-milk');
let addBeans = document.getElementById('add-beans');
let addCups = document.getElementById('add-cups');

//initializing variables...
let waterAmount = 0;
let milkAmount = 0;
let beansAmount = 0;
let cupsAmount = 0;
let moneyAmount = 0;
let coffeeAmount = 0;

let targetCups = document.getElementById('target-cups').value;

calcBtn.addEventListener('click', calculate);
cupsBtn.addEventListener('click', check);
brewBtn.addEventListener('click', brew);
brewBtn.addEventListener('click', customer);
sellBtn.addEventListener('click', sell);

moneyP.innerHTML = `Money:<br>
${moneyAmount}`;

coffeeAmountP.innerHTML = `Coffee:<br>
${coffeeAmount}`;

//calculate ingredients needed to make a certain amount of coffee
function calculate(e) {
    cups = document.getElementById('calc').value;
    water *= cups;
    milk *= cups;
    beans *= cups;
    //sugar *= cups;
    coffeeCups *= cups;
    calcP.innerHTML = (`For ${cups} cup(s) of coffee, you will need:<br> 
    ${water} ml of water<br>
    ${milk} ml of milk<br>
    ${beans} g of coffee beans<br>
    ${coffeeCups} cup(s)`);
    water = 200;
    milk = 50;
    beans = 15;
    //sugar = 10;
    coffeeCups = 1;
}

//Automatically add 3 dollars every three seconds
setInterval(() => {
    moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount += 5);
}, 3000);

if (moneyAmount === 0) {
    moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount);
} /*if (moneyAmount < 0) {
    addWater.removeEventListener('click');
    addMilk.removeEventListener('click');
    add
}*/

//ADD UPGRADES

//Add 200 mg water and subtract $1 when adding water (pressing button)
addWater.addEventListener('click', () => {
    waterAmountP.innerHTML = "You have " + (waterAmount += 200) + " mg of water. (1/s)";
    machineP.innerHTML = "";
    moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount -= 2);
    if (moneyAmount < 0) {
        moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount += 2);
        waterAmountP.innerHTML = "You have " + (waterAmount -= 200) + " mg of water. (1/s)";
        alert('Not enough money!');
    }
});

//Add 5 water every 5 seconds
setInterval(() => {
    waterAmountP.innerHTML = "You have " + (waterAmount += 5) + " mg of water. (1/s)";
}, 5000);

//Add 50 mg milk and subtract $2 when adding milk (pressing button)
addMilk.addEventListener('click', () => {
    milkAmountP.innerHTML = "You have " + (milkAmount += 50) + " mg of milk. (0.6/s)"
    machineP.innerHTML = "";
    moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount -= 3);
    if (moneyAmount < 0) {
        moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount += 3);
        milkAmountP.innerHTML = "You have " + (milkAmount -= 50) + " mg of milk. (0.6/s)";
        alert('Not enough money!');
    }
});

//Add 3 milk every 5 seconds
setInterval(() => {
    milkAmountP.innerHTML = "You have " + (milkAmount += 3) + " mg of milk. (0.6/s)";
}, 5000);

//Add 15 g coffee beans and subtract $3 when adding beans (pressing button)
addBeans.addEventListener('click', () => {
    beansAmountP.innerHTML = "You have " + (beansAmount += 15) + " g of coffee beans. (0.2/s)";
    machineP.innerHTML = "";
    moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount -= 4);
    if (moneyAmount < 0) {
        moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount += 4);
        beansAmountP.innerHTML = "You have " + (beansAmount -= 15) + " g of milk. (0.2/s)";
        alert('Not enough money!'); 
    }
});

//Add 1 coffee bean every 5 seconds
setInterval(() => {
    beansAmountP.innerHTML = "You have " + (beansAmount += 1) + " g of coffee beans. (0.2/s)";
}, 5000);

//Add 1 cup and subtract $0.25 when adding cups (pressing button)
addCups.addEventListener('click', () => {
    cupsAmountP.innerHTML = "You have " + (cupsAmount += 1) + " cup(s). (0.2/s)";
    machineP.innerHTML = "";
    moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount -= 0.50);
    if (moneyAmount < 0) {
        moneyP.innerHTML = "Money: <br>" + "$" + (moneyAmount += 0.50);
        cupsAmountP.innerHTML = "You have " + (cupsAmount -= 1) + " cup(s). (0.2/s)";
        alert('Not enough money!'); 
    }
});

//Add 1 cup every 5 seconds
setInterval(() => {
    cupsAmountP.innerHTML = "You have " + (cupsAmount += 1) + " cup(s). (0.2/s)";
}, 5000);

//Print initial value (zero)
waterAmountP.innerHTML = `You have ${waterAmount} mg of water. (1/s)`
milkAmountP.innerHTML = `You have ${milkAmount} mg of milk. (0.6/s)`
beansAmountP.innerHTML = `You have ${beansAmount} mg of coffee beans. (0.2/s)`
cupsAmountP.innerHTML = `You have ${cupsAmount} cup(s). (0.2/s)`

//let waterTotal = waterAmount / 200;
//let milkTotal = milkAmount / 50;
//let beansTotal = beansAmount / 15;

//Check if player has enough, more than enough, or too little coffee to make target amount.
function check (e) {
    targetCups = document.getElementById('target-cups').value;
    if (waterAmount / 200 == targetCups && 
    milkAmount / 50 == targetCups &&
    beansAmount / 15 == targetCups && 
    cupsAmount / 1 == targetCups) {
        machineP.innerHTML = "You have enough coffee! Click the 'brew' button to begin making coffee.";
    } else if (waterAmount / 200 > targetCups &&
        milkAmount / 50 > targetCups &&
        beansAmount / 15 > targetCups &&
        cupsAmount / 1 > targetCups) {
            let limitingReg;
            let regAmount;
            if (Math.floor(waterAmount / 200) <= Math.floor(milkAmount / 50) && 
            Math.floor(waterAmount / 200) <= Math.floor(beansAmount / 15) && 
            Math.floor(waterAmount / 200) <= Math.floor(cupsAmount / 1)) {
                limitingReg = waterAmount;
                regAmount = 200;
                machineP.innerHTML = "You have more than enough coffee! I can make " + (Math.floor(limitingReg / regAmount) - 1) + " more cup(s) of coffee. Click the 'brew' button to begin making coffee.";
            } else if (Math.floor(milkAmount / 50) <= Math.floor(waterAmount / 200) && 
            Math.floor(milkAmount / 50) <= Math.floor(beansAmount / 15) && 
            Math.floor(milkAmount / 50) <= Math.floor(cupsAmount / 1)) {
                limitingReg = milkAmount;
                regAmount = 50;
                machineP.innerHTML = "You have more than enough coffee! I can make " + (Math.floor(limitingReg / regAmount) - 1) + " more cup(s) of coffee. Click the 'brew' button to begin making coffee.";
            } else if (Math.floor(beansAmount / 15) <= Math.floor(waterAmount / 200) && 
            Math.floor(beansAmount / 15) <= Math.floor(milkAmount / 50) && 
            Math.floor(beansAmount / 15) <= Math.floor(cupsAmount / 1)) {
                limitingReg = beansAmount;
                regAmount = 15;
                machineP.innerHTML = "You have more than enough coffee! I can make " + (Math.floor(limitingReg / regAmount) - 1) + " more cup(s) of coffee. Click the 'brew' button to begin making coffee.";
            } else if (Math.floor(cupsAmount / 1) <= Math.floor(waterAmount / 200) && 
            Math.floor(cupsAmount / 1) <= Math.floor(milkAmount / 50) && 
            Math.floor(cupsAmount / 1) <= Math.floor(beansAmount / 15)) {
                limitingReg = cupsAmount;
                regAmount = 1;
                machineP.innerHTML = "You have more than enough coffee! I can make " + (Math.floor(limitingReg / regAmount) - 1) + " more cup(s) of coffee. Click the 'brew' button to begin making coffee.";
            }
    } else if (waterAmount / 200 < targetCups ||
        milkAmount / 50 < targetCups ||
        beansAmount / 15 < targetCups) {
        machineP.innerHTML = "You do not have enough coffee! Stock the coffee machine with more ingredients and try again.";
    }
}

/*let limitingReg;
let regAmount;

let ingArr = [waterAmount, milkAmount, beansAmount];*/

function brew() {
    arr = ['Starting to make coffee...', 'Boiling water...', 'Mixing boiled water with crushed coffee beans...',
    'Pouring the coffee into the cup...', 'Pouring some milk into the cup...', 'Coffee is ready!'];
    if (waterAmount > 0 && milkAmount > 0 && beansAmount > 0 && cupsAmount > 0) {
        water *= targetCups;
        milk *= targetCups;
        beans *= targetCups;
        coffeeCups *= targetCups;

        let i = 0;
        waterAmount -= water;
        milkAmount -= milk;
        beansAmount -= beans;
        cupsAmount -= coffeeCups;
        coffeeAmount += Number(targetCups);
        setInterval(() => {
            processP.innerHTML = arr[i];
            i++;
            if (i > arr.length) {
                processP.innerHTML = "";
            }
        }, 3000);
        i = 0;
        coffeeAmountP.innerHTML = `Coffee:<br>
        ${coffeeAmount}`;
    } else if (waterAmount < 0) {
        waterAmount += water;
        alert('Not enough ingredients!');
        coffeeAmount--;
        coffeeAmountP.innerHTML = `Coffee:<br>
    ${coffeeAmount}`;
    } else if (milkAmount < 0) {
        milkAmount += milk;
        alert('Not enough ingredients!');
        coffeeAmount--;
        coffeeAmountP.innerHTML = `Coffee:<br>
    ${coffeeAmount}`;
    } else if (beansAmount < 0) {
        beansAmount += beans;
        alert('Not enough ingredients!')
        coffeeAmount--;
        coffeeAmountP.innerHTML = `Coffee:<br>
    ${coffeeAmount}`;
    } else if (cupsAmount < 0) {
        cupsAmount += coffeeCups;
        alert('Not enough ingredients!');
        coffeeAmount--;
        coffeeAmountP.innerHTML = `Coffee:<br>
    ${coffeeAmount}`;
    }
}

if (waterAmount === 0 && milkAmount === 0 && beansAmount === 0) {
    machineP.innerHTML = "Use the '+' buttons to stock the coffee machine.";
}
/*function machine() {
    waterLabel.innerHTML = "How many ml of water does the coffee machine have?"
}*/

let coffeeMin = 1;
let coffeeMax = 5;
let randomCoffee = Math.floor(Math.random() * (coffeeMax - coffeeMin)) + coffeeMin;

function customer() {
    customerP.innerHTML = `You have a customer! The customer would like ${randomCoffee} cup(s) of coffee.`
}

function sell() {
    coffeeAmount -= randomCoffee;
    coffeeAmountP.innerHTML = `Coffee:<br>
    ${coffeeAmount}`;
    moneyAmount += 10;

    customerP.innerHTML = "";

    randomCoffee = Math.floor(Math.random() * (coffeeMax - coffeeMin)) + coffeeMin;
}
