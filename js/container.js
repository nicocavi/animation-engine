class Container extends Element{

    constructor(conf){
        let element = document.createElement("div")
        super(conf, element);
        conf.elements.forEach(element => {
            this.element.appendChild(element.element)
        });
        this.objects = conf.elements || [];
        this.setStyle();
    }

    setStyle(){
        this.element.style.width = "100%";
        this.element.style.height = "100%";
    }

    appendChild(object){
        this.objects.push(object)
        this.element.appendChild(object.element);
    }

    start(){
        this.objects.forEach(element => {
            element.start()
        });
    }

    stop(){
        this.objects.forEach(element => {
            element.stop()
        });
    }

}