class BrickY{
    constructor(x,y,w,h){
        let options={
         restitution: 1,
         friction_air: 1,
         density: 1  
        }
        this.body = Bodies.rectangle(x,y,w,h,options)

        this.h = h
        this.w = w
       
        World.add(world, this.body)
    }
    show(){ 
        var pos = this.body.position
        push()
        rectMode(CENTER)
        stroke("grey")
        fill("brown")
        rect(pos.x, pos.y, this.w, this.h)
        pop()
    }
}