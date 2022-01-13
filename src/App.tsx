import { Admin } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import Dashboard from './Dashboard'

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={simpleRestProvider('http://path.to.my.api')}
  >
    <Dashboard />
  </Admin>
)

export default App
