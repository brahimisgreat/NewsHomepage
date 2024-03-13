import './Group2.css'
import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/icon-menu.svg'


export default function Group2({toggleMenu, setTogglemenu}) {
  return (
    <div id='group2-container'>
            <img src={logo} id='logo' />
            <img src={menu} id='menu' onClick={() => setTogglemenu(!toggleMenu)} />
    </div>
  )
}
