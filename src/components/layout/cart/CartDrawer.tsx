import { Minus, Plus, Trash, X } from "lucide-react";
import { useCart } from "../../../lib/CartContext";
import { useCallback, useEffect } from "react";
import { useToast } from "../../ui/home/ToastContainer";

interface CartDrawerProps {
    isOpen: boolean;
    toogleSidebarCart: () => void;
  }
  

export default function CartDrawer({isOpen, toogleSidebarCart}: CartDrawerProps){
    const { items, updateQuantity, removeItem, totalPrice } = useCart();
    const {showToast} = useToast();

    //Close the cart
    useEffect(() =>{
        const handleEscKey = (event: KeyboardEvent) =>{
            if(event.key === 'Escape' && isOpen){
                toogleSidebarCart();
            }
        };

        document.addEventListener('keydown', handleEscKey);

        if(isOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow= '';
        }

        return() =>{
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';

        }

    }, [isOpen, toogleSidebarCart]);

    const handleRemoveItem = useCallback((productId: string, productName: string) => {
        removeItem(productId);
        showToast(`${productName}  eliminado del carrito`, "info");
      }, [removeItem, showToast]);
    
      const handleUpdateQuantity = useCallback((productId: string, quantity: number, productName: string) => {
        updateQuantity(productId, quantity);
        if (quantity === 0) {
          showToast(`${productName} cantidad actualizada`, "info");
        } else {
          showToast(`Cantidad de ${productName} actualizada.`, "success");
        }
      }, [updateQuantity, showToast]);
    
    //   const goToCheckout = useCallback(() => {
    //     router.push('/checkout');
    //   }, [router]);
    
      if (!isOpen) return null;



  return(
    <div className="fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out flex">
    {/* // <div className=> */}
    {/* Overlay */}
    {/* className="fixed inset-0 bg-black/50 transition-opacity duration-300" */}

    <div
      className="fixed inset-0 bg-black/50 transition-opacity"
      onClick={toogleSidebarCart}
      aria-hidden="true"
    />

    {/* Cart drawer */}
    {/* <div className="fixed right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col transform transition-transform"> */}
    <div className={`flex flex-col bg-background max-w-md w-full h-full ml-auto transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <h2 className="text-lg font-medium">Cart</h2>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-500"
          onClick={toogleSidebarCart}
          aria-label="Close cart"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      

      {/* //Anuncio por si se habre el carrito pero no se selcciona nada */}
      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-600">Add something to start yout order</p>
            <button
              type="button"
              className="mt-6 bg-primary text-white rounded-md p-2"
              onClick={toogleSidebarCart}
            >
              Continue shopping
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.product.id} className="py-4">
                  <div className="flex items-start">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{item.product.name}</h3>
                        <p className="text-sm font-medium">{item.product.price.toLocaleString()} Total</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            type="button"
                            className="p-1 text-gray-600 hover:text-gray-800"
                            onClick={() => handleUpdateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.product.name
                            )}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 py-1 text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            className="p-1 text-gray-600 hover:text-gray-800"
                            onClick={() => handleUpdateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.product.name
                            )}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="text-gray-400 hover:text-secondary"
                          onClick={() => handleRemoveItem(item.product.id, item.product.name)}
                          aria-label="Remove item"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Total</p>
              <p>{totalPrice.toLocaleString('en-US')} $</p>
            </div>
            <button
              type="button"
              className="btn-primary w-full py-3"
            //   onClick={goToCheckout}
            >
              Pagar
            </button>
            <div className="mt-2">
              <button
                type="button"
                className="text-sm text-secondary hover:text-secondary/80 font-medium"
                // onClick={onClose}
              >
                Continue shipping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
  )





}