import React from 'react'
import SwitchLanguage from './utils/switch-language'

function Header() {
  return (
    <header className='w-screen px-8 lg:px-24 py-8 flex justify-end fixed top-0 z-50'>
        <SwitchLanguage />
    </header>
  )
}

export default Header