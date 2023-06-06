let start=document.getElementById('start');
let a=60;
let b=5;
let c=2;
let x=0;
let y=0;
let z=0;
if(a==60)
{
    start.addEventListener('click',function()
{
    let st=document.getElementById('st');
   x=setInterval(() => {
    st.innerHTML=a;
    a--;
    if(a==0)
    {
        a=60;
    }
   }, 1000);

   let mt=document.getElementById('mt');
  y=setInterval(() => {
    mt.innerHTML=b;
    b--;
    if(b==0)
    {
        let ht=document.getElementById('ht');
        ht.innerHTML=c;
        c--;
        if(c==-1)
        {
            c=2;
            ht.innerHTML=0;
        }
     b=5;
    }
},60000);


});
}
let stop=document.getElementById('stop');
stop.addEventListener('click',function()
{
    clearInterval(x);
    clearInterval(y);
    clearInterval(z);
});

let reset=document.getElementById('reset');
reset.addEventListener('click',function()
{
    a=60;
    b=5;
    c=2;
    document.getElementById('st').innerHTML=60;
    document.getElementById('mt').innerHTML=5;
    document.getElementById('ht').innerHTML=2;
})