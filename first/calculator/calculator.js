let result=document.getElementById("answer");
let calculate=(number)=>{
    if(number=='C'){
        result.value="";
    }else if(number=='DEL'){
        result.value=result.value.slice(0,-1);
    }else{
        result.value+=number;
    }
}
let answer=()=>{
    try{
        result.value=eval(result.value);
    } 
    catch(err){
        alert("enter valid values");
    }
}
