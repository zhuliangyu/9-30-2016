var myApp={
    
}

myApp.event={
    name:"",
    validate:function (phoneNo) {

        
    },
    add:function (el,type) {

    }
};

myApp.event.add("asd","ad");

function Person() {
    
};

var Person=function (firstName) {
    this.firstName=firstName;
    
};

var person1=new Person("hu");

Person.prototype.sayHello=function () {
    console.log(this.firstName+"sayHi");
};

console.log(person1.firstName);
person1.sayHello();

console.log(this);