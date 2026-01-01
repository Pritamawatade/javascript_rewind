console.log("-----Time,,,,");

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");



const btn = document.getElementById("t");


function onCli(){
    
    const now  = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds().toString().padStart(2, "0")
    let miliseconds = now.getMilliseconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? 'PM' : 'AM';
    timeElement.innerText =  `${hours%12  || 12}:${minutes} : ${seconds}: ${miliseconds < 99 ? '0'+miliseconds : miliseconds} ${ampm}`;
}

// const id = setTimeout(onCli, 1000);
setInterval(onCli, 100)