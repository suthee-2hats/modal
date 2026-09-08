

class modal
{
    constructor(type,
        title,
        content,
        showCloseButton,
        closeOnOverlay,
        closeOnEscape,
        container,
        options)
        {

        this.type = type;
        this.content = content;
        this.title = title;
        this.showCloseButton = showCloseButton;
        this.closeOnEscape = closeOnEscape;
        this.closeOnOverlay = closeOnOverlay;
        this.container = container;
        this.options = options;
        this.popup = document.querySelector(this.container);
    }

    
    Init(){
          this.createModal();
          this.closePopup()
    }

    createModal(){

        const popup = document.querySelector(this.container);
        popup.innerHTML = `<div class="modal">

        <button class="modal-close">×</button>
        
        <div class="modal-content">
        
        
        </div>
        
        </div>`;

        if(this.type == 'basic'){
            this.createBasic();
        }
 
        if(this.type == 'alert'){
            this.createAlert();
        }
        if(this.type == 'confirm'){
            this.createConfirm();
        }
       if(this.type == 'form'){
            this.createForm();
        }
               /* 
        if(this.type == 'image'){
            this.createImage();
        }
            */


    }

    createBasic(){
        const innercontainer = document.querySelector(".modal-content");
        innercontainer.innerHTML = `
                                    <h2>${this.title}</h2>
        
                                    <p>${this.content}</p>

                                    <button class="modal-action">
                                    Continue
                                    </button>`;
    }
    createAlert() {
        const innercontainer = document.querySelector(".modal-content");
    
        innercontainer.innerHTML = `
            <img class="modal-alert-image" src="/img/alert.png" alt="Alert">
    
            <h2>${this.title}</h2>
    
            <p>${this.content}</p>
    
            <button class="modal-action">
                Continue
            </button>
        `;
    }
    createConfirm() {

        const innercontainer = document.querySelector(".modal-content");
    
        //this cause refence error if there is no rules that cause error 
        const confirmText =this.options.confirm && this.options.confirm.confirm ?
                           this.options.confirm.confirm : "Confirm";
    
        const cancelText =
                           this.options.confirm && this.options.confirm.not_confirm ?
                           this.options.confirm.not_confirm : "cancel";

                           innercontainer.innerHTML = `
                           <h2>${this.title}</h2>
                       
                           <p>${this.content}</p>
                       
                           <div class="modal-buttons">
                               <button class="modal-not-confirm">
                                   ${cancelText}
                               </button>
                       
                               <button class="modal-confirm">
                                   ${confirmText}
                               </button>
                           </div>
                       `;
    }

    createForm() {

        const innercontainer =
            this.popup.querySelector(".modal-content");
    
        const formOptions = this.options.form;
    
        let fieldsHTML = "";
    
        formOptions.fields.forEach((field) => {
    
            fieldsHTML += `
                <div class="form-group">
    
                    <label for="${field.id}">
                        ${field.label}
                    </label>
    
                    <input
                        type="${field.type}"
                        id="${field.id}"
                        placeholder="${field.placeholder || ""}"
                        ${field.required ? "required" : ""}
                    >
    
                    <span class="error"></span>
    
                </div>
            `;
        });
    
        innercontainer.innerHTML = `
            <h2>${this.title}</h2>
    
            <p>${this.content}</p>
    
            <form id="modal-form">
                ${fieldsHTML}
    
                <button type="submit">
                    Submit
                </button>
            </form>
        `;
    }

    
    closePopup(){
        if(this.closeOnEscape){
            document.addEventListener("keydown",(event)=>{
                 if(event.key === "Escape"){
                    this.close();
                 }
            })

        }
        if (this.closeOnOverlay) {
            this.popup.addEventListener("click", (event) => {
                if (event.target === this.popup) {
                    this.close();
                }
            });
        }
        if (this.showCloseButton) {
            const close = this.popup.querySelector(".modal-close");
            close.addEventListener("click",(event)=>{
                
                this.close();
            })
        }
        
    }
    

    close(){
       
        this.popup.style.display = "none";

    }

}

const obj = new modal("form","Register","Fill the details",true,true,true,".modal-overlay",{
            confirm:{
                not_confirm : "cancel",
                confirm : "delete"

            },
            alert:{
                button : "okay"
            },
            form: {
                fields: [
                    {
                        label: "Username",
                        type: "text",
                        id: "username",
                        placeholder: "Enter username",
                        required: true
                    },
                    {
                        label: "Email",
                        type: "email",
                        id: "email",
                        placeholder: "Enter email",
                        required: true
                    },
                    {
                        label: "Password",
                        type: "password",
                        id: "password",
                        placeholder: "Enter password",
                        required: true
                    }
                ],
        
                rules: {
                    username: {},
                    email: {},
                    password: {}
                }
            }
});


obj.Init();


