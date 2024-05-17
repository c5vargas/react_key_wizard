import App from './App'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import HomePage from './pages/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "new-password",
        element: <NewPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
