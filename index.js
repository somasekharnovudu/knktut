function alertFunction(){
    const altText1 = prompt("My name is :", "Enter your name");
    const altText2=document.querySelector("#textBtn");
    altText2.innerText = altText1;
    altText2.hidden=false;
    alert(altText1);
}