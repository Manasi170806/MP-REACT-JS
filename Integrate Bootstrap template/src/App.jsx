import './App.css'
import Content from './Components/Content.jsx'
import Buttons from './Components/Button.jsx'
import Img from './Components/Img.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container container-lg w-50 mt-5">
      <Content />
      <Buttons />
      <Img />
    </div>
  )
}

export default App;
