// const contain  = document.querySelector('#question-list li:nth-child')
var que =[
    { question:"Convert the 0.007 into fraction",
     option:['1/007','700/100','7/1000','none of the above'],
     right:'7/1000'
     },
     {
         question:"You have cut your birthday cake in 8 equal pieces , Your brother ate 6 pieces. What fraction of cake your brother ate?",
         option:['8/6','2/8','8/2','3/4'],
         right:'3/4'
     },
     {  question:"What percentage of cake did he ate",
        option:['60%','70%','75%','none of the above'],
        right:'75%'
     },
     { question:"Convert 33% into fraction",
       option:['100/33','100/33','33/1000','1000/33'],
       right:'33/100'
     },
     {
        question:"The cost of two packets of chips is 50 rupees. Find the cost of 5 packets.",
        option:['180','100','200','125'],
        right:'125'
     },
     {
         question:"The population of a town was 3000 in 2015.It increased 25% in 2016.What was the population of the town in 2016?",
         option:['3800','3750','3775','3250'],
         right:"3750"
     }
 ];
 var count=0;
 var itr=0;
 var optiondistribute = document.querySelectorAll('.option');
 optiondistribute.forEach(function(distribute){
     distribute.textContent=que[count].option[itr];
     itr+=1;
    //  count+=1;
     if(itr > 3)
     {
         count+=1;
         itr=0;
     }
    //  itr+=1;
 });
let i=0;
const contain=document.querySelectorAll('#question-list li .question');
console.log(contain)
contain.forEach(function(con){
    // let i=0;
    // for(let i=0;i<contain.length;i++){
    //     con.textContent=que[i].question;
    // }
    con.textContent=que[i].question;
    i++;
    console.log(con);

});

// var x= document.querySelectorAll('#question-list li .question');
// let y=x[0].parentElement;
// console.log(y);
// y.style.display="none";
// delete code
var score=0;
var x = document.querySelectorAll('#question-list .skip');

x.forEach(function(skip){
    skip.addEventListener('click',function(eve){
        const ls=eve.target.parentElement;
        // console.log(ls);
        ls.parentElement.removeChild(ls);
        var y = document.querySelectorAll('#question-list li');
        if(y.length==0)
        {
            document.getElementById('empty').style.display='none';
            scoreboard();
            // document.getElementsByClassName('contain').style.display='none';//why it is not working
        }
        console.log(y.length);        
    })
});
// var t=document.querySelectorAll('.option');
// console.log(t);
// t[0].textContent=que[0].optiona;

var r = document.querySelectorAll(".option");
 r.forEach(function(option){
     option.addEventListener('click',function(op){
         const opt=op.target.textContent;
        //  console.log(op.target.textContent);
        const idnum=op.target.parentElement.parentElement.id;
        // console.log(opt);
        if(opt==que[idnum].right)
        {
            score+=1;
            console.log("score"+score)
        }
        const ls=op.target.parentElement.parentElement;
        // console.log(ls);
        ls.parentElement.removeChild(ls);
        var z = document.querySelectorAll('#question-list li');
        if(z.length==0)
        {
            document.getElementById('empty').style.display='none';
            scoreboard();
            // document.getElementsByClassName('contain').style.display='none';//why it is not working
        }
        
        
        })
        
 });

 function scoreboard(){
    var yt= document.getElementById('score');
    yt.style.display='block';
    yt = document.querySelector('#score .marks');
    yt.textContent="You Scored "+score;
 }

 

// creating clock
let meridian="";
function display(){
    let meridian="";
 var clock = new Date();
var hour = clock.getHours();
var mins = clock.getMinutes();
var sec = clock.getSeconds();
if(hour<12){
    meridian="AM";
    if(hour<10)
    {
    hour="0"+hour;
    }
}
else{
    meridian="PM";
}

if(hour>12){
    hour=hour-12;
    if(hour<10)
    {
    hour="0"+hour;
    }
}
var c=document.getElementById('time');
// console.log(hour);
// c.style.backgroundColor='white';
document.getElementById('time').innerHTML=(""+hour+" : "+mins+" : "+sec+" "+meridian);
// console.log(hour);

}