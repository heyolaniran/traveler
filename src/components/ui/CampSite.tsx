import { PEOPLE_URL } from "@/data";
import Image from "next/image";

export default function CampSite({backgroundImage ,  title , subtitle , people } : { backgroundImage : string , title : string , subtitle :  string , people : string}) {

    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image src={'/map.svg'} width={28} height={28} alt="map" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-white bold-18 ">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>
                <div className="flexCenter gap-6">
                    <span className="flex -space-x-2 overflow-hidden">
                        {PEOPLE_URL.map((url , index) => (
                            <Image src={url} alt="" className="inline-block h-10 w-10 rounded-fill" key={index} width={52} height={52} />
                        ))}
                    </span>
                    <p className="bold-16 text-white">{people}</p>
                </div>
            </div>
        </div>
    )
}