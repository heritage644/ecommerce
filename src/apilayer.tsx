
import type  { Product } from "./types";


export const getAllProducts  = async (): Promise<Product[]> => {
  
        const res = await fetch("http://localhost:3000/api/products/fruits", {
            method:"GET",
            headers : {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        return data
        }
;