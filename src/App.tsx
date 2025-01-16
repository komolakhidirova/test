import { Provider } from 'react-redux'
import { Route, HashRouter as Router, Routes } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'
import Header from './components/Header'
import CreateProduct from './pages/CreateProduct'
import Product from './pages/Product'
import Products from './pages/Products'
import store, { persistor } from './store/store'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<Products />} />
						<Route path='/product/:id' element={<Product />} />
						<Route path='/create-product' element={<CreateProduct />} />
					</Routes>
				</Router>
			</PersistGate>
		</Provider>
	)
}

export default App
