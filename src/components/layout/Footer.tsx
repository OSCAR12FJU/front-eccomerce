import { Facebook, Instagram, MessageSquare, ShoppingCart, Youtube } from "lucide-react"

const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Terms And Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Return Policy', href: '/return-policy' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Shipping Policy', href: '/shipping-policy' },
  ]
  
  const productCategories = [
    { name: 'Home and Decor', href: '/category/home-and-decor' },
    { name: 'Women Fashion', href: '/category/women-fashion' },
    { name: 'Footwear', href: '/category/footwear' },
    { name: 'Baby, Kids & Toys', href: '/category/baby-kids-toys' },
    { name: 'Home & Living', href: '/category/home-living' },
    { name: 'Mobile Accessories', href: '/category/mobile-accessories' },
    { name: 'Kitchen Accessories', href: '/category/kitchen-accessories' },
    { name: 'Health & Fitness', href: '/category/health-fitness' },
    { name: 'Tool Kits', href: '/category/tool-kits' },
    { name: 'Luxury House Hold & Kitchen Products', href: '/category/luxury-house-hold-kitchen' },
  ]
  

  //A los links les falta la estilización del hover.
export function Footer(){
    return(
        <footer className="bg-white pt-12 border-t">
            {/* //falta estilización con dimensiones global */}
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                   <a href="#" className="">
                    <div className="flex items-center mb-6">
                      <div className=" w-8 h-8 rounded-md flex items-center justify-center mr-2 bg-primary">
                      <ShoppingCart className=" text-white h-5 w-5" />
                      </div>
                       <span className="text-xl font-bold text-primary">INACART</span>
                      </div>
                    </a>

                    <h3 className="text-sm font-semibold uppercase mb-4">PAYMENT METHODS</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs font-medium">VISA</span>
                      </div>
                      <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs font-medium">MC</span>
                      </div>
                      <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs font-medium">PAYPAL</span>
                      </div>
                    </div>
                </div>
                
                {/* //Links */}
                <div className="">
                    <h3 className="text-sm font-semibold uppercase mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2">
                     {quickLinks.map((link, index) =>(
                        <li key={index}>
                          <a
                           href="#"
                           className="text-sm hover:text-primary">{link.name}</a>
                        </li>
                     ))}
                    </ul>
                </div>

             {/* Products categories */}
             <div>
                <h3 className="text-sm font-semibold uppercase mb-4">PRODUCT CATEGORIES</h3>
                <ul className="space-y-2">
                  {productCategories.map((category, index) =>(
                    <li key={index}>
                      <a 
                      href="#"
                      className="text-sm hover:text-primary">
                      {category.name}
                      </a>  
                    </li>
                  ))}
                </ul>
             </div>

             {/* //Follows Us */}
             <div className="">
                <h3 className="text-sm font-semibold uppercase mb-4">FOLLOW US</h3>
                <div className="flex space-x-4 mb-6">
                    <a
                     href="#"
                     target="_blank"
                     className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <Facebook size={20} />
                     </a>
                    <a
                     href="#"
                     target="_blank"
                     className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <Instagram size={20} />
                     </a>
                    <a
                     href="#"
                     target="_blank"
                     className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <MessageSquare size={20} />
                     </a>
                    <a
                     href="#"
                     target="_blank"
                     className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <Youtube size={20} />
                     </a>
                </div>
                {/* //Falta otro bg global */}
                <a 
                href="#"
                className="flex items-center justify-center text-white py-3 px-6 rounded-md bg-success hover:bg-success/90 mb-8">
                    <MessageSquare size={18} className="mr-2" />
                    <span> Join our WhatsApp Group</span>
                </a>
             </div>
            </div>
          </div>
           {/* Copyright */}
          <div className="bg-primary text-white py-4">
            <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">Copyright © {new Date().getFullYear()} inacart.pk All Rights Reserved</p>
                <p className="text-sm mt-2 md:mt-0">
                Powered By: <a href="/" className="underline">INACART</a>
                </p>
            </div>
            </div>
            </div>
        </footer>
    )

}