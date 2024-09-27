import { styled } from "styled-components";

export const CardsWrapper = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    justify-content: space-between; 
    grid-gap: 40px; 
  @media (min-width:${({ theme }) => theme.smBreakpoint + 1}px) and (max-width: ${({ theme }) => theme.mdBreakpoint}px) {
      padding: 0%;
      grid-template-columns: 1fr 1fr
  }
  @media (max-width: ${({ theme }) => theme.smBreakpoint}px) {
      padding: 0%;
      grid-template-columns: 1fr
  }
`

export default CardsWrapper