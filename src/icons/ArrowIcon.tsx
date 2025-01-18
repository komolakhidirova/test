import styled from 'styled-components'

const ArrowIcon = () => {
	return (
		<Icon>
			<svg
				width='35'
				height='35'
				viewBox='0 0 9 8'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M4 1L1 4M1 4L4 7M1 4L9 4' stroke='#5252E4' />
			</svg>
		</Icon>
	)
}

const Icon = styled.div`
	svg:hover path {
		stroke: #9696ff;
	}
`

export default ArrowIcon
