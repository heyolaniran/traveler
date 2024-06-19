
export default function Button ({title, type, icon, position , variant} : {title : string , type : "submit" | "reset" | "button" , icon : React.ReactNode, position : 'right' | 'left' , variant? : 'btn_dark_green'}) {

    return (

        <button type={type} className={` text-sm -mt-4 flexCenter gap-3  rounded-full border ${variant} font-semibold`} >
         {position === 'left' && icon}

         {title} 

         {position === 'right' && icon}
         
        </button>
    )
}