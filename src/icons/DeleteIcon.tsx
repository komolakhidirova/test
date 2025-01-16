import styled from 'styled-components'

const DeleteIcon = () => {
	return (
		<Icon>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='35'
				height='35'
				viewBox='0 0 24 24'
				id='delete'
			>
				<g fill='none' fill-rule='evenodd' stroke='#5252E4'>
					<path d='M5.5 7.5V20A1.5 1.5 0 0 0 7 21.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5h-14z'></path>
					<path
						stroke-linecap='round'
						d='M8.5 10.41v8.18M12.5 10.41v8.18M16.5 10.41v8.18M9 4.333V3.244C9 2.557 9.627 2 10.4 2h4.2c.773 0 1.4.557 1.4 1.244v1.09'
					></path>
					<rect width='18' height='3' x='3.5' y='4.5' rx='1.5'></rect>
				</g>
			</svg>
		</Icon>
	)
}

const Icon = styled.button`
	background: none;
	border: none;
	outline: none;
	box-shadow: none;
	cursor: pointer;
	svg:hover g {
		fill: #9696ff;
	}
`

export default DeleteIcon
