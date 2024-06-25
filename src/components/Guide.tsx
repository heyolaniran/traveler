
import Image from "next/image"

export default function Guide() {

    return (
        <section className="flex-col flexCenter">
            <div className=" padding-container max-w-container px-4 w-full pb-24 ">
                <Image src={'/camp.svg'} width={50}  height={50} alt="camp"/>
                <p className="uppercase bold-14 regular-16 -mt-1 mb-3 text-green-50"> We are here for you </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10 px-4">
                    <h2 className="capitalize bold-40 lg:bold-60 xl:max-w-[390px] ">Guide you to easy Path</h2>

                    <p className="text-gray-400 regular-16 max-w-[520px] text-center  lg:text-justify">
                        Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. 
                        Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
                    </p>
                </div>

            </div>

            <div className="relative flexCenter max-container w-full">
                <Image src={'/boat.png'} alt="boat" width={1440} height={580} className="object-cover w-ful object-center 2xl:rounded-5xl" />

                <div className="absolute flex py-8 pl-5 pr-7 bg-white rounded-3xl border shadow-md md:left-[5%] gap-3 lg:top-20 ">
                    <Image src={'/meter.svg'} alt="road" width={16} height={158} className="h-full w-auto" />
                    <div className="flexBetween flex-col">
                        <div className="flex flex-col w-full">
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">Destination</p>
                                <p className="text-green-50 bold-16">48 min </p>
                            </div>
                            <p className="bold-20 mt-2">Agua Calientes</p>
                        </div>

                        <div className="flex flex-col w-full">
                            <p className="regular-16 text-gray-20">Start Track</p>
                            
                            <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan </h4>
                        </div>
                    </div>
                </div>
            </div>


            
        </section>
    )
}