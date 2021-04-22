function con() {
    var v1 = (document.querySelector("#value1").value);
    var v2 = (document.querySelector("#value2").value);
    var cal = Math.random() * 100;
    cal = Math.floor(cal) + 1;
    var check;

if (v1 != '' && v2 != '' && cal > 0 && cal < 25) {
    check = cal + '% ' + 'Not Good!';
} else if(v1 != '' && v2 != '' && cal > 25 && cal < 50) {
    check = cal + '% ' + 'Good For Eachother!';
} else if(v1 != '' && v2 != '' && cal > 50 && cal < 75) {
    check = cal + '% ' + 'You Are Compartible!';
} else if(v1 != '' && v2 != '' && cal > 75 && cal == 100) {
    check = cal + '% ' + 'You Are Perfect Match!!';
} else if (v1 == '' && v2 == '') {
    check = 'Both Input Are Empty';
} else if (v1 == '' || v2 == '') {
    check = 'An Input Is Empty';
} 



    document.querySelector("#result").innerHTML = check;
}
