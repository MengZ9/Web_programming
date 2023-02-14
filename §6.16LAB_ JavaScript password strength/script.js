// Your solution goes here 
function isStrongPassword(password){
    if(password.length < 8){
        return false;
    }
    
    if(password.includes("password")){
        return false;
    }

    return  /[A-Z]/.test(password);

}