function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear() + parseInt(years);

    if( principal <= 0 ){
        alert("Enter a positive number");
        // Clean and Focus principal input
        document.getElementById("principal").value = " "
        document.getElementById("principal").focus();
        
    }else{
        document.getElementById("result").innerHTML = "<br>If you deposit <mark> " + principal + "</mark> ,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    };

}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function clean(){
    // This Function clean all the previous informations on input tags
    document.getElementById("principal").value = "";
    document.getElementById("principal").focus();
    document.getElementById("rate").value = "12.25%";
    document.getElementById("years").value = "1";
    document.getElementById("rate_val").innerText = "12.25%";
    document.getElementById("result").innerHTML = " ";
}

window.onload = function() {
    //Dynamic inset the value e auto-focus principal 
    document.getElementById("principal").focus();
    document.getElementById("rate_val").innerText = "12.25%";
}