// es6只有export可以触发tree shaking机制。commonjs只有exports可以触发tree shaking机制
import Icon from './components/Icon/index'
import Loading from './components/Loading/index'
import FlyBox from './components/FlyBox/index'
import Logo from './components/Logo/index'
import VueCountTo from './components/VueCountTo/index'
import VueEcharts from './components/VueEcharts/index'
import BaseScrollList from './components/BaseScrollList/index'
import Container from './components/Container/index'

export default function (Vue) {
  Vue.use(Icon)
  Vue.use(Loading)
  Vue.use(FlyBox)
  Vue.use(Logo)
  Vue.use(VueCountTo)
  Vue.use(VueEcharts)
  Vue.use(BaseScrollList)
  Vue.use(Container)
}
