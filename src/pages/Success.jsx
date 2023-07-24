import styled from '@emotion/styled'
import { Button, Stack, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const Container = styled(Stack)`
    justify-content: center;
    align-items: center;
    gap: 1.25em;
    height: 75vh;
    text-align: center;
    & > * {
        max-width: 700px;
    }
`
const Title = styled(Typography)`
    color: var(--secondary-cl);
`
const STitle = styled(Typography)`
    color: var(--gray-cl);
`
const SButton = styled(Button)`
    width: 208px;
    height: 44px;
    background-color: var(--secondary-cl);
    color: var(--primary-cl);
    border-radius: 0;
    &:hover {
        background-color: var(--secondary-cl);
    }
`


const Success = () => {
    const location = useLocation()

    console.log(location)
  return (
    <Container>
            <Title variant="h5" component="h1">Your Order Is Completed!</Title>
            <STitle>
                Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
            </STitle>
            <SButton><Link to="/products?page=1" className="link">Continue Shopping</Link></SButton>
    </Container>
  )
}

export default Success