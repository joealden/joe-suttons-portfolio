import React from 'react'
import Link from 'gatsby-link'
import styled, { injectGlobal } from 'react-emotion'

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Roboto');

	body {
		margin: 0;
		font-family: 'Roboto', sans-serif;
	}
`

const activeLink = {
	color: 'black'
}

export default ({ children }) => (
	<MainWrapper>
		<Grid>
			<Header>
				<Link to="/" exact activeStyle={activeLink}>
					Joe Sutton
				</Link>
			</Header>
			<Navigation>
				<ul>
					<li>
						<Link to="/about" activeStyle={activeLink}>
							About
						</Link>
					</li>
					<li>
						<Link to="/showcase" activeStyle={activeLink}>
							Showcase
						</Link>
					</li>
					<li>
						<Link to="/case-studies" activeStyle={activeLink}>
							Work
						</Link>
					</li>
					<li>
						<Link to="/contact" activeStyle={activeLink}>
							Contact
						</Link>
					</li>
				</ul>
			</Navigation>
			<Content>{children()}</Content>
		</Grid>
	</MainWrapper>
)

const MainWrapper = styled.div`
	background-color: white;
	height: 100vh;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas: 'header header nav' 'main main main';
	grid-column-gap: 4rem;
	padding: 4rem;
`

const Header = styled.header`
	a {
		text-transform: uppercase;
		color: grey;
		text-decoration: none;
		transition: color 0.25s ease-out;
		display: inline-block;

		&:hover {
			color: black;
		}

		&::after {
			content: '';
			display: block;
			width: 0;
			height: 2px;
			background-color: #000;
			margin-top: 0.1rem;
			transition: width 0.25s ease-out;
		}

		&:hover::after {
			width: 100%;
		}
	}
`

const Navigation = styled.nav`
	grid-area: nav;

	ul {
		margin: 0;

		li {
			list-style: none;
			text-align: right;

			&:not(last-child) {
				margin-bottom: 0.4rem;
			}
		}

		li a {
			color: grey;
			text-decoration: none;
			transition: color 0.25s ease-out;
			display: inline-block;

			&:hover {
				color: black;
			}

			&::after {
				content: '';
				display: block;
				width: 0;
				height: 2px;
				background-color: #000;
				margin-top: 0.1rem;
				transition: width 0.25s ease-out;
			}

			&:hover::after {
				width: 100%;
			}
		}
	}
`

const Content = styled.main`grid-area: main;`
