function alertFunction(){
    const altText1 = prompt("My name is :", "Enter your name");
    const altText2=document.querySelector("#textBtn");
    altText2.innerText = altText1;
    altText2.hidden=false;
    alert(altText1);
}
const valadder=(event)=>{
    let x=event.target.value;
    while(x.length>1){
        x=digitAdder(x);
    }
    document.querySelector('#result').value=x;
}
const digitAdder=(value)=>{
    const val=value.split('');
    const res= val.reduce((a,b)=>{
        return +a+(+b);
    });
    return ''+res;
}