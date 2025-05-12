import { Building2, ShoppingBag, Users } from "lucide-react";

export default function BannerStatic(){
    return(
        <section className="py-10 bg-primary text-white">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                     <Users size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2"> 500000+</h3>
                    <p className="text-lg">Satisfied Customers</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                     <Building2 size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2"> 200+</h3>
                    <p className="text-lg">Cities</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                     <ShoppingBag size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2"> 1000+</h3>
                    <p className="text-lg">Products</p>
                </div>



              </div>

            </div>




        </section>
    )

}