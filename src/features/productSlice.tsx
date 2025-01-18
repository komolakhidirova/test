import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
	id: number
	img: string
	title: string
	desc: string
	isFav: boolean
}

interface ProductState {
	products: Product[]
}

const initialState: ProductState = {
	products: [],
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<Product[]>) {
			state.products = action.payload.map(product => ({
				...product,
				isFav: false,
			}))
		},
		addProduct: (
			state,
			action: PayloadAction<{
				id: number
				title: string
				img: string
				desc: string
				isFavorite: boolean
			}>
		) => {
			state.products.push({
				id: action.payload.id,
				title: action.payload.title,
				img: action.payload.img,
				desc: action.payload.desc,
				isFav: false,
			})
		},
		toggleFav(state, action: PayloadAction<number>) {
			const product = state.products.find(p => p.id === action.payload)
			if (product) {
				product.isFav = !product.isFav
			}
		},
		deleteProduct(state, action: PayloadAction<number>) {
			state.products = state.products.filter(
				product => product.id !== action.payload
			)
		},
	},
})

export const { setProducts, toggleFav, deleteProduct, addProduct } =
	productSlice.actions

export default productSlice.reducer
