

updateWallet();

function addToWallet(){
    let amount=document.querySelector("#amount").value;

    localStorage.setItem("amount",amount);

    updateWallet();
}

function updateWallet(){
    let wallet=document.querySelector("#wallet");

    let amount=localStorage.getItem("amount");

    wallet.textContent=amount;
}