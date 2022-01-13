import { Admin } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import Layout from './layout/Layout'
import Dashboard from './Dashboard'

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={simpleRestProvider('http://path.to.my.api')}
    layout={Layout}
  >
    <Dashboard />
  </Admin>
)

export default App
