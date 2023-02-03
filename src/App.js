import "./App.css"
import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Catalogue from "./pages/Catalogue"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (

        <div className="App">
            <Router>
                
                <Navbar />
                <Navbar2/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tech" exact component={Catalogue} />

                    <h1>asDada</h1>
                </Switch>
                <Footer/>

            </Router>

        </div>



    );
}
export default App;