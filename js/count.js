document.addEventListener("DOMContentLoaded",()=>{
    const   counterelement=document.getElementById("counter");
    const   targetcount=1000;
    const   duration=2000;
    const   interval=10;
    let currentcount=0;
    const   increment=targetcount/(duration/interval);
    const   updatecounter=()=>
    {
        currentcount+=increment;
        if(currentcount>=targetcount)
        {
            currentcount=targetcount;
            clearInterval(timer);
            
        }           
         counterelement.textContent=Math.floor(currentcount);

    };
    const timer=setInterval(updatecounter,interval);


    const   counterelement1=document.getElementById("mentorcounter");
    const   targetcount1=400;
    const   duration1=2000;
    const   interval1=10;
    let currentcount1=0;
    const   increment1=targetcount1/(duration1/interval1);
    const   updatecounter1=()=>
    {
        currentcount1+=increment1;
        if(currentcount1>=targetcount1)
        {
            currentcount1=targetcount1;
            clearInterval(timer1);
            
        }           
         counterelement1.textContent=Math.floor(currentcount1);

    };
    const timer1=setInterval(updatecounter1,interval1);


    const   counterelement2=document.getElementById("videoscounter");
    const   targetcount2=200;
    const   duration2=2000;
    const   interval2=10;
    let currentcount2=0;
    const   increment2=targetcount1/(duration1/interval1);
    const   updatecounter2=()=>
    {
        currentcount2+=increment2;
        if(currentcount2>=targetcount2)
        {
            currentcount2=targetcount2;
            clearInterval(timer2);
            
        }           
         counterelement2.textContent=Math.floor(currentcount2);

    };
    const timer2=setInterval(updatecounter2,interval2);

    
    
});


