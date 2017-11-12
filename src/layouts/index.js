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
	color: 'black',
	borderBottom: '2px solid black'
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
		color: grey;
		text-decoration: none;
		text-transform: uppercase;

		&:hover {
			border-bottom: 2px solid black;
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

			a {
				color: grey;
				text-decoration: none;

				&:hover {
					border-bottom: 2px solid black;
				}
			}
		}
	}
`

const Content = styled.main`grid-area: main;`
