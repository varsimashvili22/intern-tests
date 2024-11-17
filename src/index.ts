export let name = "vaniko";
export let age = 17;

export function tellMeYourNameAndAge()
{
    console.log(`chemi saxelia ${name} var ${age} wlis`);
}

export function squaredNumber(a: number): number
{
    return a*a;
}
export function changeAge(newAge: number)
{
    age = newAge;
    console.log("sheni axali asakia " + newAge);
}
export function changeName(newName: string)
{
    name = newName;
    console.log("sheni axali saxelia " + newName);
}

