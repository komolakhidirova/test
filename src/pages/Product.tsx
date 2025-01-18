import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router'
import styled from 'styled-components'
import { RootState } from '../app/store'
import ArrowIcon from '../icons/ArrowIcon'

const Product: React.FC = () => {
	const params = useParams<{ id: string }>()
	let id: number
	id = Number(params.id)

	const products = useSelector((state: RootState) => state.products.products)
	const productById = products.find(product => product.id === id)

	return (
		<Container>
			<Top>
				<NavLink to='/'>
					<Arrow>
						<ArrowIcon />
					</Arrow>
				</NavLink>
				<h1>Product</h1>
			</Top>
			<Cont>
				<Wrap1>
					<Body>
						<Title>{productById?.title}</Title>
						<Desc>{productById?.desc}</Desc>
					</Body>
				</Wrap1>
				<Wrap>
					<img src={productById?.img} alt='img' />{' '}
				</Wrap>
			</Cont>
		</Container>
	)
}

const Container = styled.main`
	align-items: center;
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	margin-bottom: 100px;
	padding: 0 calc(3.5vw + 5px);
`

const Cont = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 25px;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const Top = styled.div`
	display: flex;
`

const Wrap = styled.div`
	margin-bottom: 25px;
	display: flex;
	max-width: 865px;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	overflow: hidden;
	position: relative;
	border: 3px solid rgba(249, 249, 249, 0.1);

	img {
		width: 100%;
		max-width: 100%;
		aspect-ratio: 16/12;
		object-fit: cover;
		border-radius: 10px;
	}
`

const Wrap1 = styled.div`
	display: flex;
	max-width: 865px;
	overflow: hidden;
	position: relative;
`

const Body = styled.div`
	padding: 20px;
`

const Title = styled.h2`
	margin: 0 0 20px;
	padding: 0;
	text-align: center;
	font-weight: bold;
`

const Desc = styled.p`
	margin: 0;
	padding: 0;
`

const Arrow = styled.div`
	padding: 20px;
	cursor: pointer;
	img {
		height: 35px;
		width: 35px;
	}
`

export default Product
