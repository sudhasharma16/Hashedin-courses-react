import React, {createContext, useState} from 'react'

interface Product {
    id: number;
    title: string;
    description: string;
    author: string;
    tags: Array<String>;
    price: number;
    discountedPrice: number
  }
export type CartContextType = {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);


const CardStateProvider: React.FC<React.ReactNode> = (props) => {
    const [cartItems, setCartItems] = useState<Product[]>([]); 

    const addToCart = (product: Product) => {
        if(!cartItems.some((item) => {
            return product.id === item.id
        })) {
            setCartItems((prev) => {
                return [...prev, product];
            })
        }
        
    }
  return (
    <CartContext.Provider value={{cartItems: cartItems, addToCart: addToCart}}>{props.children}</CartContext.Provider>
  )
}



export default CardStateProvider