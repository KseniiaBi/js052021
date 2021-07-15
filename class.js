// Базовый класс Machine
class Machine {
    constructor(name, power) {
        this.enabled = false;
	    this.name = name;
	    this.power = power;
    }
        enable(){
        if (this.enabled === true) {
        console.log(`${this.name} with power ${this.power}W is turned on`);
         }
}
}
let fridge = new Machine('Samsung', 8);
console.log(fridge);
fridge.enable();

// Дочерний класс
class CoffeeMaker extends Machine {
    constructor (name, amountOfWater, power) {
    super(name, power, amountOfWater)
    this.amountOfWater = amountOfWater;    
	this.waterMAX = 1000;
    }

    enable() {
        super.enable();
		this.heat();
    }
    
    heat() {
    setTimeout(function(){
	console.log('Кофеварка нагрелась');
	},100);
	}

    getPower (){
		console.log(power);
	}

    run (){
		if(this.enable){
			if(this.amountOfWater >= 30){
				setTimeout(function(){
					console.log('Coffee is ready!');
				},1000);
			}
			else{
				console.warn('Не достаточно воды');
			}
		}  
	}
    waterAmount(amount){
		if(amount === undefined){
			console.log(this.amountOfWater);
		}
		else{
			if(typeof(amount) !== 'number'){
				console.error('Сыпем гвозди...');
				return false;
			}
			if(amount + this.amountOfWater > this.waterMAX){
				console.error('Облились!');
			}
			else if(amount < 0){
				console.error('Эта вода непригодна для полива цветов!');
			}
			else{
				this.amountOfWater += amount;
				console.log(`Текущее количество воды - ${this.amountOfWater}мл.`);
			}
		}
	}
}
let newCoffeeMachine = new CoffeeMaker('Saeco', 10, 1000);
console.log(newCoffeeMachine.enable());
console.log(newCoffeeMachine.run());
console.log(newCoffeeMachine.waterAmount(100));
console.log(newCoffeeMachine.waterAmount());
console.log(newCoffeeMachine.waterAmount(-100));
console.log(newCoffeeMachine.waterAmount(1100));  