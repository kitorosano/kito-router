import { lazy, Suspense } from 'react'

import './App.css'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    component: LazyAboutPage
  },
  {
    path: '/search/:query',
    component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router
          routes={appRoutes}
          defaultComponent={Page404}
        >
          <Route
            path='/'
            component={LazyHomePage}
          />
          <Route
            path='/about'
            component={LazyAboutPage}
          />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
