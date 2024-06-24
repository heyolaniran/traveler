import Image from "next/image";
import Button from "./ui/Button";
import { IoDownload, IoPlay } from "react-icons/io5";

export default function Hero() {

    return (
        <section className="max-container  flex fex-col border-2 padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
            <div className="hero-map" />

            <div className="relative z-20 px-6  flex-1 fex-col xl:w-1/2">
                <Image src={'/camp.svg'} alt="camp" height={50} width={50} className=" absolute left-[-5px] top-[-30px]  w-10 lg:w-[50px]" />
                <h1 className="bold-52 lg:bold-88 mt-2">
                    Plan your <span className=" text-green-400 struggle">Travel</span> 
                </h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] lg:text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptas ipsa! Eaque vero provident ullam, quas corporis non omnis recusandae amet libero at aut ad delectus illo quod unde tempora!
                </p>

                <div className="flex flex-wrap pb-16 gap-5">
                    <div className="flex items-center gap-2 mt-2">
                        {
                            Array(5).fill(1).map((_,index) => (
                                <Image src={'/star.svg'} width={24} height={24} className="" alt="*" key={index} />
                            ))
                        }
                    </div>

                    <p className="bold-16 lg:bold-20 text-blue-70"> 198K <span className=" underline regular-16 ml-1"> Excellent Reviews </span> </p>
                </div>
                <div className="flex flex-col  gap-3 w-full sm:flex-row">
                    <Button type="button" title="Get the App" icon={<IoDownload size={24} color="#FFFFFF" />} position="left" variant="btn_green" otherClasses="lg:mb-4" />
                    <Button type="button" title="How to Use" icon={<IoPlay size={24} color="rgb(74 222 128)" />} position="left" variant="btn_white_text" />
                </div>
            </div>
           
           <div className="flex items-start flex-1 ">
            <div className="z-20 relative lg:w-[268px]  flex-col gap-8  bg-green-90  rounded-3xl px-7 py-8">
                <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className="regular-16 text-gray-20">Location </p>
                        <Image src={'/close.svg'} alt="" width={24} height={24}  />
                    </div>
                    <p className="bold-20 mb-4  text-white" > Aguas Calientes </p>
                </div>
                    
                    <div className="flexBetween px-2">
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">Distance  </p>
                            <p className="bold-20 text-white"> 173.8 Mi </p>
 
                        </div>

                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">Elevation  </p>
                            <p className="bold-20 text-white text-center"> 2Km </p>
                        </div>
                       
                       
                    </div>
                
            </div>
           </div>
        </section>
    )
}