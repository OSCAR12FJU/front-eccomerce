import { ChevronRight } from "lucide-react"
import type { ProductType } from "./ProductCard"
import ProductCard from "./ProductCard"

interface ProductSectionProps {
    title: string
    categorySlug: string
    products: ProductType[]
  }
export function ProductSection({title, categorySlug, products}: ProductSectionProps){
    console.log(categorySlug)
    return(
        <section className="py-8">
            <div className="container-custom">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <a 
                  href="#"
                  className="text-sm font-medium text-primary flex items-center">
                    View all <ChevronRight size={16}/>
                  </a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product }/>
                    ))}
                </div>
            </div>
            
        </section>
    )



}