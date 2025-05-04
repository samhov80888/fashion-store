import { store } from "../store";
import { allProducts, getSingleProduct, setLoading } from "../store/slices/productsSlice";

const ProductsController = {};

const baseUrl = "https://fakestoreapi.com/products"


ProductsController.getAllProducts = async () => {
    store.dispatch(setLoading(true))
    const productsData = await fetch(baseUrl).then(response => response.json());

    if (productsData) {
        store.dispatch(allProducts(productsData))
        store.dispatch(setLoading(false))
    } else {
        store.dispatch(setLoading(false))
        const error = new Error("error")
    }


}

ProductsController.getSingleProduct = async (productId) => {
    const singleProduct = await fetch(`${baseUrl}/${productId}`).then(response => response.json());

    store.dispatch(getSingleProduct(singleProduct))
}

export default ProductsController