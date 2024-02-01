function count_with_spaces(value) {
    return value.length;
}
var count = count_with_spaces("test 1");
console.log(count);
function count_no_spaces(value) {
    return value.trim().length;
}
var count2 = count_no_spaces(" test 2 ");
console.log(count2);
function count_both(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.trim().length;
    }
    return count;
}
console.log(count_both("Test 1"));
console.log(count_both(" Test 1 ", true));
