let urlParamComs=new URLSearchParams(window.location.search);
let msgElement=document.getElementById("messageCom");
if(urlParamComs.has('errorCom')){
    let errorMessage=urlParamComs.get('errorCom');
    msgElement.innerText=errorMessage;
    msgElement.style.display="block";
    msgElement.classList.add("error");
    msgElement.style.backgroundColor="#ff6767";
}else if (urlParamComs.has('corCom')){
    let successMessage = urlParamsCom.get('corCom'); // corregido
    msgElement.innerText = successMessage;
    msgElement.style.display = "block";
    msgElement.classList.add("correcto");
    msgElement.style.backgroundColor = "rgb(36, 205, 59)";
}