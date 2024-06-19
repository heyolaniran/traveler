import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data";
import Button from "./ui/Button";
import { IoArrowForward } from "react-icons/io5";

export default function NavBar() {

    return (
        <nav className=" flex justify-between container relative z-30 py-5 ">
            <Link href={'/'}>
                <Image src={'/hilink-logo.svg'} alt="Home" width={74} height={29} className=""  />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {
                    navLinks.map((item) => (
                        <Link href={item.href} key={item.key} className="regular-16 text-gray-600  flex justify-center cursor-pointer pb-1.5  ease-out duration-100  transition-all hover:font-bold ">
                            {item.label}
                        </Link>
                    ))
                }
            </ul>

            <div className="lg:flexCenter hidden">
                <Button type="button" title="Checkout" position="right" icon={<IoArrowForward />} variant="btn_dark_green" />
            </div>
        </nav>
    )
}