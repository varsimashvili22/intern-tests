export let name = "vaniko";
export let age = 17;
export function tellMeYourNameAndAge() {
    console.log(`chemi saxelia ${name} var ${age} wlis`);
}
export function squaredNumber(a) {
    return a * a;
}
export function changeAge(newAge) {
    age = newAge;
    console.log("sheni axali asakia " + newAge);
}
export function changeName(newName) {
    name = newName;
    console.log("sheni axali saxelia " + newName);
}
