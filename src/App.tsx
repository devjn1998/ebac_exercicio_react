import { Provider } from 'react-redux'
import Header from './components/Header'
import ProdutosComponent from './containers/Produtos'
import { store } from './store'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ProdutosComponent />
      </div>
    </Provider>
  )
}

export default App
