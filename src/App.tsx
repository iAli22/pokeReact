import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import MainLayout from './layouts/MainLayout'
import styles from './styles/App.module.scss'
import ROUTES from './constants/routes'
import { NotificationProvider } from './contexts/NotificationContext'
import { NotificationContainer } from './components/common/Notification'

const App = () => {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NotificationProvider>
            <Router>
              <div className={styles.app}>
                <Routes>
                  {ROUTES.map((route) => {
                    const RouteComponent = route.component;
                    return (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={
                          <MainLayout>
                            <RouteComponent />
                          </MainLayout>
                        }
                      />
                    );
                  })}
                </Routes>
                <NotificationContainer />
              </div>
            </Router>
          </NotificationProvider>
        </PersistGate>
      </Provider>
  )
}

export default App
