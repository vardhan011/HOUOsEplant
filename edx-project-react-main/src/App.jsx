import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import Navbar from './Navbar';
import Productpage from './Productpage';
import Orderpage from './Orderpage';
import { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount ? JSON.parse(savedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const countinc = () => {
        if (count < 6) setCount(count + 1);
    };

    const countdec = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <Router>
            <div className="nav">
                <Navbar count={count} />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Productpage countinc={countinc} countdec={countdec} />} />
                <Route path="/orders" element={<Orderpage />} />
            </Routes>
        </Router>
    );
}

export default App;