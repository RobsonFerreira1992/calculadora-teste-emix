import React from 'react'
import { Cabecalho } from '.'
import Logo from '../../imagens/logo-emix.svg';
const Header = () => {
  return (
    <Cabecalho>
      <img src={Logo} alt="Logo E.mix" />
    </Cabecalho>
  )
}

export default Header
