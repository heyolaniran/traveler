"use client"

import { navLinks } from "@/data"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import clsx from "clsx"
export default function SideBar () {

    const [isOpen , setIsOpen] = useState(false); 


    return (
        <>
            <div className="lg:hidden">
                <div className="flex justify-between items-center">
                    <Image src={'menu.svg'} alt="menu" width={30} height={30} className="inline-block cursor-pointer lg:hidden" onClick={() => setIsOpen(true)} />
                </div>
            </div>
            
            <div className={clsx(
              'fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all', isOpen && 'translate-x-0')}>
                
                <section className="text-black bg-slate-50 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                    <Image className="mt-0 mb-8 cursor-pointer" src={'/close.svg'} width={64} height={'64'} alt="cls" onClick={() => setIsOpen(false) } />

                    {navLinks.map((item) => (
                        <Link href={item.href} className="font-bold" key={item.key}>{item.label}</Link>
                    ))}
                </section>

            </div>
        </>
    )
}