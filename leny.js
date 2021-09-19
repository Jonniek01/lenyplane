const game=document.querySelector(".game")
const startScreen=document.querySelector(".startScreen")
const ozone=document.querySelector(".ozone")
const cloudSpace=document.querySelector(".cloudSpace")
const airSpace=document.querySelector(".airSpace")
const ground=document.querySelector(".ground")
const play=document.querySelector(".play")
let startMenu=document.querySelector(".starty")
let  menu=document.querySelector(".menu")
const gamy=document.querySelector(".gamy")







document.addEventListener("keydown",presson)
document.addEventListener("keyup",pressoff)

let leny={
    speed:15,
    score:0
}

let enemy1={
    speed:10
}
let enemy2={
    speed:10
}
let enemy3={
    speed:10
}
let enemy4={
    speed:10
}
let enemy5={
    speed:200
}
let enemy6={
    speed:200
}
function fly(){
   

  
    
    game.classList.add("gameshow");
    menu.classList.add("menu");
    menu.classList.remove("menuPageShow");



    enemy1.fly=true
    enemy2.fly=true
    enemy3.fly=true
    enemy4.fly=true
    enemy5.fly=true
    enemy6.fly=true

  leny.fly=true
  leny.score=0





  

   window.requestAnimationFrame(playing);

   //scores
   let score=document.createElement("div");
   score.setAttribute("class","score");

   game.appendChild(score);

//creating leny
   let plane=document.createElement("div")
    plane.setAttribute("class","plane")


    cloudSpace.appendChild(plane);


    leny.x=plane.offsetLeft
    leny.y=plane.offsetTop

    //creating jety1
    let jety1=document.createElement("div")
    jety1.setAttribute("class","jety1")
    cloudSpace.appendChild(jety1);
    enemy1.x=jety1.offsetLeft
    enemy1.y=jety1.offsetTop
    //creating jety2
    let jety2=document.createElement("div")
    jety2.setAttribute("class","jety2")
    cloudSpace.appendChild(jety2);
    enemy2.x=jety2.offsetLeft
    enemy2.y=jety2.offsetTop

        //creating jety3
        let jety3=document.createElement("div")
        jety3.setAttribute("class","jety3")
        cloudSpace.appendChild(jety3);
        enemy3.x=jety3.offsetLeft
        enemy3.y=jety3.offsetTop
    //creating jety4
    let jety4=document.createElement("div")
    jety4.setAttribute("class","jety4")
    cloudSpace.appendChild(jety4);
    enemy4.x=jety4.offsetLeft
    enemy4.y=jety4.offsetTop
    //creating jety5
    let jety5=document.createElement("div")
    jety5.setAttribute("class","jety5")
    cloudSpace.appendChild(jety5);
    enemy5.x=jety5.offsetLeft
    enemy5.y=jety5.offsetTop
    //creating jety6
    let jety6=document.createElement("div")
    jety6.setAttribute("class","jety6")
    cloudSpace.appendChild(jety6);
    enemy6.x=jety6.offsetLeft
    enemy6.y=jety6.offsetTop
    
   
}


function playing(){
    let plane=document.querySelector(".plane");
    let jety1=document.querySelector(".jety1")
    let jety2=document.querySelector(".jety2")
    let jety3=document.querySelector(".jety3")
    let jety4=document.querySelector(".jety4")
    let jety5=document.querySelector(".jety5")
    let jety6=document.querySelector(".jety6")

 


 //controling leny


    if(leny.fly){


                    if(!(controls.ArrowRight)&&leny.x<1250){leny.x+=1.5}

                    if(controls.ArrowRight &&leny.x<=1250){leny.x+=leny.speed;}


                    if(controls.ArrowLeft&&leny.x>=0){leny.x-=leny.speed}
                    if(controls.ArrowUp&&leny.y>=0){leny.y-=leny.speed}
                    if(!(controls.ArrowDown)&&leny.y<500){leny.y+=1}
                    if((controls.ArrowDown&&leny.y<=500)){leny.y+=leny.speed}
                    //if(leny.x>=1251&&leny.y>=500){leny.x=0,leny.y=45}
                    if(leny.y>=500){gameEnd()}





                    plane.style.left=leny.x+"px"
                    plane.style.top=leny.y+"px"
                




    }
     //controling jety1
     if(enemy1.fly){
        if(enemy1.x>0){enemy1.x-=3}

        if(enemy1.y<500){enemy1.y+=2}

        if(enemy1.y>=500){enemy1.x=1250,enemy1.y=250}

        jety1.style.left=enemy1.x+"px"
        jety1.style.top=enemy1.y+"px"
}
     //controling jety2
     if(enemy2.fly){
        if(enemy2.x>0){enemy2.x-=14}

        if(enemy2.x<=0){enemy2.x=1250,enemy2.y=460}

        jety2.style.left=enemy2.x+"px"
        jety2.style.top=enemy2.y+"px"
}
     //controling jety3
     if(enemy3.fly){
        if(enemy3.x>0){enemy3.x-=8}

        if(enemy3.y<500){enemy3.y+=8}

        if(enemy3.y>=500){enemy3.x=1000,enemy3.y=45}
       
        jety3.style.left=enemy3.x+"px"
        jety3.style.top=enemy3.y+"px"
}
     //controling jety4
     if(enemy4.fly){
        if(enemy4.x>0){enemy4.x-=3}

        if(enemy4.y<500){enemy4.y+=2}

        if(enemy4.x<=-0.5){enemy4.x=400,enemy4.y=45}

        jety4.style.left=enemy4.x+"px"
        jety4.style.top=enemy4.y+"px"
}
     //controling jety5
     if(enemy5.fly){
        if(enemy5.x>0){enemy5.x-=10}

        if(enemy5.x<=0){enemy5.y=25,enemy5.x=1250}
      

        jety5.style.left=enemy5.x+"px"
        jety5.style.top=enemy5.y+"px"
}
     //controling jety6
     if(enemy6.fly){
        if(enemy6.x>0){enemy6.x-=15}

        if(enemy6.x<=0){enemy6.y=250,enemy6.x=1250}
         jety6.style.left=enemy6.x+"px"
        jety6.style.top=enemy6.y+"px"


       isCollide()
       if (isCollide()){gameEnd();}
}


if (leny.fly==true){scory()}


window.requestAnimationFrame(playing);



}

function scory(){

    let score=document.querySelector(".score")

    leny.score++
    score.innerHTML="SCORE: "+Math.round((leny.score)/60);}
    



let controls={
    ArroRight:false,
    ArrowLeft:false,
    ArrowDown:false,
    ArrowUp:false,
    p:false,
    r:false
     
}


function presson(on){
        on.preventDefault();
            controls[on.key]=true;

}
   

 function pressoff(off){
   off.preventDefault();
   controls[off.key]=false;

}




function isCollide(){

    
    return (
        //crushing into enemy1
        ((leny.x<enemy1.x&&
        leny.x+45>enemy1.x&&

        leny.y<enemy1.y&&
        leny.y+45>enemy1.y)
        ||
        (leny.x<enemy1.x&&
         leny.x+45>enemy1.x&&
    
        leny.y>enemy1.y&&
        leny.y<enemy1.y+45))
        ||
                //crushing into enemy2
                ((leny.x<enemy2.x&&
                    leny.x+45>enemy1.x&&
            
                    leny.y<enemy2.y&&
                    leny.y+45>enemy2.y)
                    ||
                    (leny.x<enemy2.x&&
                     leny.x+45>enemy2.x&&
                
                    leny.y>enemy2.y&&
                    leny.y<enemy2.y+45))
                    ||
        //crushing into enemy3  
        ((leny.x<enemy3.x&&
            leny.x+45>enemy3.x&&
    
            leny.y<enemy3.y&&
            leny.y+45>enemy3.y)
            ||
            (leny.x<enemy3.x&&
             leny.x+45>enemy3.x&&
        
            leny.y>enemy3.y&&
            leny.y<enemy3.y+45))
            ||
        //crushing into enemy4 
        ((leny.x<enemy4.x&&
            leny.x+45>enemy4.x&&
    
            leny.y<enemy4.y&&
            leny.y+45>enemy4.y)
            ||
            (leny.x<enemy4.x&&
             leny.x+45>enemy4.x&&
        
            leny.y>enemy4.y&&
            leny.y<enemy4.y+45))
            ||
        //crushing into enemy5  
        ((leny.x<enemy5.x&&
            leny.x+45>enemy5.x&&
    
            leny.y<enemy5.y&&
            leny.y+45>enemy5.y)
            ||
            (leny.x<enemy5.x&&
             leny.x+45>enemy5.x&&
        
            leny.y>enemy5.y&&
            leny.y<enemy5.y+45))
            ||
                    //crushing into enemy6
        ((leny.x<enemy6.x&&
            leny.x+45>enemy6.x&&
    
            leny.y<enemy6.y&&
            leny.y+45>enemy6.y)
            ||
            (leny.x<enemy6.x&&
             leny.x+45>enemy6.x&&
        
            leny.y>enemy6.y&&
            leny.y<enemy6.y+45))

            
                        
        
        
    )
}
function gameEnd(){
    leny.fly=false
    enemy1.fly=false
    enemy2.fly=false
    enemy3.fly=false
    enemy4.fly=false
    enemy5.fly=false
    enemy6.fly=false
    leny.score=false

    cloudSpace.innerHTML=""
//gamy.removeChild(score)
    gamy.removeChild(cloudSpace);
    gamy.removeChild(airSpace);
    let rest=document.createElement("div")
    rest.classList.add("rest");
    rest.innerText="RESTART"
    gamy.appendChild(rest)

    rest=document.querySelector(".rest")
rest.onclick=function restart(){
    gamy.removeChild(rest)
    gamy.appendChild(cloudSpace);
    gamy.appendChild(airSpace);
    fly();


}


  



}


 




startScreen.onclick=function(){
    startScreen.classList.remove("startScreen")
    startScreen.classList.add("startScreenNone");
    menu.classList.remove("menu");
    menu.classList.add("menuPageShow")
    
    const credits=document.querySelector(".Credits")
    const help=document.querySelector(".help")

    
    credits.onclick=function credit(){
        let aboutMe=document.querySelector(".aboutMeHide")
        aboutMe.classList.remove("aboutMeHide");

        aboutMe.classList.add("aboutMe");

        let closeAbout=document.getElementById("x")
        closeAbout.onclick=function(){        aboutMe.classList.add("aboutMeHide");

        aboutMe.classList.remove("aboutMe");
}
    
    }
    help.onclick=function help(){
        let helpNotes=document.querySelector(".helpNotesHide")
        helpNotes.classList.remove("helpNotesHide");

        helpNotes.classList.add("helpNotes");

        let closeHelp=document.getElementById("xh")
        closeHelp.onclick=function(){      

            helpNotes.classList.remove("helpNote");
        helpNotes.classList.add("helpNotesHide");
}
    
    }

    

}

