const canvas=document.getElementById("canvas")
let time=0
canvas.width=1024
canvas.height=576
const c=canvas.getContext("2d")
const particle=new Particle()
const SHM={
    maxA:150,
    T:6,
    y:0,
    a:0,
    v:0,
    drawAttributesLines(){
        // for y
        writeText(
            position={
                x:canvas.width/2,
                y:canvas.height/2+25
            },
            "Displacement",
            "orange"
        )
        drawLine(
            position={
                x:canvas.width/2,
                y:canvas.height/2+50
            },
            vector={
                x:this.y,
                y:0
            },
            "non-dotted",
            "orange",
            5
        )
        // for v
        writeText(
            position={
                x:canvas.width/2,
                y:canvas.height/2+75+20
            },
            "Velocity",
            "blue"
        )
        drawLine(
            position={
                x:canvas.width/2,
                y:canvas.height/2+100+20
            },
            vector={
                x:this.v,
                y:0
            },
            "non-dotted",
            "blue",
            5
        )
        // for a
        writeText(
            position={
                x:canvas.width/2,
                y:canvas.height/2+125+40
            },
            "Acceleration",
            "green"
        )
        drawLine(
            position={
                x:canvas.width/2,
                y:canvas.height/2+150+40
            },
            vector={
                x:this.a,
                y:0
            },
            "non-dotted",
            "green",
            5
        )
    }
}
const writeText=(position,content,color)=>{
    c.font = "20px Comic Sans MS";
    c.fillStyle = color;
    c.textAlign = "center";
    c.fillText(content, position.x, position.y); 
}
const drawLine=(position,vector,style="non-dotted",color,width=1)=>{
    c.beginPath()
    c.moveTo(position.x, position.y)
    if(style=="dotted"){
        c.setLineDash([10, 15])
    }
    c.lineWidth=width
    c.lineTo(position.x+vector.x, position.y+vector.y)
    c.strokeStyle=color
    c.stroke()
    c.setLineDash([])
}
const animate=()=>{
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle="white"
    c.fillRect(0,0,canvas.width,canvas.height)
    // draw mean line
    drawLine(
        position={
            x:canvas.width/2,
            y:(canvas.height/2)-175
        },
        vector={
            x:0,
            y:150
        },
        "dotted",
        "black"
    )
    particle.moveSHM()
    particle.draw()
}
animate()