export class formvalidation {

    constructor(container,rules = {}) {
        this.container = document.querySelector(container);
        this.rules = rules;
        

       
    }

    init() {

        if (!this.container) {
            console.log("Form was NOT found");
            return;
        }

        console.log("Form was found:", this.container);

       


        this.container.addEventListener("blur", (event) => {

            
            const field = event.target;

            const fieldRules =this.rules[field.id];

            if(event.target.type === "text"){
                this.textValidation(event.target);
            }
            if(event.target.type === "email"){
                this.emailValidation(event.target);
            }
            if(event.target.type === "password"){
                this.passwordValidation(event.target);

            }
            if(event.target.type === "date"){
                this.dobValidation(event.target);
            }
            if(event.target.type === "number"){
                this.ageValidation(event.target);
            }
            if (fieldRules?.match) {
                this.confirmPasswordValidation(
                    field,
                    fieldRules.match
                );
            }
            if (fieldRules?.max) {
                console.log(fieldRules);
                this.ageValidation(
                    field,
                    fieldRules.max,
                    fieldRules.min
                 )
                 
                 
            }
            if(fieldRules?.limit){
                console.log(fieldRules);
                this.phoneNumbervalidation(field,fieldRules.limit)
            }
            if(event.target.tagName == "SELECT"){
                console.log(event.target);
                this.dropDownValidation(event.target);
            }
            
        }, true);
    }

    //text vaidation completed !!
    textValidation(input_field){
        const value = input_field;
        const errorDisplay = input_field.nextElementSibling;
    
        const pattern = /^[A-Za-z]+$/;
        value.pattern = pattern;
       if(value.validity.valueMissing){
          
            this.showErrorInInput(errorDisplay,"name can't be blank !!");
            return false;
    
        }
        if(value.validity.patternMismatch)
        {
           
            this.showErrorInInput(errorDisplay,"enter a valid username !!");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        
    
       return true;

       
    }
    emailValidation(email){
    
        const value = email;
        const errorDisplay = email.nextElementSibling;
        if(value.validity.valueMissing){
            this.showErrorInInput(errorDisplay,"enter value for email");
            return false;
        }
        if(value.validity.typeMismatch)
        {
            this.showErrorInInput(errorDisplay,"write a valid email");
            return false;
    
        }
        this.showErrorInInput(errorDisplay,"");
        
        return true;
    
    }
    passwordValidation(password){
        const value = password.value;
        const  errorDisplay = password.nextElementSibling;
    
    
        if(value.length < 8){
           
            this.showErrorInInput(errorDisplay,"password should contain atleast 8 charecter !!");
            return false;
        }
        if(!/[A-Z]/.test(value)){
            this.showErrorInInput(errorDisplay,"password should contain atleast one  upper class letter !!");
            return false;
        }
        if(!/[a-z]/.test(value)){
            this.showErrorInInput(errorDisplay,"password should contain atleast one  lower class letter!!");
            return false;
        }
        if(!/[0-9]/.test(value)){
            this.showErrorInInput(errorDisplay,"password should contain atleast one  numerical value !!");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    }


    dobValidation(dob){
        const value = dob.value;
        const  errorDisplay = dob.nextElementSibling;
     
        phone
        if(value === ""){
           
            this.showErrorInInput(errorDisplay,"enter dob");
            return false;
        }
    
        const selectDate =new  Date(value);
        const today = new Date();
        const maxLimit = new Date(
                                  today.getFullYear() - 150,
                                  today.getMonth(),
                                  today.getDay()
                                );
    
        if(selectDate >= today){
            
            this.showErrorInInput(errorDisplay,"enter a valid dob");
            return false;
        }
        if(selectDate < maxLimit){
          
            this.showErrorInInput(errorDisplay,"age must be less than 150 years");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    
    }
    ageValidation(age,max,min){
        const value = age.value;
        const errorDisplay = age.nextElementSibling;
        if(value === ""){
         
            this.showErrorInInput(errorDisplay,"enter age");
            return false;
        }
        if(value >max || value<min){
            this.showErrorInInput(errorDisplay,"age range between "+min+" to "+max);
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    
    }

    confirmPasswordValidation(field, matchSelector) {
        console.log("field:", field);
        console.log("field id:", field.id);
        console.log("matchSelector:", matchSelector);

        console.log("function confirm password is called !!");

        const originalField =
            this.container.querySelector(matchSelector);
    
        const errorDisplay =
            field.nextElementSibling;
    
        if (field.value !== originalField.value) {
    
            this.showErrorInInput(
                errorDisplay,
                "Passwords should be the same!"
            );
    
            return false;
        }
    
        this.showErrorInInput(errorDisplay, "");
    
        return true;
    }

   dropDownValidation(dropdown){
        const value = dropdown;
        const errorDisplay =  dropdown.nextElementSibling;
        if(value.value === ""){
            
            this.showErrorInInput(errorDisplay,"select the region");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    
    }

    phoneNumbervalidation(Number,limit){
        const value = Number;
        const errorDisplay = Number.nextElementSibling;
        if(value.value.length != limit){
            
            this.showErrorInInput(errorDisplay,"number must be "+limit+" numbers");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    
    }

    



    showErrorInInput(displayError,msg){

        displayError.innerHTML = msg;
      
    
    } 
}