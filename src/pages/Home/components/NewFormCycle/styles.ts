import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  font-weight: bold;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const BaseInput = styled.input`
  background: transparent;
  padding: 0.8rem 0.25rem 0.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-100']};

  font-weight: bold;
  font-size: 0.8rem;

  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const TaskInput = styled(BaseInput)`
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 3rem;
`
