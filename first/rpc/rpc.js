let cPoints=0;
let uPoints=0;


let selection=(userChoice)=>{
    document.getElementById("userChoice").innerHTML=userChoice;
    let arr=['rock','paper','scissor']
    let computerChoice=arr[Math.floor(Math.random()*(arr.length))];
    document.getElementById("computerChoice").innerHTML=computerChoice;
    console.log('Computer user choice is : ',computerChoice);
    console.log('Your choice is : ',userChoice);

    if(userChoice==computerChoice){
        console.log('Computer: ', cPoints ,'User: ', uPoints ," & This round is a draw");
    }else if (userChoice =='rock' && computerChoice=='paper' ||userChoice =='paper' && computerChoice=='scissor' || userChoice =='scissor' && computerChoice=='rock'){
        cPoints++;
        document.getElementById("computerScore").innerHTML=cPoints;
        if(cPoints<10){    
            console.log('Computer: ', cPoints ,'User: ', uPoints ," & Computer won this round");
        }else{
            document.getElementById("winner").innerHTML="Computer ";
            alert('Computer is the winner');
        }

    }else{
        uPoints++;
        document.getElementById("userScore").innerHTML=uPoints;
        if(uPoints<10){    
            console.log('Computer: ', cPoints ,'User: ', uPoints ," & User won this round");
        }else{
            document.getElementById("winner").innerHTML="User ";
            alert('User is the winner');
        }
    }
    
}