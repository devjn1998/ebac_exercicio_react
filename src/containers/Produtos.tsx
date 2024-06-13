import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { RootReducer } from '../store'
import { adicionar } from '../store/reducers/carrinho'
import { toggleFavoritos } from '../store/reducers/favoritos'
import { setProdutos } from '../store/reducers/produtos'
import { useGetProductsQuery } from '../store/services/api'
import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProductsQuery()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.items)

  useEffect(() => {
    if (produtos) {
      dispatch(setProdutos(produtos))
    }
  }, [produtos, dispatch])

  const favoritar = (produto: ProdutoType) => {
    dispatch(toggleFavoritos(produto))
  }

  const adicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionar(produto))
  }

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((fav: { id: number }) => fav.id === produto.id)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <S.Produtos>
      {produtos?.map((produto: ProdutoType) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
