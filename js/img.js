class Img extends Element{

    constructor(conf){
        let element = document.createElement("img");
        element.setAttribute("src", conf.src);
        super(conf, element);
        this.setStyle()
    }

    setStyle(){
        let styles = this.conf.styles;
        this.element.style.opacity = styles.opacity || 0;
        this.element.style.transition = styles.transition || "2s";
        this.element.style.position = "absolute";
        this.element.style.top = this.conf.left;
        this.element.style.left = this.conf.top;
    }

    start(){
        let opcion = this.conf.animated;
        this.element.style.opacity = opcion.opacity;
        this.element.style.top = opcion.top+"px";
        this.element.style.left = opcion.left+"px";
    }

    stop(){
        let opcion = this.conf;
        this.element.style.top = opcion.top+"px";
        this.element.style.left = opcion.left+"px";
        this.element.style.opacity = 0;
    }

}