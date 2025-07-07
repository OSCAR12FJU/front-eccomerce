import { ProductType } from "components/product/ProductCard"
import { useCart } from "../lib/CartContext"

export function useAddToCart(){
    const {addItem} = useCart()

    const handleAddToCart = (product: ProductType, quality = 1) =>{
        if(!product.inStock){
            console.warn("Product is out of stock");
            return
        }

        addItem(product, quality)
    }
    return {handleAddToCart}
}