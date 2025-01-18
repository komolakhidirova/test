import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../app/store'
import SingleProduct from './SingleProduct'

const AllProducts = () => {
	const products = useSelector((state: RootState) => state.products.products)

	return (
		<Content>
			{products.map(product => (
				<SingleProduct
					id={product.id}
					title={product.title}
					img={product.img}
					desc={product.desc}
					isFav={product.isFav}
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
