import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";


function App() {
    return (
        <div className="App">
                {/* 画面遷移の記述 */}
        
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </div>
    );
}

export default App;