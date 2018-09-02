function sumOftotal(event){
    let y = event.target.value;
    while(y.length>1){
        y = digitAdder(y);
    }
    document.querySelector('#result').value = y;
}

const digitAdder=(value)=>{
    const val=value.split('');
    const res=val.reduce((a,b)=>{
        return +a + (+b);
    });
    return '' +res;
}