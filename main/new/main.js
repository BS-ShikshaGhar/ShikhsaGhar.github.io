var scor=0;
function twofunc(){
    
    check();
    check2();
    // let x = document.getElementById("invi");
    // x.style.display="none";
    
}

function check(){
    var q1;
    var srt;
    // var score=0;
    for(let i=1;i<11;i++)
    {
        srt="question"+i;

        
        q1 = document.quiz[srt].value;
        if(q1=='')
            console.log("not selected");
        if(q1==1)
        {
            scor=scor+1;
        }
        
    }
    // alter();
}
function check2(){
    let x = document.getElementById("invi");
    x.style.display="none";
    let y= document.getElementById("result");
    y.style.display="block";
    document.getElementById("score").innerHTML = "YOU SCORED : " + scor;
    if(scor <= 5)
    {
        document.getElementById("compliment").innerHTML=("NEED to WORK HARDER ");
    }
    if(scor > 5 && scor<10)
    {
        document.getElementById("compliment").innerHTML=(" IS GOOD");
    }
    if(scor==10){
        document.getElementById("compliment").innerHTML=("IS Excellent");
    
    }
    let naam = document.getElementById("name").value;
    document.getElementById("naamdekho").innerHTML=(""+naam);
    document.getElementById("ask").innerHTML=("Hello "+naam+" study and make you parents proud");
}


// let x = document.getElementById("invi");
// x.style.display="none";
