
class Object {
    constructor(name,age,isAdmin){
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;

    }

}

const buddy = new Object("Buddy",4,true);
const kelly = new Object("Kelly",50,false);
const puff = new Object("Puff",40,false);
const spikr = new Object("Spikr",30,true);
const god = new Object("God",10000000,true);

const arrayOfObjects = [buddy,kelly,puff,spikr,god];

console.log(arrayOfObjects);

const greater20Array = arrayOfObjects.filter(object => object.age > 20);
console.log(">20: " ,greater20Array);

const isAdminArray = arrayOfObjects.filter(object => object.isAdmin === true);
console.log("is admin true: ", isAdminArray);

const isAdminAndLess50Array = arrayOfObjects.filter(object => (object.isAdmin === true) && (object.age < 50));
console.log("is admin true less 50: ", isAdminAndLess50Array);


const ascenNameArray = arrayOfObjects.sort((a, b) => {
    if (a.name < b.name) {
    return -1;
    } else if (a.name > b.name) {
    return 1;
    } else {
    return 0;
    }
    });

    console.log("Names ascen: ", ascenNameArray);


    const descAgeArray = arrayOfObjects.sort((a, b) => {
        if (a.age < b.age) {
        return 1;
        } else if (a.age > b.age) {
        return -1;
        } else {
        return 0;
        }
        });
    
        console.log("Age Desc: ", descAgeArray);


