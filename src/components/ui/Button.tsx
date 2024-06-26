
export default function Button ({title, type, icon, position , variant , otherClasses, full} : {title : string , type : "submit" | "reset" | "button" , icon : React.ReactNode, position : 'right' | 'left' , variant? : 'btn_dark_green' | string, otherClasses? : string, full? : boolean}) {

    return (

        <button type={type} className={` text-sm ${otherClasses} flexCenter gap-3 ${full && 'w-full'}  rounded-full border ${variant} font-semibold `} >
         {position === 'left' && icon}

         {title} 

         {position === 'right' && icon}
         
        </button>
    )
}