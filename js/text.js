class Text extends Element{

    constructor(conf){
        let element = document.createElement("p");
        element.innerHTML = conf.content;
        super(conf, element);
        this.setStyle();
    }

    setStyle(){
        let styles = this.conf.styles;
        this.element.style.opacity = styles.opacity || 0;
        this.element.style.transition = styles.transition || "2s";
        this.element.style.position = "absolute";
        this.element.style.top = this.conf.top;
        this.element.style.left = this.conf.left;
        this.element.style.fontFamily = styles.fontFamily || 'Arial';
        this.element.style.fontSize = styles.fontSize || "14px";
        this.element.style.fontWeight = styles.fontWeight || "Normal";
    }


    start(){
        let opcion = this.conf.animated;
        this.element.style.opacity =  opcion.opacity;
        this.element.style.top = opcion.top+"px";
        this.element.style.left = opcion.left+"px";
    }

    stop(){
        console.log("STOP")
        let opcion = this.conf;
        this.element.style.top = opcion.top+"px";
        this.element.style.left = opcion.left+"px";
        this.element.style.opacity = 0;
    }

}