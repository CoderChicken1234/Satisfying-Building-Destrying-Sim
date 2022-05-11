class destroyer_Ball{
    constructor(x,y,w,h){
        let options={
         restitution: 1,
         friction_air: 0.1,
         density: 0.1   
        }
        this.body = Bodies.rectangle(x,y,w,h,options)

        this.h = h
        this.w = w
       
        World.add(world, this.body)
    }
    show(){ 
        var pos = this.body.position
        push()
        ellipseMode(CENTER)
        stroke("grey")
        fill("brown")
        ellipse(pos.x, pos.y, this.w, this.h)
        pop()
    }
}