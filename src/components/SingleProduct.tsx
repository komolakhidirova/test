import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router'
import styled from 'styled-components'
import DeleteIcon from '../icons/DeleteIcon'
import LikeIcon from '../icons/LikeIcon'
import LikeIconFav from '../icons/LikeIconFav'
import { deleteProduct, toggleFav } from '../store/features/productSlice'

interface Props {
	id: number
	title: string
	img: string
	desc: string
	isFavorite: boolean
}

const SingleProduct: React.FC<Props> = ({
	id,
	title,
	img,
	desc,
	isFavorite,
}) => {
	const dispatch = useDispatch()

	return (
		<Wrap>
			<img src={img} alt='image' />
			<Body>
				<Title>
					<NavLink to={`/product/${id}`}>{title}</NavLink>
				</Title>
				<Desc>{desc}</Desc>
			</Body>
			<Action>
				<Like onClick={() => dispatch(toggleFav({ id }))}>
					{isFavorite ? <LikeIconFav /> : <LikeIcon />}
				</Like>
				<Delete onClick={() => dispatch(deleteProduct({ id }))}>
					<DeleteIcon />
				</Delete>
			</Action>
		</Wrap>
	)
}

const Wrap = styled.div`
	position: relative;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	overflow: hidden;
	border: 3px solid rgba(249, 249, 249, 0.1);

	img {
		height: 200px;
		width: 100%;
		object-fit: cover;
		border-radius: 10px;
	}
`

const Body = styled.div`
	padding: 20px;
`

const Title = styled.h2`
	margin: 0 0 20px;
	padding: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	color: black;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;

	a::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 50px;
		width: 100%;
		height: 100%;
	}

	a:hover {
		color: #9696ff;
	}

	a:active {
		color: #9696ff;
	}

	a:visited {
		color: #9696ff;
	}
`

const Desc = styled.p`
	margin: 0;
	padding: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`

const Action = styled.div`
	padding: 0 0 20px 20px;
	display: flex;
	gap: 15px;
`

const Like = styled.a`
	img {
		height: 35px;
		width: 35px;
	}
`

const Delete = styled.a`
	img {
		height: 35px;
		width: 35px;
	}
`

export default SingleProduct
