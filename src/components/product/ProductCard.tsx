import { useAddToCart } from "../../hooks/useAddToCart";
import { ShoppingCart } from "lucide-react"

export type ProductType = {
    id: string
    name: string
    slug: string
    price: number
    originalPrice?: number
    discountPercentage?: number
    image: string
    inStock: boolean
    category: string
    categorySlug: string
  }


  export default function ProductCard({product}: {product: ProductType}){
    const {
        id,
        name,
        slug,
        price,
        originalPrice,
        discountPercentage,
        image,
        inStock,
        category,
        categorySlug,
      } = product

      if(id && slug && categorySlug){
        console.log("estan todos.")
      }

      const hasDiscount = originalPrice && originalPrice > price;

      const {handleAddToCart} = useAddToCart();

      return(
        <div className="group bg-white shadow-sm hover:shadow-md transition-shadow rounded-md overflow-hidden flex flex-col" >
          <a href= {`/product/${product.slug}`}>
          {/* //Product image */}
          <span
           className="relative block aspect-square overflow-hidden">
            <img 
             src={image}
             alt={name}
             className="object-cover group-hover:scale-105 transition-transform duration-300" />
            {hasDiscount && discountPercentage && (
                <span className="absolute top-2 left-2 badge-discount">
                    {discountPercentage}% Off
                </span>
            )}
           </span>
          {/* //Products detalles */}
          <div className="p-4 flex flex-col flex-grow">
            <span
             className="text-xs text-gray-500 hover:text-primary mb-1">
             {category}
             </span>
            <span
             className="text-sm font-medium line-clamp-2 mb-2 hover:text-primary flex-grow">
             {name}
             </span>

         <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="price-discount">Rs. {price.toLocaleString()}</span>
                    {hasDiscount && originalPrice && (
                  <span className="price-regular">Rs. {originalPrice.toLocaleString()}
                  </span>)}
          </div>

          {inStock ? (
            <span className="badge-stock text-xs">In Stock</span>
          ): (<span className="bg-gray-300 text-gray-600 text-xs px-2 py-0.5 rounded-sm">Out of Stock</span>)
          }
         </div>
        </div>
        </a>

        {/* Add to Cart Button */}
      <div className="p-4 pt-0 ">
        <button
          className="w-full flex items-center justify-center gap-2 bg-primary text-sm font-medium focus-visible:outline-none text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 rounded-md"
          onClick={() => handleAddToCart(product)}>
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>

        {/* <button
          className="flex items-center justify-center bg-white border-gray-400 rounded-full text-sm font-medium focus-visible:outline-none text-primary-foreground shadow hover:bg-primary/90 px-2 py-1">
          <Eye size={16} />
        </button> */}
      </div>


        </div>
      )


  }