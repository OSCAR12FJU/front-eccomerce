import { useParams } from "react-router-dom";
import { getProductBySlug, getProductsByCategory } from "../../../lib/data/products";
import ProductContent from "./ProductContent";

export default function ProductPage(){
    const {productSlug} = useParams<{productSlug: string}>();

    const product = getProductBySlug(productSlug ?? "");

    if(!product){
        return <ProductContent product={null}/>
    }

    const relatedProducts = getProductsByCategory(product.categorySlug).slice(0,4)

    return <ProductContent product={product} relatedProducts={relatedProducts} />

}