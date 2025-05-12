import { ShoppingCart } from "lucide-react";

interface CartIconsProps{
    onClick: () => void;
}


export default function CartIcon({onClick}: CartIconsProps){
    const itemCount = 1;
    return(
        <button
         type="button"
         className="relative p-1 text-foreground hover:text-primary transition-colors"
         onClick={onClick}>
          <ShoppingCart className="h-5 w-5"/>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
             {itemCount > 99 ? "99+" : itemCount}
            </span>
          )}
        </button>
    )
}