import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App(){
    return (
        <div className="container">
          <div className="main">
            <Header />
            <div className="img">
              <img src="https://wallpapers.com/images/hd/sage-green-laptop-wallpaper-ijnimgzsxtpmnpmp.jpg" alt=""/>
            </div>
            <Footer />
          </div>
        </div>
    )
}
export default App;