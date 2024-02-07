//This code is to refresh the page
const logo = document.getElementById('logo');
logo.addEventListener('click', function() {
    location.reload();
});

//This is code for the mouse animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand"); 
    }, 500)
})

//This is code for the sroll back to top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#41EAD4 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//This code is for date
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

//This code is for the contact info page
function sendMail(){
    var params = {
        name: document.getElementById("name").value , 
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value
    };
    
    const serviceID = "service_zed67yo";
    const templateID = "template_futncjs";

    emailjs.send(serviceID,templateID,params)
    .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully")
})
    .catch(err=>console.log(err));
}





