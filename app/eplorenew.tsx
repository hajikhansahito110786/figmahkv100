import React from 'react'
import Image from 'next/image'
import Orangechair from "./orangechair.png"
import whitechair1 from "./whitechair1.jpg"
import img2 from "./whitesmall.jpg"
import img11 from "./Image-11.png"

const Explorenew = () => {
  return (
   
       
  
  <>
    <div className="grid grid-cols-[300px,auto,auto,auto]">
  
  <div className='bg-blue-100 col-span-2 row-span-2 '>
  <Image src={Orangechair} alt ='heroimage1' width={106} height={44} />
 
  
  
	</div>
    
	  <div>
	<Image src={whitechair1} alt ='heroimage1' width={106} height={44} />
 
	
	</div>
	
  <div>
		<Image src={img2} alt ='heroimage1' width={106} height={44} />
	
	</div>
     
       <div>
	
	<Image src={img11} alt ='heroimage1' width={106} height={44} />
 
	</div>
	
	  <div>
	<Image src={img2} alt ='heroimage1' width={106} height={44} />
 
	
	</div>

	
	

  	</div>
  </>  
        
       
  )
}

export default Explorenew