import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Alarm, Scroll, Timer } from 'phosphor-react'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <span>
          <Alarm size={30} />
        </span>

        <nav>
          <NavLink to="/" title="Temporizador">
            <Timer size={24} />
          </NavLink>

          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </div>
  )
}
