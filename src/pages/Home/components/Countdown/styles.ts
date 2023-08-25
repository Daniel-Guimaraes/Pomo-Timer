import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  line-height: 5rem;

  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 0.5rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 0rem 0.5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    font-size: 10rem;

    span {
      height: 10rem;
    }
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};

  display: flex;
  align-items: center;
`
