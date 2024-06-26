import { IoIosDownload, IoLogoAndroid } from "react-icons/io";
import Button from "./ui/Button";
import Image from "next/image";

export default function CTA () {

    return (
        <section className="flexCenter flex-col w-full pb-[150px]">

            <div className="get-app">
                <div className="z-20 flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] capitalize">Get for free Now</h2>
                    <p className="regular-16 py-4 text-gray-10">Available on Android & iOS</p>

                    <div className="flex flex-col gap-3 xl:flex-row whitespace-nowrap ">
                        <Button type="button" title="Download on App Store" icon={<IoIosDownload />} position="left" variant="btn_white" />
                        <Button type="button" title="Download on Play Store" icon={<IoLogoAndroid />} position="left" variant="btn_dark_green_outline" />
                    </div>
                </div>

                    <div className="flex flex-1 items-center justify-end">
                        <Image src={'/phones.png'} alt='phone' width={550} height={870} />
                    </div>
            </div>

        </section>
    )
}