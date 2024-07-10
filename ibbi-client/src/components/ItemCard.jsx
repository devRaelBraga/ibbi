import styled from "styled-components";


export default function ItemCard({tittle, src, description, price, qtt}) {

    return (
        <Wrapper>
            <ItemTittle>{tittle}</ItemTittle>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" alt="" />
            <Description>
                {description}
            </Description>
            <Price>{price}$</Price>
            <Quantity>{qtt}</Quantity>
            <BuyButton>
                Buy
            </BuyButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: .5rem;
    padding: .5rem;
    min-width: 200px;
    height: 30vh;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    border-radius: 32px;
    max-width: 10vw;
    background-color: white;
    border: 2px solid #a9a9a9;

    img {
        width: 80%;
    }
`

const ItemTittle = styled.span`
    
`

const Description = styled.p`
    /* width: 100%; */
    word-wrap: break-word;
`

const Price = styled.p`

`

const Quantity = styled.p`

`

const BuyButton = styled.button`

    background-color: #34a834;
    border: 1px solid #8a8a8a;
    border-radius: 8px;
    padding: .4rem 2rem;
    color: white;
    font-weight: 600;

    &:hover {
        cursor: pointer;
    }

`