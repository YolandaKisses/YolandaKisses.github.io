import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DataDriverUI from 'dd-ui-library'
import 'dd-ui-library/dd-ui-library.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(DataDriverUI)
    Vue.use(VXETable)
  }
}