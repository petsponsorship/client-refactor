import Image from "next/image"
import floating from "../../../public/images/floating.png"

export default function FloationBtn() {

return <Image 
className="sticky top-full left-full mb-4 mr-8"
src={floating} alt="floatingBtn" width={60} height={60}/>
}