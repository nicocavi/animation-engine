class Text extends Element{

    constructor(originx, originy, content, animated){
        let element = document.createElement("h1");
        element.innerHTML = content;
        super(originx, originy, element);
        this.animated = animated;
    }

    start(){
        if(!this.animated){
            super.start()
        }
        console.log("oroginx: "+this.originx+" originy: "+this.originy)
        this.element.style.opacity = 1;
        this.element.style.top = this.animated.y+"px";
        this.element.style.left = this.animated.x+"px";

    }
    stop(){
        /*if(!this.animated){
            super.stop()
        }
        console.log("El ")
        console.log("oroginx: "+this.originx+" originy: "+this.originy)
        
        this.element.style.opacity = 0;
        this.element.style.top = this.originy+"px";
        this.element.style.left = this.originx+"px";*/
        super.stop()

    }

}