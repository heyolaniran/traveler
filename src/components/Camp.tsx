import CampSite from "./ui/CampSite";
import Image from "next/image";
export default function Camp () {

    return (
        <section className=" flex flex-col 2xl:max-container py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar p-2 flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
                <CampSite backgroundImage="bg-bg-img-1" title="Book your Destination" subtitle="Malibu" people="40+ Booked" />
                <CampSite backgroundImage="bg-bg-img-1" title="Book your Destination" subtitle="Malibu" people="40+ Booked" />
            </div>

            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 xl:regular-64 capitalize text-white">
                        <strong>Feeling Lost </strong> and Not Knowing the way? 
                    </h2>
                    <p className="regular-14 md:regular-16 text-white">
                        Starting from the anxiety of the climbers when visiting a new climbing location,
                        the possibility of getting lost is very large.
                        That's why we are here for those of you who want to start an adventure
                    </p>
                    <Image src="/quote.svg" alt="camp-quote" className="camp-quote" width={186} height={219} />
                </div>
            </div>
        </section>
    )
}