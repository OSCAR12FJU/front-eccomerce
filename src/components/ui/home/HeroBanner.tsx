export function HeroBanner(){
    return(
<div className="relative h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden bg-blue-900">
{/* //Banner image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
           src="https://ext.same-assets.com/2423255211/4290106307.webp"
           alt="INACART - Kitchen Gadgets"
           className="object-cover w-full h-full"
           />
        </div>

        {/* //Content banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
        {/* //Dimension global  */}
         <div className="container-custom">
            <div className="max-w-lg text-white p-6 ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                KITCHEN GADGETS
              </h1>
              <p className="text-lg mb-6"> Discover innovative kitchen tools that make cooking easier and more enjoyable.</p>
              <button className="bg-white hover:bg-gray-100 text-primary hover:text-white inline-flex items-center gap-2 text-sm rounded-md font-medium focus-visible:outline-none shadow hover:bg-primary/90 px-8 h-10">
                <a 
                 href="#">
                 Shop Now
                </a>
              </button>
            </div>

         </div>

        </div>

     </div>
    )
}