import { styled } from "styled-components";

export const CardsWrapper = styled.div`
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(200px, 30%)); 
    justify-content: space-between; 
    row-gap: 40px; 
    align-items: self-start;
  @media (min-width:${({ theme }) => theme.smBreakpoint + 1}px) and (max-width: ${({ theme }) => theme.mdBreakpoint}px) {
      padding: 0%;
  }
`

export default CardsWrapper