import { useSelector } from 'react-redux'
import styled from 'styled-components'
import SingleProduct from './SingleProduct'

const AllProducts = () => {
	//@ts-ignore
	const products = useSelector(state => state.products.products)
	return (
		<Content>
			{/* @ts-ignore */}
			{products.map(card => (
				<SingleProduct
					id={card.id}
					title={card.title}
					img={card.img}
					desc={card.desc}
					isFavorite={card.isFavorite}
				/>
			))}
		</Content>
	)
}

const Content = styled.div`
	margin-bottom: 40px;
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`

export default AllProducts
