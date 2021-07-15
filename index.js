// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'] 
function destructivelyAppendCat(Raplh) {
cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Bob) {
    cats.pop(3);
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift(0);
}
function appendCat(Broom) {
    const newCats = [...cats, Broom];
  return newCats;
}
function prependCat(Arnold) {
    const newCats = [Arnold, ...cats];
  return newCats;
}
function removeLastCat(Garfield) {
    return cats.slice(0, -1);
}
function removeFirstCat(Milo) {
    return cats.slice(1);
}