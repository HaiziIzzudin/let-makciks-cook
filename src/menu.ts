import './style.scss'
import { setupMenu } from './menupage'
import './theme.ts'
import { ethnicity, menu_index } from './headerfooter.ts'

console.info(ethnicity + menu_index)

setupMenu(ethnicity, menu_index, document.querySelector<HTMLDivElement>('#specified-menu')!)