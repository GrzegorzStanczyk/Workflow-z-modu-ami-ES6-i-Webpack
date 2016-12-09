
export class TestCtrl{

    constructor(NameService){
        this.name = NameService.getName();
        
        this.message = "Hi! I'am test Controller!";
    }
  

    sayHello(name){
        this.name = name;
        this.message = 'Hi! I`am ' + name;
    }
}
