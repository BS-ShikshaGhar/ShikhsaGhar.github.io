// const contain  = document.querySelector('#question-list li:nth-child')
var que =[
    { question:"The velocity of a body at a given instant is called",
     option:['instantaneous velocity','non-uniform velocity','uniform velocity','none of the above'],
     right:'instantaneous velocity'
     },
     {
         question:"What is mean by the ratio of total displacement to total time taken by the body?",
         option:[' non-uniform velocity','average velocity','instantaneous velocity','uniform velocity'],
         right:'average velocity'
     },
     {  question:"Which velocity is known as “If unequal displacements in equal intervals of time are moving”",
        option:['instantaneous velocity','uniform velocity','non-uniform velocity','average velocity'],
        right:'non-uniform velocity'
     },
     { question:"Which of the following physical quantities is independent of direction?",
       option:['vectors','C.G.S','scalars','S.I'],
       right:'scalars'
     },
     {
        question:"Which velocity is known as “If equal displacements in equal intervals of time are moving”",
        option:['average velocity','instantaneous velocity','non-uniform velocity','none of the above'],
        right:'non-uniform velocity'
     },
     {
         question:"What is mean by the rate of displacement of a body?",
         option:['speed','acceleration','velocity','none of the above'],
         right:"velocity"
     },
     {
        question:"The physical quantities used in displacement both direction and magnitude are called as:",
        option:['vectors','scalars','S.I','C.G.S'],
        right:"vectors"
     },
     {
        question:"Which of the following is a type of motion?",
        option:['Circular','Rectilinear','Periodic','All the above'],
        right:"All the above"
     },
     {
        question:"If an object moves along a straight path it is said to be ………………… motion",
        option:['linear','one-dimensional','Both A and B','two-dimensional.'],
        right:"Both A and B"
     },
     {
        question:"Give the hazard motion of a honey bee.",
        option:['two-dimensional.','one-dimensional','linear','three-dimensional'],
        right:"three-dimensional"
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

 //form addition starts here
 const adele = document.forms["add-question"];

 adele.addEventListener('submit',function(behave){
     behave.preventDefault();
     const value = adele.querySelector('input[type="text"]').value;
     console.log(value);
     
     const ul = document.createElement('ul');
     const li = document.createElement('li');
     const span2 = document.createElement('span');
     const br = document.createElement('br');
     const span = document.createElement('span');
     li.appendChild(span);
     li.appendChild(span2);
     ul.appendChild(li);
     const div=document.querySelector('#suggest');
     div.appendChild(ul);
    //  span.appendChild(br);
     span.textContent=value;
     li.insertBefore(br,span2);
     li.insertBefore(br,span2);
     span2.style.float = 'right';
    //  span2.style.backgroundColor="black";
    //  span2.style.color="white";
     span2.textContent=" ok I will suggest this question to Bikki";
     //appending to DOM
     
 });
//  span.textContent=value;
//  const ul = document.createElement('ul');
//  const li = document.createElement('li');
//  const span = document.createElement('span');
//  //appending to DOM
//  li.appendChild(span);
//  ul.appendChild(li);
//  const div=document.querySelector('#suggest');
//  div.appendChild(ul);



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