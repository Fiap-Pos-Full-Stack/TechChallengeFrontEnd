import { MenuNav, MenuWrapper,MenuItem } from './style'
import useMenu from '../../hooks/useMenu';

export default function AsideMenu() {
  const {open, setOpen} = useMenu();
  return (
    <MenuWrapper $openMenu={open} onClick={()=> setOpen(false)}>
        <MenuNav  onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><MenuItem href='#'></MenuItem></li>
              <li><MenuItem href='#'></MenuItem></li>
            </ul>
        </MenuNav>
    </MenuWrapper>

  )
}
