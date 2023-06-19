    var c=(Math.random()*100+1);
    var a=Math.round(c);
    
    var i=1;
check=()=>{
    var b=(document.getElementById("text").value);
    i++;
    if(b==a){
            document.getElementById("main").textContent=("Congratulations!!!you have got the number in" +i+"tries");
           }
    
    else if(b>a){
        
            document.getElementById("main").textContent=("Try a Smaller Number");
    }

    else {
        
            document.getElementById("main").textContent=("Try a Greater Number");
    }
    var b=(document.getElementById("text").value);
}

