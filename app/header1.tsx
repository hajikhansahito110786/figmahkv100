//import Image from "next/image";

import Link from "next/link"


function Header1() {

 //export default  
  return (
    
 
<div className="w-full sm:h-[90px] md:h-[80px]   flex justify-center items-center sm:border-b-none md:border-b-2 sm:mb-4 ">

<div className="w-[80%] h-full  flex sm:flex-col md:flex-row justify-between items-center">

	  {/*left side*/}
	 <div >
	<ul className="flex gap-x-5 mr-4 sm:mb-4 md:mb-0">
	 <li>
	<Link className="hover:underline" href={"/"}>home</Link>
	 </li>
	  <li>
	<Link href={"/"}>Product</Link>
	 </li>
	   <li>
	<Link href={"/"}>about</Link>
	 </li>
	 </ul>
	
	 </div>

	 
	  {/*right side*/}
	 <div  >
	
	Contact 0800-0000
	 
	</div>
	
	  
</div>

</div>

   
      
     
   
  );
}
export default Header1;