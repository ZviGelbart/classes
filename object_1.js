function templiteItems(name, price, amount, barcode){
    return{
    name,
    price,
    amount,
    barcode,
    buyMe: function (count) {
        if (count > this.amount) return -1
        this.amount -= count
        return this.amount
    },
    addAmount : function(count){
        this.amount +=count
    }
    }
}

let arriItems = [
    templiteItems("milk", 5, 40, "1234"),
    templiteItems("apple", 15, 200, "5678"),
    templiteItems("coffee", 25, 30, "9123"),
    templiteItems("kendis", 3, 150, "4567"),
    templiteItems("yogort", 4, 80, "8910"),
    templiteItems("cihps", 7, 85, "3456")
]


function addNewItem() {
    let name = "milki", price = 9, amount = 12, barCode = "8282"
    if (price < 0 || amount < 0) {
        console.log("ERROR");
        return
    }
    let item =  templiteItems (name,price,amount,barCode)
    arriItems.push(item)
    return item
}
addNewItem()


function print(arr){
    for(i in arr){
        console.log(i);
    }
}
// print(arriItems[0])

// console.log(arriItems)
arriItems[0].addAmount(5)
arriItems[0].buyMe(20)
console.log(arriItems)