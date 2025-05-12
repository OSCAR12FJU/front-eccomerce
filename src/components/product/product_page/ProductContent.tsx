import { useState } from "react"
import type { ProductType } from "../ProductCard"
import { MainLayout } from "../../layout/MainLayout";
import { ChevronRight, Home, Minus, Plus, Share2, ShoppingCart } from "lucide-react";
import ProductCard from "../ProductCard";

interface ProductContentProps {
    product: ProductType | null
    relatedProducts?: ProductType[]
  }

export default function ProductContent({product, relatedProducts = []}: ProductContentProps){
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    if(!product){
       return( <MainLayout>
            <div className="container-custom py-16 text-center">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <p className="mb-8">The Product you are looking for does not exist or has been removed.</p>

                <button className="">
                    <a href="#">
                        Back to Home
                    </a>
                </button>
            </div>
        </MainLayout>)

    }

    const {
        name,
        price,
        originalPrice,
        discountPercentage,
        image,
        inStock,
        category,
        categorySlug,
      } = product;

      console.log(categorySlug, relatedProducts)


    const hasDiscount = originalPrice && originalPrice > price;

    const increaseQunatity = () => {
        setQuantity(prev => prev + 1);
    }
    const decreaseQunatity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1 ));
    }


    // const addToCart = () =>{
    //     t
    // }
    return(
        <MainLayout>
            <div className="bg-slate-50 pt-4">
             <div className="container-custom">
                <div className="flex items-center text-sm text-gray-500">
                  <a className="flex items-center" href="#">
                    <Home size={14} className="mr-1">Home</Home>
                  </a>
                  <ChevronRight size={14} className="mx-2"/>
                  <a href="#" className="hover:text-primary">
                    {category}
                  </a>
                  <ChevronRight size={14} className="mx-2"/>
                  <span className="text-gray-700 font-medium truncate max-w-[200px]">{name}</span>
                </div>
             </div>
            </div>

            <div className="container-custom py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* //Prudct image */}
                <div>
                    <div className="relative aspect-square rounded-lg overflow-hidden border mb-4">
                     <img src={image} alt={name} className="object-cover w-full h-full overflow-hidden" />
                     {hasDiscount && 
                     discountPercentage && (
                        <span className="absolute p-2 rounded-md top-4 left-4 bg-destructive text-white">
                            {discountPercentage}% Off
                        </span>
                     )}

                    </div>
                </div>

                <div className="">
                  <h1 className="text-2xl font-bold mb-2">{name}</h1>
                  <a href="#" className="text-primary text-sm mb-4 inline-block">{category}</a>

                  <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold text-destructive mr-3">
                        Rs.{price.toLocaleString()}
                    </span>
                    {hasDiscount && 
                    originalPrice && (
                      <span className="text-gray-500 line-through">Rs.{originalPrice.toLocaleString()}</span>
                    )}
                  </div>

                <div className="mb-6">
                  {inStock ? (
                    <span className="bg-success/10 text-success px-3 rounded-md border-success">In Stock</span>
                  ):(<span className="bg-gray-200 text-gray-200 border-gray-300">Out of Stock</span>)}
                </div>

                <div className="border-t border-b py-6 mb-6">
                  <div className="flex items-center text-center justify-between">
                    <div className="flex items-center mb-6">
                      <span className="mr-4 font-medium">Quantity:</span>
                      <div className="flex items-center border rounded-md">
                      <button className="h-10 w-10 flex justify-center items-center" onClick={decreaseQunatity}>
                          <Minus size={16}/>
                      </button>
                      <span className="w-10 text-center">{quantity}</span>
                      <button className="h-10 w-10 flex justify-center items-center" onClick={increaseQunatity}>
                          <Plus size={16}/>
                      </button>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mb-6">
                    <button className="flex items-center">
                    <Share2 size={18} className="mr-2"/>
                    Share
                  </button>

                    </div>

                  </div>

                <div className="flex flex-wrap gap-4">
                  {/* <button className="flex-1" >
                    <ShoppingCart size={18} className="mr-2"/>
                    Add to Cart
                  </button> */}
                  <button
                   className="w-full flex items-center justify-center gap-2 bg-primary text-sm font-medium focus-visible:outline-none text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 rounded-md">
                    <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                  </button>

                </div>
                </div>
                {/* //Opcion de delivery */}
                {/* <div className="mb-6">
                  <h3 className="font-semibold mb-2">Delivery</h3>
                  <div className="flex items-start">
                    <div className="bg-slate-100 p-3 rounded-md text-sm">
                      <p className="mb-1">Karachi: 2 Days</p>
                      <p className="">Other Cities: 3 to 4 Working Days</p>
                    </div>
                  </div>
                </div> */}
              </div>
             </div>

             {/* Product detalles */}
     
          {/* </div>  */}


      <div className="mt-12 w-full">
            <div className="w-full flex justify-start border-b rounded-none bg-transparent h-auto p-0 gap-x-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`rounded-none border-b-2 py-3 ${
                  activeTab === "description" ? "border-primary bg-transparent" : "border-transparent"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("additional")}
                className={`rounded-none border-b-2 py-3 ${
                  activeTab === "additional" ? "border-primary bg-transparent" : "border-transparent"
                }`}
              >
                Additional Information
              </button>
            </div>

            {/* TAB CONTENT WITH TRANSITION */}
            <div className="relative min-h-[150px] mt-6">
              {/* Description tab */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeTab === "description" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="prose max-w-none">
                  <p>{name}.</p>
                  <p className="mt-4">
                    Features quality construction and is designed to provide optimal performance. It's an excellent choice
                    for anyone looking for reliability and value.
                  </p>
                </div>
              </div>

              {/* Additional Information tab */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeTab === "additional" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="prose max-w-none">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b">
                        <th className="text-left py-3 pr-4 font-medium">Brand</th>
                        <td className="py-3">INACART</td>
                      </tr>
                      <tr className="border-b">
                        <th className="text-left py-3 pr-4 font-medium">In Stock</th>
                        <td className="py-3">{inStock ? "Yes" : "No"}</td>
                      </tr>
                      <tr className="border-b">
                        <th className="text-left py-3 pr-4 font-medium">Category</th>
                        <td className="py-3">{category}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}


          
        </div>

  

        </MainLayout>
    )
}