import { AlignJustify, ChevronDown } from "lucide-react"

type SubCategory = {
  id: string
  name: string
  slug: string
}

type Category = {
  id: string
  name: string
  slug: string
  subCategories?: SubCategory[]
}

// Sample categories data
const categories: Category[] = [
  {
    id: '1',
    name: 'Home and Decor',
    slug: 'home-and-decor',
  },
  {
    id: '2',
    name: 'Women Fashion',
    slug: 'women-fashion',
    subCategories: [
      { id: '2-1', name: 'Undergarments / Night Suits', slug: 'undergarments-night-suits' }
    ]
  },
  {
    id: '3',
    name: 'Footwear',
    slug: 'footwear',
    subCategories: [
      { id: '3-1', name: 'Women Slippers', slug: 'women-slippers' }
    ]
  },
  {
    id: '4',
    name: 'Baby, Kids & Toys',
    slug: 'baby-kids-toys',
  },
  {
    id: '5',
    name: 'Home & Living',
    slug: 'home-living',
  },
  {
    id: '6',
    name: 'Mobile Accessories',
    slug: 'mobile-accessories',
  },
  {
    id: '7',
    name: 'Kitchen Accessories',
    slug: 'kitchen-accessories',
  },
  {
    id: '8',
    name: 'Health & Fitness',
    slug: 'health-fitness',
  },
  {
    id: '9',
    name: 'Tool Kits',
    slug: 'tool-kits',
  },
  {
    id: '10',
    name: 'Luxury House Hold & Kitchen',
    slug: 'luxury-house-hold-kitchen',
  },
]


export function CategoryNav(){
    const allCategoriesOpen = false;

    return(
    <nav className="bg-white border-b border-t border-gray-200">
        {/* //Falta expecificación de dimensiones global */}
        <div className="container-custom">
            <div className="flex items-center">
                {/* //las opciónes de la categoria */}
                {/* //falta bg-global */}
                <div className="relative group bg-primary text-white py-3 px-4 cursor-pointer"
                      onMouseEnter={() => "falta logica"}
                      onMouseLeave={() => "falta logica"}>
                  <div className="flex items-center space-x-2">
                    <AlignJustify size={20} />
                    <span className="font-medium">All Categories</span>
                    <ChevronDown size={16} />
                  </div>
                  {allCategoriesOpen && (
                    <div className="absolute left-0 top.full w-60 bg-white shadow-lg z-10 py-2">
                      {categories.map((category) =>(
                        <div 
                        key={category.id}
                        className="relative"
                        onMouseEnter={()=> ""}
                        onMouseLeave={()=> ""}
                        >
                         <a
                          href="#"
                          className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-sm">
                            <span> {category.name}</span>
                            {category.subCategories && category.subCategories.length > 0}
                            {/* ////////////// */}
                          </a>

                          {/* {category.subCategories && activ} */}
                          <div className="absolute left-full top-0 w-60 bg-white shadow-lg z-20">
                            {categories.map((subCategory) => (
                              <a 
                              key={subCategory.id}
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 text-sm">
                                {subCategory.name}
                              </a>
                            ))}
                          </div>
                          {/* /////////////// */}

                        </div>


                      ))}

            
                    </div>

                  )}


                </div>
          {/* Main Navigation Links */}
          <div className="hidden md:flex ml-4 overflow-x-auto">
            <a href="/" className="px-4 py-3 text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="/about-us" className="px-4 py-3 text-sm font-medium hover:text-primary">
              About Us
            </a>
            <a href="/blog" className="px-4 py-3 text-sm font-medium hover:text-primary">
              Blog
            </a>
            <a href="/reviews" className="px-4 py-3 text-sm font-medium hover:text-primary">
              Reviews
            </a>
            <a href="/contact-us" className="px-4 py-3 text-sm font-medium hover:text-primary">
              Contact Us
            </a>
          </div>

          {/* Call Us */}
          <div className="ml-auto hidden md:flex">
            <div className="px-4 py-3 text-sm font-medium">
              CALL US(0300-0000000)
            </div>
          </div>

            </div>
        </div>

    </nav>
    )


}


//Falta implementación de logica y destructuración.