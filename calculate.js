function calculate (){
    var a = document.getElementById('amount').value;
    var b = document.getElementById('tipvalue').value;
    var tip = a + (a*b)/100;
    var count = document.getElementById('people').value;
    console.log(count);
    document.getElementById('display').innerHTML ="Your Tip value is: "+ tip + "  \n Your share per person is " + tip/count;
    

}