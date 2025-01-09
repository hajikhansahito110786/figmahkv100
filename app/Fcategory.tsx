import React from 'react'
import Image from 'next/image'

//import topcone from "./topc1.png"
import topctwo from "./topctwo.png"
import topcthree from "./top3.png"

//import img0 from "./Products0.png"
//import Products1 from "./Products1.png"
//import img2 from "./whitesmall.jpg"
//import orangechair from "./orangechair.png"
import redchair from "./redchair.png"
//import whitechair1 from "./whitechair1.jpg"


const Feutureproductcategory = () => {
  return (
   
    <div className='width: 1920px;height: 461px;top: 1270px;gap: 0px;opacity: 90px;'>
 {/*start div0*/}




  



<div className='flex'>{/*start div2*/}

       <div className="flex overflow-y-hidden overflow-x-scroll border-4 gap-x-5 relative">

        
<div className='bg-slate-400 -z-10 absolute top-1' >


<Image src={topcthree} alt="whitesmalljpg"
       
       className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full 
       width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px; "/>
</div>
</div>


<div className="flex overflow-y-hidden overflow-x-scroll border-4 gap-x-5 relative">

<div>
<Image src={topctwo} alt="product0whitesmalljpg"

  className="z-50 rounded-t-[0.625rem] h-[100px] rounded-b-none w-full 
  width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 70px;


  "
/>
</div>
<div className='bg-slate-400 -z-10 absolute top-1' >


<Image src={redchair} alt="whitesmalljpg"

className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full 
width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px; "/>
</div>

<div>

<Image src={topcthree} alt="profileabove" 
                 
         
         className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full
         width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px;

         
         "
         
         />


</div>






</div>












































  {/*end div2*/}</div>





      
 {/*end div0*/}</div>
);
}
export default Feutureproductcategory