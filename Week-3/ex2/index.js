let name = {
    firstName: 'John',
    lastName: 'Doe',
    printFullName: function(){
        console.log(this.firstName + ' ' + this.lastName);
    }
}

let printFullName = function(){
    console.log(this.firstName + ' ' + this.lastName);
}

name.printFullName();

let name2 = {
    firstName: 'muskan',
    lastName: 'batra',
}

name2.printFullName.call(name2)