//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//string
let text: string = "Welcome";
console.log("Value assigned to text is: " +text);

//number
let num: number = 10;
console.log("Value assigned to num is: " +num);

//array
let myArray: number[] = [1, 2, 3];
for(let i = 0; i < myArray.length; i++)
{
    console.log("Value assigned to myArray is: "+(i+1)+ " is "+myArray[i]);
}
let myArray2: Array<number> = [1, 2, 3];
myArray2.forEach((item)=>{
    console.log("The value is: " +item);
})

let unknown: any = "Whatever we want";
console.log("The value of unknown is: " +unknown)

