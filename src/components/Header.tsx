import { NavLink } from 'react-router'
import styled from 'styled-components'

const Header = () => {
	return (
		<Nav>
			<NavLink to='/'>
				<Logo>
					<img src='./../../logo.svg' alt='logo' />
				</Logo>
			</NavLink>

			<NavMenu>
				<NavLink to='/'>
					<span>
						<strong>Products</strong>
					</span>
				</NavLink>

				<NavLink to='/create-product'>
					<span>
						<strong>Create</strong>
					</span>
				</NavLink>

				<NavLink to='/'>
					<span>
						<strong>Contacts</strong>
					</span>
				</NavLink>
			</NavMenu>
		</Nav>
	)
}

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`

const Logo = styled.div`
	padding: 10px;
	width: 50px;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;

	img {
		display: block;
		width: 100%;
		color: white;
	}
`

const NavMenu = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	height: 100%;
	justify-content: flex-end;
	margin: 0px;
	padding: 0px;
	position: relative;
	margin-right: auto;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		span {
			color: #5252e4;
			font-size: 16px;
			letter-spacing: 1.42px;
			line-height: 1.08;
			padding: 2px 6px;
			white-space: nowrap;
			position: relative;

			&:before {
				background-color: #5252e4;
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
	}

	@media (max-width: 768px) {
		display: none;
	}
`

export default Header
