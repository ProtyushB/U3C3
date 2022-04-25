updateWallet();

let id;

// url="http://www.omdbapi.com/?apikey=6a41ddca&s=";

function updateWallet(){
    let wallet=document.querySelector("#wallet");

    let amount=localStorage.getItem("amount");

    wallet.textContent=amount;
}

async function search(){
    try{

        const query = document.querySelector("#search").value;

        const res = await fetch(`http://www.omdbapi.com/?apikey=ffa9b74a&s=${query}`);

        const data = await res.json();

        return data.Search;

    }catch(err){
        console.log(err);
    }
}

function appendMovies(data){
    let display = document.querySelector("#movies");
    display.innerHTML=null;

    data.map(function (ele){
        let box = document.createElement("div");
        box.setAttribute("id","box");

        let title=document.createElement("h2");
        title.textContent=ele.Title;

        let image=document.createElement("img");
        image.src=ele.Poster;

        let bookbtn=document.createElement("button");
        bookbtn.innerText="Book Now";
        bookbtn.setAttribute("class","book_now");
        bookbtn.addEventListener("click",function (){
            bookMovie(ele);
        })

        box.append(title,image,bookbtn);
        display.append(box);
    })
}

async function main(){
    let data = await search();

    if(data===undefined){
        return false;
    }

    appendMovies(data);
}

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function (){
        func();
    },delay);
}

function bookMovie(ele){
    localStorage.setItem("movie",JSON.stringify(ele));

    window.location.href="checkout.html";
}