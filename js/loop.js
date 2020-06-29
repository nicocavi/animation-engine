class Loop{

    constructor(time, root, elements){
        this.time = time;
        this.root = root;
        this.elements = elements
        this.index = 0;
        this.state = true;
        this.root.appendChild(this.elements[this.index].element)
        setInterval(()=>{
            this.init()
        }, this.time);
    }

    init(){

        if(this.state){
            this.elements[this.index].start()
        }else{

            this.elements[this.index].stop()
            this.index++;
            if(this.index >= this.elements.length){
                this.index = 0;
            }
            this.root.appendChild(this.elements[this.index].element)
        }

        this.state = !this.state;

    }

    addElement(element){
        this.elements.append(element)
    }

}