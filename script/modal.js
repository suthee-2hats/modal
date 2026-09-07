{
    type: "basic",
    title: "",
    content: "",
    showCloseButton: true,
    closeOnOverlay: true,
    closeOnEscape: true
}

export class modal
{
    constructor(type,title,content,showCloseButton,closeOnOverlay,closeOnEscape){
        this.type = type;
        this.content = content;
        this.title = title;
        this.showCloseButton = showCloseButton;
        this.closeOnEscape = closeOnEscape;
        this.closeOnOverlay = closeOnOverlay

    }
    Init(){

        if(type == 'alert'){
            this.alertWindow();
        }
        if(this.type == 'confirm'){
            this.confirmWindow();
        }
        if(this.type == 'form'){
            this.formWindow();
        }
        if(this.type == 'image'){
            this.imageWindow();
        }

    }

    createWindow(){
            
    }
}