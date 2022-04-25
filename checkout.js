let amount=localStorage.getItem("amount");

updateWallet(amount);
displayMovie();

function updateWallet(amount){
    let wallet=document.querySelector("#wallet");

    wallet.textContent=amount;
}

function displayMovie(){
    let movie = JSON.parse(localStorage.getItem("movie"));

    let display = document.querySelector("#movie");


    let box = document.createElement("div");
    box.setAttribute("id","box");

    let title = document.createElement("h2");
    title.textContent=movie.Title;

    let image = document.createElement("img");
    image.src=movie.Poster;

    box.append(title,image);
    display.append(box);
}

function confirmBooking(){
    let name = document.querySelector("#user_name").value;

    let seats = document.querySelector("#number_of_seats").value;

    if(name!="" && seats!=0){
        if(amount>=seats*100){
            amount=amount-(seats*100);
            localStorage.setItem("amount",amount);
            updateWallet(amount);
            alert("Booking successful!");
        }
        else{
            alert("Insufficient Balance!");
        }


    }
}