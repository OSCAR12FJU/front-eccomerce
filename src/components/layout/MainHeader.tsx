import { Menu, Phone , ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import CartIcon from "./cart/CartIcon";
import CartDrawer from "./cart/CartDrawer";
import SearchBar from "../ui/SearchBar";

export function MainHeader(){
    // const [cartCount, setCartCount] = useState(0);
    // const cartCount = 0;
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [cartOpen, setCartOpen] =  useState(false);

    const toggleSideBar = () =>{
        setIsOpenSidebar(!isOpenSidebar);
    }
    const toggleSideBarCart= () =>{
        setCartOpen(!cartOpen);
    }


    return(
        <header className="bg-white shadow-sm py-4">
            {/* //falta una medidad globla de estacio en css */}
            <div className="container-custom">
              <div className="flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex-shrink-0">
                 <div className="flex items-center">
                    {/* //Falta un bg general especifico */}
                    <div className=" w-8 h-8 rounded-md flex items-center justify-center mr-2 bg-primary">
                     <ShoppingCart className=" text-white h-5 w-5" />
                    </div>
                    {/* //Falta un texto global */}
                    <span className="text-xl font-bold text-primary">INACART</span>
                 </div>
                </a>

                {/* Buscador */}
                <SearchBar className="hidden md:flex mx-8"/>


                {/* iconos */}
                {/* Phone */}
                <div className="hidden md:flex items-center mr-4">
                    <a href="tel:+923000000000" className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-1" />
                    <span className="font-medium">0300-0000000</span>
                    </a>
                </div>

                {/* User */}

                {/* Carrito con logica de conteo */}
                <div className="flex justify-center items-center gap-x-4">
                <div className="relative">
                    <CartIcon onClick={() => setCartOpen(true)}/>
                </div>

                {isOpenSidebar && (
                  <div
                   onClick={toggleSideBar}
                   className="fixed inset-0 bg-black bg-opacity-50 z-40"
                   ></div>
                )}

                {/* Mobile Menu - responsive */}
                <div className="flex md:hidden ml-4">
                    {/* <SheetTrigger asChild> */}
                        <button onClick={toggleSideBar} className="">
                          <Menu className="h-5 w-5" />
                        </button>
                    {/* </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]"> */}
                    <div className={`fixed top-0 left-0 h-full w-64 z-50 bg-background p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpenSidebar ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className="py-4">
                        <button onClick={toggleSideBar} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            <X className="h-4 w-4" />
                        </button>
                        <div className="mb-8">
                            <a href="/" className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mr-2">
                                <ShoppingCart className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-primary">INACART</span>
                            </a>

                            {/* //Buscandor */}
                            {/* <div className="relative w-full">
                            <input
                                type="search"
                                placeholder="What Are You Looking For"
                                className="w-full pl-3 pr-10 py-1.5 border border-gray-300 rounded-md placeholder:text-sm placeholder:text-primary" />
                            <button className="absolute right-0 top-0 bottom-0 rounded-l-none bg-primary text-white px-2 rounded-r-md">
                                <Search className="h-4 w-4" />
                             </button>

                             </div> */}
                            <SearchBar className="flex md:hidden w-full"/>
                            
                        </div>

                    </div>


                        <nav className="space-y-4">
                            <a
                            href="/"
                            className="block px-2 py-1 text-lg hover:text-primary"
                            >
                            Home
                            </a>
                            <a
                            href="/categories"
                            className="block px-2 py-1 text-lg hover:text-primary"
                            >
                            Categories
                            </a>
                            <a
                            href="/about"
                            className="block px-2 py-1 text-lg hover:text-primary"
                            >
                            About Us
                            </a>
                            <a
                            href="/contact"
                            className="block px-2 py-1 text-lg hover:text-primary"
                            >
                            Contact Us
                            </a>
                            <a
                            href="/account"
                            className="block px-2 py-1 text-lg hover:text-primary"
                            >
                            My Account
                            </a>
                            <a
                            href="/cart"
                            className="block px-2 py-1 text-lg hover:text-primary"
                            >
                            Cart
                            </a>
                        </nav>
                        </div>

                    </div>
                    {/* </SheetContent>
                    </Sheet> */}
                </div>
              </div>
            </div>

            <CartDrawer isOpen={cartOpen} toogleSidebarCart= {toggleSideBarCart} />
        </header>
    )
}
