import { Facebook, Instagram, MessageSquare } from "lucide-react"

export default function TopBar(){
    return(
        //Falta asginar unos estilizaciónes globales
        <div className="bg-primary text-primary-foreground text-xs py-2">
         <div className="container-custom flex justify-center items-center">
          <div className="hidden md:block">
            {/* <p className="text-white">Welcome to INACART | Delivery Charges Rs 210, Free Delivery over purchase of Rs.2000 all over Pakistan</p> */}
            </div>
        
            <div className="flex gap-4 items-center ml-auto">
                <a href="#"
                   className="hover:underline">
                    INACART
                </a>
                <div className="flex gap-2">
                    <a href="#"
                       target="_blank"
                       aria-label="Facebook">
                     <Facebook size={16} />
                    </a>
                    <a href="#"
                       target="_blank"
                       aria-label="Instagram">
                     <Instagram size={16} />
                    </a>
                    <a href="#"
                       target="_blank"
                       aria-label="WhatsApp">
                     <MessageSquare size={16} />
                    </a>
                </div>
            </div>
         </div>
        </div>
    )
}