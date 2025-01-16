import { useRef } from 'react'
import styled from 'styled-components'
import { addProduct } from '../store/features/productSlice'
import { useAppDispatch } from '../store/store'

const InputField = () => {
	const title = useRef<string>('')
	const img = useRef<string>('')
	const desc = useRef<string>('')
	const dispatch = useAppDispatch()
	const id = Date.now()

	return (
		<Cont>
			<Wrap>
				<Form
					onSubmit={(e: React.FormEvent) => {
						if (title) {
							e.preventDefault()
							dispatch(
								addProduct({
									id: id,
									title: title.current,
									img: img.current,
									desc: desc.current,
									isFavorite: false,
								})
							)
						}
					}}
				>
					<Box>
						<Input
							type='text'
							name='img'
							placeholder='Image URL'
							onChange={e => (img.current = e.target.value)}
						/>
					</Box>
					<Box>
						<Input
							type='text'
							name='title'
							placeholder='Title'
							onChange={e => (title.current = e.target.value)}
						/>
					</Box>
					<Box>
						<Input
							type='text'
							name='desc'
							placeholder='Description'
							onChange={e => (desc.current = e.target.value)}
						/>
					</Box>
					<Btn type='submit'>Create</Btn>
				</Form>
			</Wrap>
		</Cont>
	)
}

const Cont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 100px;
`

const Wrap = styled.div`
	position: relative;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	overflow: hidden;
	border: 3px solid rgba(249, 249, 249, 0.1);
`

const Form = styled.form`
	background-color: white;
	padding: 40px;
	border-radius: 8px;
`
const Box = styled.div`
	position: relative;
	margin-bottom: 20px;
`
const Input = styled.input`
	padding: 20px 15px;
	border: 1px solid grey;
	border-radius: 8px;
	max-width: 300px;
	margin-bottom: 8px;
`
const Btn = styled.button`
	display: block;
	padding: 15px;
	width: 100%;
	border: none;
	background-color: #5252e4;
	color: white;
	border-radius: 8px;
	font-weight: bold;

	&:hover {
		background-color: #9696ff;
	}
`

export default InputField
