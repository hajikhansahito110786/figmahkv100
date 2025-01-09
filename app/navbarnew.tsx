import React from 'react'

import Image from 'next/image'

import logo1 from "./logo1.png"
import Link from 'next/link'
const Navbarnew = () => {
 
  
  return (

   <div
   className='bg-green-200 width: 1920px;
height: 4898px;
top: -1947px;
left: -3131px;
gap: 0px;
opacity: 0px;
'>
{/*main starting div*/}

    <div className='bg-[#272343] width: Fixed (1,920px)px;
height: Hug (45px)px;
padding: 14px 300px 14px 300px;
gap: 0px;
justify: space-between;
opacity: 0px;

text-zinc-200

'>
  {/*ist  div in home */}
  Free Shipping on All Orders Over 50$  </div>


<div className='bg-[#F0F2F3] width: Fixed (1,920px)px;
height: Hug (84px)px;
padding: 20px 300px 20px 300px;
gap: 0px;
justify: space-between;
opacity: 0px;
'>
    {/*scardt -2nd divin home */}



<div className='w-[40px] h-[40px] justify-center items-center'>
 < Image src={logo1} alt ='hero-image' width={434} height={584} />
 </div>
<div>
  Comfarty
</div>

</div>

<div className='bg-[#da6b6b] width: Fixed (1,920px)px;
height: Hug (84px)px;
padding: 20px 300px 20px 300px;
gap: 0px;

opacity: 0px;
box-shadow: 0px 1px 0px 0px #E1E3E5;

'>
    {/*scardt -3rd button divin home */}
   
    <ul className='bg-[#FFFFFF]
    width: Fixed (1,920px)px;
height: Fixed (74px)px;
padding: 14px 300px 14px 300px;
gap: 0px;
justify: space-between;
opacity: 0px;
box-shadow: 0px 1px 0px 0px #E1E3E5;

'>  
    <li className="inline-block mx-1 "><Link href="/">Home</Link></li>
    <li className="inline-block mx-1 "><Link href="/Shop">Shop</Link></li>
    <li className="inline-block mx-1 "><Link href="/Productpages">Product</Link>t</li>
    <li className="inline-block mx-1 "><Link href="/Pages">Pages</Link></li>
    <li className="inline-block mx-1 "><Link href="/About">About</Link></li>
    </ul>

</div>







 
 

    
  

   
   
    </div>
  )
}

export default Navbarnew;
