import { FEATURES } from "@/data";
import Image from "next/image";
import FeatureItem from "./ui/FeatureItem";
export default function Features () {

    return (
        <section className="borrder-2 border-blue-500 flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
                <div className="max-container padding-container relative w-full flex justify-end">
                    <div className="flex flex-1 lg:min-h-[900px]">
                        <Image src={'/phone.png'} alt="phone" width={400} height={1000} className="feature-phone" />
                    </div>
                    
                    <div className="z-20 flex flex-col w-full lg:w-[60%]">
                        <div className="relative">
                            <Image src={'/camp.svg'} alt="camp" width={50} height={50} className="absolute w-10 -left-[-5px] top-[-28px] lg:w-[50px]" />
                            <h2 className="capitalize bold-40 lg:bold-64">Our Features</h2>
                        </div>

                        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mb-20 lg:gap-20">
                            {FEATURES.map((feature, index) => (
                                <FeatureItem key={index} title={feature.title} icon={feature.icon} variant={feature.variant} description={feature.description} />
                            ))}
                        </ul>
                       
                    </div>
                </div>
        </section>
    )
}