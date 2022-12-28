import {useContext, useState} from 'react'
import { createContext } from 'react'
import { ProductItem } from '../models/ProductModels'



interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featured: ProductItem[]
    twentyNine: ProductItem[]
    fortyNine: ProductItem[]
    get: (articleNumber?: string) => void
    getAll: (take?: number) => void
    getFeatured: (take?: number) => void
    getTwentyNine: (take?: number) => void
    getFortyNine: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = {tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [twentyNine, setTwentyNine] = useState<ProductItem[]>([])
    const [fortyNine, setFortyNine] = useState<ProductItem[]>([])

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async (take: number = 0) => {
        let url = baseUrl

        if (take !== 0)
            url = baseUrl + `?take=${take}`

        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getTwentyNine = async (take: number = 0) => {
        let url = `${baseUrl}/$29`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setTwentyNine(await res.json())
    }

    const getFortyNine = async (take: number = 0) => {
        let url = `${baseUrl}/$49`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFortyNine(await res.json())
    }


    return <ProductContext.Provider value={{product, products, featured, twentyNine, fortyNine, get, getAll, getFeatured, getTwentyNine, getFortyNine}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider