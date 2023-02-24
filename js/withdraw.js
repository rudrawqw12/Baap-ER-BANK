document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');


    const newWithdrawAmountString =withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

    // for text part //


    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawBalanceTotal=parseFloat(previousWithdrawTotalString);

    const currentWithdrawBalance = previousWithdrawBalanceTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawBalance;

   
    // Balance part 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;

    const previousBalance= parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalance-currentWithdrawBalance;
    balanceTotalElement.innerText = currentBalanceTotal;

   
   
   
    withdrawField.value= '';

})