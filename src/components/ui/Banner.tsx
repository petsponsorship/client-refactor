import Image from "next/image"
import banner from "../../../public/images/banner.png"

export default function Banner() {

return (
    <>
    <Image src={banner} alt="bannerimg" width={1200} height={300} className="mx-auto mt-4"/>
    <hr className="mt-4 h-6"/>
    </>
)
}