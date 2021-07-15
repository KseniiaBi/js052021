class Machine {
    constructor(name, power){
        this.enabled = true;
        this.name = name; 
        this.power = power;
        
    }
    
    sayHi(){
        if(this.enabled === true){
            console.log(`${this.name} with power ${this.power}W is turned on`);
        }
    }
}
let fridge = new Machine('Samsung', 100);
fridge.sayHi();




class CoffeeMaker extends Machine{

    constructor(name, water, power){
        super(name, power, water);
        this._waterAmount = water;
        this.waMAX = 1000;
    }

    enable(){
        super.sayHi();
        this.heat();
    }

    heat(){
        setTimeout(function(){
            console.log('Кофеварка нагрелась');
        },500);   
    }
    // getPower(){
    //     console.log(`${this.power}`)
    // }

    run(){
        if(this.enable){
            if(this._waterAmount >= 30){
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
                console.log(this._waterAmount);
            }
            else{
                if(typeof(amount) !== 'number'){
                    // throw new Error('Сыпем гвозди...');
                    console.error('Сыпем гвозди...');
                    return false;
                }
                if(amount + this._waterAmount > this.waMAX){
                    console.error('Облились!');
                }
                else if(amount < 0){
                    console.error('Эта вода непригодна для полива цветов!');
                }
                else{
                    this._waterAmount += amount;
                    console.log(`Текущее количество воды - ${this._waterAmount}мл.`);
                }
            }
    }
}
let cm = new CoffeeMaker('Saeco', 50, 1000);
cm.enable();
// cm.getPower();

cm.waterAmount(100);
cm.waterAmount();
cm.waterAmount(-100);
cm.waterAmount(1100);
cm.waterAmount();
cm.waterAmount(350);
cm.waterAmount('skldfjdslk');
cm.run();




//сохраняет ли это все? 