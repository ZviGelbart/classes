let milk = {
  name: "milk",
  price: 50,
  barCode: 3825,
  inventory: 5,
};

let chice = {
  name: "chice",
  price: 45,
  barCode: 3826,
  inventory: 10,
};

let coffee = {
  name: "coffee",
  price: 60,
  barCode: 3827,
  inventory: 3,
};

let banana = {
  name: "banana",
  price: 10,
  barCode: 3828,
  inventory: 35,
};

arr = [milk, coffee, banana, chice];
function findBarCode(list,number){
    for(i of list){
        if(i.barCode === number){
          return  i;
        }else{
        }
    }
return undefined
}

function findCher(name, list) {
  let answer = [];
  for (i of list) {
    let find = i.name;

    if (find.includes(name)) {
      answer.push(i);
    }
  }
  return answer;
}

let find = findBarCode(arr,3828)
function inventoryReduction(fun,number){
    fun.inventory -= number;
    return fun;
}


function addInventory(fun,number){
    fun.inventory += number;
    return fun;
}


function addProduct(arr){
    


}

console.log(findBarCode(arr,3828))
console.log(findCher("c", arr));
console.log(inventoryReduction(find, 2))
console.log(addInventory(find,5))
console.log(addProduct(arr))
