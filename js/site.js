function getValue(){
    let message = document.getElementById("message").value;
    let revMessage = reverse(message);
    let pallendrome = pallendromeCheck(message, revMessage);
    displayReversed(revMessage, pallendrome);
}

// bussness logic
function reverse(message){
    let messageArr = "";
    for(let i=message.length-1;i>=0;i--){
        messageArr+=message[i];
    }
    return messageArr;
}


function pallendromeCheck(message,reverse){
    message = message.replace(" ","");
    reverse = reverse.replace(" ","");
    message = message.toUpperCase();
    reverse = reverse.toUpperCase();
    if(message == reverse){
        return true;
    }
    return false;
    //alternative way that uses a for loop to check the pallendrome
    // let stop = Math.ceil(message.length/2);
    // for(let i=0;i<stop;i++){
    //     let reverse = message.length-1-i;
    //     if(message[i]!=message[reverse]){
    //         return false;
    //     }
    // }
    // return true;
}

// display the reversed string
function displayReversed(revMessage, pallendrome){
    let results = document.getElementById("results");
    results.innerHTML = "";
    let div = document.createElement("div"); 
    results.classList.add("revMessage");
    if(pallendrome==true){
        results.innerHTML = revMessage 
        div.innerHTML = " This is Tacocat approved!!";
        results.appendChild(div);
    }else{
        results.innerHTML = revMessage;
        div.innerHTML = "This in NOT Tococat approved";
        results.appendChild(div);
    }
    


}