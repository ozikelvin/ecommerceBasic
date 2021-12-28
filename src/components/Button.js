import styled from 'styled-components'

export const ButtonContainer = styled.button`
		text-transfrom: capitalize;
		font-size: 1.4rem;
		background:#fff;
		border: 0.05rem solid #231997;
		border-color: ${props => 
			props.cart ? "var(--mainGreen)" : "var(--lightBlue)"};
		color: ${prop => (prop.cart ? "var(--mainGreen)" : "var(--lightBlue)")};
		border-radius: 0.5rem;
		padding: 0.2rem 0.5rem;
		cursor: pointer;
		margin: 0.2rem 0.5rem 0.2rem 0;
		transition: all 0.5s ease-in-out;
	&:hover {
		background: ${prop => prop.cart ? "var(--mainGreen)" : "var(--lightBlue)"};
		color: var(--mainBlue);
	}
	&:focus {
		outline: none;
	}
`; 