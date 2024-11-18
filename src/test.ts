
const indexPointer = "./index.js"; //დინამიურად, ანუ ფაილის სახელი განსაზღვროთ ცვლადით.
  
async function loadModule() 
{
    const myIndexElements = await import(indexPointer);
    myIndexElements.tellMeYourNameAndAge(); //chemi saxelia vaniko var 17 wlis

    myIndexElements.changeAge(71); //sheni axali asakia 71
    
    myIndexElements.tellMeYourNameAndAge(); //chemi saxelia vaniko var 71 wlis
    
    console.log(myIndexElements.name);//vaniko
    
    console.log(myIndexElements.squaredNumber(5));//25
}

loadModule();

// დასატესტად გამოიყენეთ npm start
