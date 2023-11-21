let items = [
    newItemObject("milk", 8, 10, "sk29"),
    newItemObject("bamba", 2, 5, "skq9"),
    newItemObject("bisli", 16, 7, "s2s9"),
    newItemObject("apropo", 18, 3, "s23"),
]

function getItemByBarcode(barcode) {
    for (item of items) {
        if (item.barcode === barcode) {
            return item
        }
    }
}

function getItemsByName(name) {
    let result = []
    for (item of items) {
        if (item.barcode === barcode) {
            result.push(item)
        }
    }
    return result
}

let item1 = getItemByBarcode('sk29')
let item2 = items[2]


function buyItem(item, count) {
    if (count > item.amount) return -1
    item.amount -= count
    return item.amount
}
function addAmount(item, count) {
    item.amount += count
    return item.amount
}
function newItemObject(name, price, amount, bc) {
    return {
        name,
        price,
        amount,
        barcode: bc,
        buyMe: function (count) {
            if (count > this.amount) return -1
            this.amount -= count
            return this.amount
        },
        addAmount: function (count) {
            this.amount += count
        },
        printMe: function () {
            for (i in this) {
                if (typeof (this[i]) != "function") console.log(i, ' - ', this[i]);
            }
        }
    }
}

function addNewItem() {
    // get the values
    let n = "milk", price = 9, amount = 12, bc = "3d3e"
    // validation
    if (price < 0 || amount < 0) {
        console.log("ERROR");
        return
    }
    // create new object with the values
    let item = newItemObject(n, price, amount, bc)

    // return the object
    items.push(item)
    return item
}

console.log(item1.printMe)