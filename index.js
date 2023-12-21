const PromptAsync = require("prompt-sync");
const prompt = PromptAsync();

function space() {
    console.log("/n");
};
//Every login information and portal//
let Enterwindow = () => {
    console.log("/n------Welcome to our Hospital-----/n")
    console.log("Enter 1 to register as a patient");
    console.log("Enter 2 to log in as a patient");
    console.log("Enter 3 to Exit");

    let rkey = prompt("Enter:");
    return rkey ;
};

let Reg =() => {
    console.log("-----------Please Register as a patient----------");

    let username = prompt("Enter your name :");
    let gender = prompt("Gender :");
    let age = prompt("age :");
    let contact = prompt("contact number:");
    let password = prompt ("Please Select Your pass :");

    space();

    info[portal] = {
        username,
        gender,
        age,
        contact,
        password,
    };
    console.log("-----Thank you for Registering--------");

    console.log("-----your Information-----");
    console.log( "your ID",username.length);
    console.log(`username : ${username}`); 
    console.log(`Contact : ${contact}`);
    portal++;
};

let portal = 0;
let info =[];

let logininfo= () => {
    console.log("----Enter your login Information");
    enteredname = prompt("Enter your username :");
    pass = prompt("Enter your password :");
    space();
};
 let profile = (username,age,gender,contact) => {
    console.log(`username : ${username}`);
    console.log(`Gender : ${gender}`);
    console.log(`age : ${age}`);
    console.log(`contact : ${contact}`);
 };
 let mainmenu =() => {
    console.log("----MainMenu-----");
    console.log("enter 1 to edit yout information");
    console.log("enter 2 to view Docter's  schedule");
    console.log("enter 3 to back");

    let mkey = prompt("Enter:");
    space();
    return mkey;
 };
let editcontact =() => {
    let newcontact = prompt("Enter a new contact number")
    info[portal].splice(newcontact,null,contact);
};

let changepassword = () => {
    let newpass = prompt("Enter a new password")
};

//edit information //
let editmenu =() => {
    console.log("Enter 1 to edit contact number");
    console.log("Enter 2 to change password");

    let ekey = prompt("Enter:")
    switch(ekey){
        case"1" :
        editcontact ();
        break;

        case "2" :
        changepassword();
        break;

        default: console.log("Sorry, you entered a wrong key try again");
        break;
        
    }
}

 
// main work //


mainloop : while(true) {
    let rkey = Enterwindow();

    switch(rkey){
        case"1":
            Reg();
            break;
            
        case"2":
            if(portal=== 0){
                console.log("Please complete your registration first /n");
                continue mainloop;
            }
            while(true){
                logininfo();
                kuchbhi = -1;
                for(i = 0; i<portal; i++) {
                    if( enteredname===info[i].username && pass===info[i].password){
                        kuchbhi = i;
                        break ;
                    };
                    if(kuchbhi!== -1){
                        secondloop();
                        break
                    }else{
                        console.log("Try again");
                    };
                }
            }
            case"3":

            console.log( "Thank you visit again" /n)
            break mainloop ;

            default:
                console.log("please Enter a valid key");
    }
}
function secondloop()  {
 while(true){
    let mkey = mainmenu()

    switch(mkey){
        case"1":
        editmenu();
        break;

        case"2":
        console.log("Dr. Rachit Sinha : cardiologiest");
        console.log("Dr. Ajay : radiologiest");
        console.log("Dr. Sharma : allrounder");
        break;
        case"3": 
        console.log("visit again---",info[portal].username);
        }

    }
}