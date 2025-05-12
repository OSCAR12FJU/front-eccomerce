import { Baby, FlameKindling, Heart, Home, ShoppingBag, Smartphone, Utensils, Wrench } from "lucide-react"


type CategoryIcon = {
    name: string
    // icon: React.ReactNode
    icon: React.ReactNode
    slug: string
  }

const categories: CategoryIcon[] = [
    { name: 'Home Decor', icon: <Home size={24} /> , slug: 'home-and-decor' },
    { name: 'Women Fashion', icon: <ShoppingBag size={24}/>, slug: 'women-fashion' },
    { name: 'Baby & Kids', icon:<Baby size={24} /> , slug: 'baby-kids-toys' },
    { name: 'Home & Living', icon:<Home size={24} /> , slug: 'home-living' },
    { name: 'Mobile Accessories', icon: <Smartphone size={24} />, slug: 'mobile-accessories' },
    { name: 'Kitchen', icon:<Utensils size={24} />, slug: 'kitchen-accessories' },
    { name: 'Health & Fitness', icon: <Heart size={24} />, slug: 'health-fitness' },
    { name: 'Tool Kits', icon: <Wrench size={24} />, slug: 'tool-kits' },
    { name: 'BBQ', icon:<FlameKindling size={24} />, slug: 'bbqbar-b-que' },
  ]

export function CategoryIcons(){
    return(
        <section className="py-8 bg-slate-50">
          <div className="container-custom">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 md:gap-4">
             {
                categories.map((category)=>(
                  <a 
                  key={category.slug}
                  className="flex flex-col items-center p-4 rounded-md hover:bg-white hover:shadow-sm transition-all"
                  href="#">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2 text-primary">
                     {category.icon}
                    </div>
                    <span className="text-xs text-center font-medium">{category.name}</span>
                  </a>
                ))
             }
            </div>
          </div>
        </section>
    )
}