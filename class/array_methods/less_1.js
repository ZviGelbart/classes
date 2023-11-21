let names  = ["moshe", "nir", "yossef", "asher", "levi", "liron", "avi", "eli", "elia"]
console.log(names.filter(value => value.length==3))
console.log(names.filter(value => value.includes("i", "e")));
console.log(names.filter((value, index) => index % 2 == 0));
console.log(names.filter(value => value.slice(0,2)==="el"));