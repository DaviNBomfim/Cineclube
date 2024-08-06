import { styled } from 'styled-components';

export const Container = styled.div`
    h1{
        text-align: center;
        margin: 4rem, 0;
        margin-bottom: 3rem;
    }

    

`

export const MovieList = styled.ul`
    display: grid;
    list-styled: none;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`
export const Movie = styled.li`
    align-items: center;
    display: flex;
    flex-direction: column;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }


`