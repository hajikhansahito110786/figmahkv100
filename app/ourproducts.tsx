import React from 'react'
import Image from 'next/image'
import Orangechair from "./orangechair.png"
import whitechair1 from "./whitechair1.jpg"
import img2 from "./whitesmall.jpg"
import img11 from "./Image-11.png"
//import pink from "./Image-4.png"
import pink1 from "./pink.png"
import blackbrown from "./blackbrown.png"
import chaircusion from "./chaircusion.png"

const Ourproducts = () => {
  return (
   
       
  
  <>
    <div className="grid grid-cols-4">
  
  <div className='bg-blue-100  '>
   <Image src={img2} alt ='heroimage1' width={106} height={44} />
 
	</div>
    
	  <div>
	 <Image src={pink1} alt ='heroimage1' width={106} height={44} />
 
	</div>
	
  <div>
	<Image src={Orangechair} alt ='heroimage1' width={106} height={44} />
 
	</div>
     
       <div>
	<Image src={whitechair1} alt ='heroimage1' width={106} height={44} />
 
	
	</div>
	
	  <div>
	  <Image src={blackbrown} alt ='heroimage1' width={106} height={44} />
 

	
	</div>
	  <div>
	 <Image src={img11} alt ='heroimage1' width={106} height={44} />
 
	</div>
	
  <div>
   <Image src={chaircusion} alt ='heroimage1' width={106} height={44} />
 

	</div>
     
       <div>
	 <Image src={Orangechair} alt ='heroimage1' width={106} height={44} />
 
	
	</div>
	

	

  	</div>
  </>  
        
       
  )
}

export default Ourproducts