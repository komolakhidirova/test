import { Route, HashRouter as Router, Routes } from 'react-router'
import Header from './components/Header'
import './index.css'
import CreateProduct from './pages/CreateProduct'
import Product from './pages/Product'
import Products from './pages/Products'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/create-product' element={<CreateProduct />} />
				<Route path='/product/:id' element={<Product />} />
			</Routes>
		</Router>
	)
}

export default App
