class Grosery{
    constructor(name, price, amuont, barcode){
        this.name = name;
        this.price = price;
        this.amuont = amuont;
        this.barcode = barcode;
    }
    byu(count){
        this.amuont-=count;
    }
    addanuont(count){
        this.amuont += count;
    }
    get print(){
        this.amuont
    }
}

let items = [
    new Grosery = ("milk", 5, 45, 212),
    new Grosery = ("bisli", 4, 32, 222),
    new Grosery = ("bamba", 7, 28, 211),
]