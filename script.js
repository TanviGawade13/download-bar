let count = 0;
let h2 = document.querySelector("h2");
let progressDiv = document.querySelector(".progress-bar")
let progressBar = progressDiv.querySelector(".progress")
let p = document.querySelector("p")
let seconds = 5;

let interval = setInterval(function(){
    if(count<=99){
        count++;
        progressBar.style.width = `${count}%`
        p.textContent = `${count}% completed`
    }else{
        h2.textContent = "Downloaded";
        clearInterval(interval);
    }
} , (seconds*10));