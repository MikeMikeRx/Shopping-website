import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore"

const collectionsToFetch = ["electronics", "furniture", "clothes"]

const fetchAllProducts = async () => {
    const allProducts = []

    try {
        for(const col of collectionsToFetch){
            const colRef = collection(db, col)
            const snapshot = await getDocs(colRef)

            snapshot.forEach(doc => {
                allProducts.push({
                    id: doc.id,
                    ...doc.data(),
                    category: col,
                })
            })
        } 
    } catch(err) {
        console.log("Error.................!!!");        
    }
  return allProducts
}

export default fetchAllProducts