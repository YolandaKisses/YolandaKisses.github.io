import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ddUiLibrary from 'dd-ui-library'
import 'dd-ui-library/dd-ui-library.css'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(ddUiLibrary)
  }
}