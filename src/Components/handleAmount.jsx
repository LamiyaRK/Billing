const getData=(email)=>{
    
    
    const data=localStorage.getItem(email+'amount')
    console.log(data)
    if(data)
    {
        const amount=JSON.parse(data)
        return amount;
    }
    else
    {
        localStorage.setItem(email+'amount',JSON.stringify(10000));
        const amount=10000;
        console.log(amount)
        return amount;
    }

    
}
const setData=(email,money)=>{
 const data=getData(email);
 console.log(data,money)
 if(money>data)
 return false;
 else{
    localStorage.setItem(email+'amount',JSON.stringify(data-money));
    return true
 }

}
export {setData,getData}