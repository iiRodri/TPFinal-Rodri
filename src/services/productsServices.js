import { collection, addDoc, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";


const productsRef = collection(db, "products");


export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            };
        });

        return productsFormat;

    } catch (error) {
        console.error("Error al traer productos:", error);
        return [];
    }
};


export const getProductsById = async (id) => {
    try {
        const productRef = doc(db, "products", id);

        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {

            const product = {
                id: snapshot.id,
                ...snapshot.data(),
            };

            console.log("Doc:", product);

            return product;

        } else {
            return null;
        }

    } catch (error) {
        console.error("Error al obtener producto por ID", error);
        return null;
    }
};


export const createProduct = async (productData) => {

    try {

        const docRef = await addDoc(productsRef, productData);

        return docRef.id;

    } catch (error) {

        console.error("Error al crear producto:", error);
        throw error;

    }

};


export const deleteProduct = async (id) => {

    try {

        const productRef = doc(db, "products", id);

        await deleteDoc(productRef);

        return true;

    } catch (error) {

        console.error("Error al eliminar producto:", error);
        throw error;

    }

};

