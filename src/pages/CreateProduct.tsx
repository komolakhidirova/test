import { NavLink } from 'react-router'
import styled from 'styled-components'
import InputField from '../components/InputField'
import ArrowIcon from '../icons/ArrowIcon'

const CreateProduct: React.FC = () => {
	return (
		<Container>
			<Top>
				<NavLink to='/'>
					<Arrow>
						<ArrowIcon />
					</Arrow>
				</NavLink>
				<h1>Create Product</h1>
			</Top>
			<InputField />
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

const Top = styled.div`
	display: flex;
`

const Arrow = styled.div`
	padding: 20px;
	cursor: pointer;
	img {
		height: 35px;
		width: 35px;
	}
`

export default CreateProduct
