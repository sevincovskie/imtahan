

function edediOrta(array) {
    let cem = 0;

    for (let i = 0; i < array.length; i++) {
        cem += array[i];
    }
    return cem / array.length;
}
let array = [1, 2, 3, 4, 5];
let orta_eded = edediOrta(array);
console.log("Ededi orta " + orta_eded);