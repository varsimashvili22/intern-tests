const indexPointer = "./index.js";
import(indexPointer)
    .then((myIndexElements) => {
    myIndexElements.tellMeYourNameAndAge(); //chemi saxelia vaniko var 17 wlis
    myIndexElements.changeAge(71); //sheni axali asakia 71
    myIndexElements.tellMeYourNameAndAge(); //chemi saxelia vaniko var 71 wlis
    console.log(myIndexElements.name); //vaniko
    console.log(myIndexElements.squaredNumber(5)); //25
})
    .catch((error) => {
    console.error("Error importing module:", error);
});
// დასატესტად გამოიყენეთ npm start
