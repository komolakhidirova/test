import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import AllProducts from '../components/AllProducts'
import { addFavorite } from '../store/features/productSlice'

const Products = () => {
	const dispatch = useDispatch()

	return (
		<Container>
			<Top>
				<h1>Products</h1>
				<NavMenu onClick={() => dispatch(addFavorite())}>
					<span>Favorites</span>
				</NavMenu>
			</Top>

			<AllProducts />
		</Container>
	)
}

const Container = styled.main`
	position: relative;
	overflow-x: hidden;
	display: block;
	top: 72px;
	margin-bottom: 100px;
	padding: 0 calc(3.5vw + 5px);
`

const Top = styled.div`
	display: flex;
`

const NavMenu = styled.button`
	background: none;
	border: none;
	outline: none;
	box-shadow: none;
	padding: 0 12px;

	span {
		color: #e8ae00;
		font-size: 16px;
		letter-spacing: 1.42px;
		line-height: 1.08;
		padding: 2px 6px;
		white-space: nowrap;
		position: relative;
		font-weight: bold;

		&:before {
			background-color: #e8ae00;
			border-radius: 0px 0px 4px 4px;
			bottom: -6px;
			content: '';
			height: 2px;
			left: 0px;
			opacity: 0;
			position: absolute;
			right: 0px;
			transform-origin: left center;
			transform: scaleX(0);
			transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
			visibility: hidden;
			width: auto;
		}
	}

	&:hover {
		span:before {
			transform: scaleX(1);
			visibility: visible;
			opacity: 1 !important;
		}
	}
`

export default Products
