import styled from 'styled-components'
import ItemCard from './components/ItemCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from './consts';
import { Link } from 'react-router-dom';


export default function Home() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        async function fetchData() {
            axios.get(`${API_URL}/product`).then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
        }

        fetchData();
    }, [])
    
    return(
        <Container>
            <Header>
                <Link to={'cadproduto'} style={{textDecoration: 'none', color: 'black'}}>Cadastrar Produto</Link>
                <Link to={'cadcategoria'} style={{textDecoration: 'none', color: 'black'}}>Cadastrar Categoria</Link>
                <Link to={'caduser'} style={{textDecoration: 'none', color: 'black'}}>Cadastrar Usuário</Link>
            </Header>

            <Body>
                {products.length > 0 && products.map((product) =>(
                    <ItemCard 
                        tittle={product.name} 
                        description={product.description}
                        price={product.value}
                        qtt={product.qtt}
                    />
                ))}
            </Body>

        </Container>
    );
}

const Container = styled.div`
    background-color: #f2f2f2;
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Header = styled.div`
    background-color: white;
    display: flex;
    justify-content: flex-end;
    padding: .5rem 2rem;
    align-items: center;
    gap: 2rem;
    height: 3rem;
    box-shadow: 2px 2px 20px 2px #0000004d;
`

const Body = styled.div`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    justify-content: center;
`

