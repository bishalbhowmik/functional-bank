
function getInput(input){
        
    const inputField= document.getElementById(input);
    const newDepositText = inputField.value;
    const newDeposit = parseFloat(newDepositText);
    inputField.value ='';
    return newDeposit;

}

function getTotalValue(totalId, amount){
    
    const deposit =document.getElementById(totalId);
    const previousDepositText = deposit.innerText;
    const previousDeposit = parseFloat(previousDepositText);

    

    const newDepositTotal = amount + previousDeposit;

    deposit.innerText = newDepositTotal;


}

function currentBalance(){
    const balance= document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceNumber = parseFloat(balanceText);

    return balanceNumber;
}

function getUpdatedBalance(amount,isadd){
    
    const balance= document.getElementById('balance-total');
    // const balanceText = balance.innerText;
    // const balanceNumber = parseFloat(balanceText);

    const balanceNumber = currentBalance();

    
    

    if(isadd==true){
         balance.innerText = balanceNumber+ amount;
    }
    else{
        balance.innerText = balanceNumber- amount;
    }

    // balance.innerText = balanceTotal;
}





document.getElementById('deposit-button').addEventListener('click', function(){
    
    // const inputField= document.getElementById('deposit-input');
    // const newDepositText = inputField.value;
    // const newDeposit = parseFloat(newDepositText);

   
  

    const newDeposit = getInput('deposit-input');
    
    // const deposit =document.getElementById('deposit-total');
    // const previousDepositText = deposit.innerText;
    // const previousDeposit = parseFloat(previousDepositText);

    if(newDeposit>0){
        getTotalValue('deposit-total',newDeposit);
    }

    if(newDeposit>0){
        getUpdatedBalance(newDeposit,true);
    }


    

    // const newDepositTotal = newDeposit + previousDeposit;

    // deposit.innerText = newDepositTotal;

    


    // const balance= document.getElementById('balance-total');
    // const balanceText = balance.innerText;
    // const balanceNumber = parseFloat(balanceText);
    // const balanceTotal = balanceNumber+ newDeposit;

    // balance.innerText = balanceTotal;

 
    

    
    

});

    // Withdraw 

    document.getElementById('withdraw-button').addEventListener('click', function(){

        // const withdrawInput = document.getElementById('withdraw-input');
        // const withdrawInputText= withdrawInput.value;
        // const withdrawInputTextNum= parseFloat(withdrawInputText);

       const withdrawInputTextNum= getInput('withdraw-input')

        // const withdrawAmount= document.getElementById('withdraw-total');
        // const withdrawAmountText= withdrawAmount.innerText;
        // const withdrawAmountNum= parseFloat(withdrawAmountText);



        // const withdrawTotal = withdrawAmountNum + withdrawInputTextNum;

        // withdrawAmount.innerText = withdrawTotal;

        const currentB = currentBalance();

       

        if(withdrawInputTextNum>0 && withdrawInputTextNum < currentB){
            getTotalValue('withdraw-total',withdrawInputTextNum);

            getUpdatedBalance(withdrawInputTextNum,false);
        }

        if(withdrawInputTextNum > currentB){
            console.log('You Can not Withdraw more than what you have');
        }



       

        // withdrawInput.value = '';


        //Update Balance 

    //    const newBalance =  document.getElementById('balance-total');
    //    const newBalanceText = newBalance.innerText;
    //    const newBalanceNum = parseFloat(newBalanceText);

    //    const updatedBalance = newBalanceNum - withdrawInputTextNum;

    //    newBalance.innerText = updatedBalance;

        
        
});
