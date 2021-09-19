function pause(){
    leny.fly=false
enemy1.fly=false
enemy2.fly=false
enemy3.fly=false
enemy4.fly=false
enemy5.fly=false
enemy6.fly=false
scory.fly=false
let r=document.createElement("div");
r.classList.add("r")
r.innerHTML="CLICK 'R' TO RESUME"
game.appendChild(r)


}
function resume(){ leny.fly=true
enemy1.fly=true
enemy2.fly=true
enemy3.fly=true
enemy4.fly=true
enemy5.fly=true
enemy6.fly=true

}
function pauseResume(){
    if(controls.p){pause();}
if(controls.r)  {resume();}}
leny.fly=true
    enemy1.fly=true
    enemy2.fly=true
    enemy3.fly=true
    enemy4.fly=true
    enemy5.fly=true
    enemy6.fly=true
    leny.score=true