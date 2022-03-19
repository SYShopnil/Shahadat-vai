let totalCostOfGoods =  30; //input one
const cashFromCustomer = 20; //input two
const discountCode = 1 //input three range (0-5)
let customerChange = 0 //how many amount of change should customer will get.

//handle the discount part
switch (discountCode) {
    case 0 :{
        totalCostOfGoods = totalCostOfGoods
        break;
    }
    case 1: {
        //it will discount 10%
        const disCountAmount = (totalCostOfGoods * 10 ) / 100
        totalCostOfGoods = totalCostOfGoods - disCountAmount
        break;
    }
    case 2: {
        //it will discount 15%
        const disCountAmount = (totalCostOfGoods * 15 ) / 100
        totalCostOfGoods = totalCostOfGoods - disCountAmount
        break;
    }
    case 3: {
        //it will discount 25%
        const disCountAmount = (totalCostOfGoods * 25 ) / 100
        totalCostOfGoods = totalCostOfGoods - disCountAmount
        break;
    }
    case 4: {
        //it will discount 35%
        const disCountAmount = (totalCostOfGoods * 35 ) / 100
        totalCostOfGoods = totalCostOfGoods - disCountAmount
        break;
    }
    case 5: {
        //it will discount 40%
        const disCountAmount = (totalCostOfGoods * 40 ) / 100
        totalCostOfGoods = totalCostOfGoods - disCountAmount
        break;
    }
    default :{
        totalCostOfGoods = totalCostOfGoods
    }
}

//handle the customer's return amount part
if ((cashFromCustomer - totalCostOfGoods) < 0) {
    customerChange = "Insufficient Payment!"
}else {
    customerChange = `$${(cashFromCustomer - totalCostOfGoods).toFixed (2)}`;
}

console.log (customerChange);