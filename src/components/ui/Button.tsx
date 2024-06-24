
export default function Button ({title, type, icon, position , variant , otherClasses} : {title : string , type : "submit" | "reset" | "button" , icon : React.ReactNode, position : 'right' | 'left' , variant? : 'btn_dark_green' | string, otherClasses? : string}) {

    return (

        <button type={type} className={` text-sm ${otherClasses} flexCenter gap-3  rounded-full border ${variant} font-semibold `} >
         {position === 'left' && icon}

         {title} 

         {position === 'right' && icon}
         
        </button>
    )
}