import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'
import * as S from './styles'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.items)
  const favs = useSelector((state: RootReducer) => state.favoritos.items)

  const valorTotal = itens.reduce((acc: any, item: { preco: any }) => {
    acc += item.preco
    return acc
  }, 0)

  const favoritosTotal = favs.reduce((acc: any, item: { preco: any }) => {
    acc += item
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>Larva Store</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
      <div>
        <img src={cesta} />
        <span>{favs.length} Favoritos</span>
      </div>
    </S.Header>
  )
}

export default Header
