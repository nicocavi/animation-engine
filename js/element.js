
class Element{

    constructor(originx, originy, element){
        this.originx = originx;
        this.originy = originy;
        this.element = element;
        this.setStyle();
    } 

    setStyle(){
        this.element.style.transition = '2s';
        this.element.style.position = "absolute";
        this.element.style.left = this.originx+"px";
        this.element.style.top = this.originy+"px";
        this.element.style.opacity = 0;
    }

    start(){
        this.element.style.opacity = 1;
        this.element.style.top = this.originy*3+"px";
        this.element.style.left = this.originx*3+"px";
    }

    stop(){
        this.element.style.opacity = 0;
        this.element.style.top = this.originy+"px";
        this.element.style.left = this.originx+"px";
    }

}