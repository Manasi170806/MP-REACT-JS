import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <>
  <h1 className="title text-center mt-4">Bootstrap template</h1>
    <App />
  </>
)
