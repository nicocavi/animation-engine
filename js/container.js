class Container extends Element{

    constructor(originx, originy, animated){
        super(originx, originy, document.createElement("div"));
        this.animated = animated;
        this.objects = []
        this.setStyle();
    }

    setStyle(){
        super.setStyle();
        this.element.style.width='100%'
    }

    appendChild(object){
        this.objects.push(object)
        this.element.appendChild(object.element);
    }

    start(){
        super.start()
        this.objects.forEach(element => {
            element.start()
        });
    }

    stop(){
        super.stop()
        this.objects.forEach(element => {
            element.stop()
        });
    }

}