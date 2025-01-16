import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Card {
	id: number
	title: string
	img: string
	desc: string
	isFavorite: boolean
}

interface ProductState {
	products: Card[]
	selectedProductTitle: string | null
	selectedProductDesc: string | null
	selectedProductImg: string
}

const initialState: ProductState = {
	products: [],
	selectedProductTitle: null,
	selectedProductDesc: null,
	selectedProductImg: 'img',
}

export const ProductSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
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
				isFavorite: false,
			})
		},
		addFavorite: state => {
			state.products = state.products.filter(
				product => product.isFavorite === true
			)
		},
		toggleFav: (
			state,
			action: PayloadAction<{
				id: number
			}>
		) => {
			const toggledProduct = state.products.find(
				product => product.id === action.payload.id
			)
			//@ts-ignore
			toggledProduct.isFavorite = !toggledProduct.isFavorite
		},
		deleteProduct: (
			state,
			action: PayloadAction<{
				id: number
			}>
		) => {
			state.products = state.products.filter(
				product => product.id !== action.payload.id
			)
		},
		getProduct: (
			state,
			action: PayloadAction<{
				id: number
			}>
		) => {
			const getProduct = state.products.find(
				product => product.id === action.payload.id
			)
			state.selectedProductTitle = getProduct ? getProduct.title : null
			state.selectedProductDesc = getProduct ? getProduct.desc : null
			state.selectedProductImg = getProduct ? getProduct.img : 'img'
		},
	},
})

export const { addProduct, toggleFav, deleteProduct, getProduct, addFavorite } =
	ProductSlice.actions

export default ProductSlice.reducer
