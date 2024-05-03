class Particle{
    constructor(){
        this.position={
            x: canvas.width/2,
            y: canvas.height/2-100
        }
        this.radius=15
        this.color="blue"
        this.timeUpdate=setInterval(()=>{
            time+=0.056
        },57)
    }
    draw(){
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        c.strokeStyle=this.color
        c.stroke()
        c.fillStyle=this.color
        c.fill()
    }
    moveSHM(){
        const t=time
        SHM.y=SHM.maxA*Math.sin(((2*Math.PI)/SHM.T)*t)
        SHM.v=SHM.maxA*((2*Math.PI)/SHM.T)*Math.cos(((2*Math.PI)/SHM.T)*t)
        SHM.a=-(Math.pow(2*Math.PI/SHM.T,2))*SHM.y
        this.position.x=(canvas.width/2)+SHM.y
        SHM.drawAttributesLines()
    }
}