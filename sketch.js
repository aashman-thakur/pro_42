var sc,hr,mn
var scAngle,mnAngle,hrAngle

function setup(){
    createCanvas(400,400)
    sc=second()
    mn=minute()
    hr=hour()
}

function draw(){

    background(0)
    scAngle=map(sc,0,60,0,360)
    mnAngle=map(mn,0,60,0,360)
    hrAngle=map(hr,0,12,0,360)
    push()
    translate(200,200)
    rotate(scAngle)
    strokeWeight(7)
    stroke('green')
    line(0,0,100,100) 
    pop()
    push()
    translate(200,200)
    rotate(hrAngle)
    strokeWeight(7)
    stroke('blue')
    line(0,0,50,50) 
    pop()
    push()
    translate(200,200)
    rotate(mnAngle)
    strokeWeight(7)
    stroke('red')
    line(0,0,75,75)
    pop()
    
    
}