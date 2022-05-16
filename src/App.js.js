import React from 'react';
import { HashRouter,  Routes, Route, Link } from 'react-router-dom';
import Myhome from './home';
import Cart from './cart';
import Login from './login';
import Register from './register';



function App() {
	return (
			<HashRouter>
				<Routes>
					<Route exact path="/" element={<Myhome/>} />
					<Route exact path="/cart" element={<Cart/>} />
					<Route exact path="/login" element={<Login/>} />
					<Route exact path="/register" element={<Register/>} />
				</Routes>
			</HashRouter>
		)
}

export default App;