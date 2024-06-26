import { ReactNode } from "react";

export default function FooterColumn({title , children} : {title : string , children : ReactNode}) {

    return (
        <div className="flex flex-col gap-5 ">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}