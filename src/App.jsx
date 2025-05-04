import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { routes } from './routes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(route => (
            <Route index={route.index} element={route.element} path={route.path} key={route.path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
