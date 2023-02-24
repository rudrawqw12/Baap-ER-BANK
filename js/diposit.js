document.getElementById('btn-diposit').addEventListener('click',function(){
    const dipositField = document.getElementById('deposit-field');

    // do string
    const newDipositAmountString =dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    
    // text part
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =depositTotalElement.innerText;

//  do string 
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    depositTotalElement.innerText = newDipositAmount;


    const currentDipositTotal = previousDepositTotal+newDipositAmount;
   
    depositTotalElement.innerText =currentDipositTotal;


    // balance part //

    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal+newDipositAmount;

    balanceTotalElement.innerText = newBalanceTotal;


   

    dipositField.value = '';
})