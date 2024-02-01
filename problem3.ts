function count_with_spaces(value: string):number {
return value.length;

}
let count = count_with_spaces("test 1");
console.log(count);




function count_no_spaces(value: string):number {
return value.trim().length;
}
let count2 = count_no_spaces(" test 2 ")
console.log(count2);

function count_both(value:string, spaces?:boolean):number{

    let count: number = 0;

    if(spaces){
        count = value.length
    }else{
        count = value.trim().length
    }
    return count;
}

console.log(count_both("Test 1"))
console.log(count_both(" Test 1 ", true))