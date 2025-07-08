import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Title from './components/Title.jsx'
import UserInfo from './components/UserInfo.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <Title />
    <UserInfo />
  </div>
)
