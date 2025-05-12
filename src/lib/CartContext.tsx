import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ProductType } from "../components/product/ProductCard";

export interface CartItem{
    product: ProductType;
    quantity: number
}

interface CartContextType{
    items: CartItem[];
    addItem: (product: ProductType, quantity?: number) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    itemCount: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children : ReactNode}){

    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        try {
          const savedCart = localStorage.getItem("cart");
          if (savedCart) {
            setItems(JSON.parse(savedCart));
          }
        } catch (error) {
          console.error("Failed to load cart from localStorage:", error);
        }
      }, []);

    useEffect(()=>{
        try{
        localStorage.setItem("cart",  JSON.stringify(items));
        }catch(error){
        console.error("Failed to save cart to localStorage", error);
        }
    }, [items]);

    const addItem = (product: ProductType, quantity = 1) => {
        setItems((prevItems) => {
        // Check if product already exists in cart
        const existingItemIndex = prevItems.findIndex(
            (item) => item.product.id === product.id
        );

        if (existingItemIndex !== -1) {
            // Product exists, update quantity
            const newItems = [...prevItems];
            newItems[existingItemIndex].quantity += quantity;
            return newItems;
        }

        // Product doesn't exist, add it
        return [...prevItems, { product, quantity }];
        });
    };

    const removeItem = (productId: string) => {
        setItems((prevItems) => prevItems.filter(
          (item) => item.product.id !== productId
        ));
      };
    
      const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
          removeItem(productId);
          return;
        }
    
        setItems((prevItems) => prevItems.map((item) =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        ));
      };

      const clearCart = () => {
        setItems([]);
      };
    
      // Calculate total number of items
      const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    
      // Calculate total price
      const totalPrice = items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      return(
        <CartContext.Provider value={{items, addItem, removeItem, updateQuantity, clearCart, itemCount, totalPrice}}>
        {children}
        </CartContext.Provider>
      );
}

    export function useCart() {
        const context = useContext(CartContext);
    
        if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
        }
    
        return context;
    }
