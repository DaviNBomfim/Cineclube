import { styled } from "styled-components"

export const Container = styled.div`


    padding: 4rem 0rem;

    h1{
        margin: 2rem 0;
    }

    .movie{
        display: flex;
        align-items: center;
        justfy-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2rem;
        max-width: 50%;
    }

    button{
        background: #6654da;
        border:none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%; 
        transition: all 0.3s;
    }

    button: hover{
        background: #5848c2;

    }

    span{
        line-height: 140%;
        margin-bottom: 1rem;
        font-size: 120%;
    }

    .dataLancamento{
        opacity: 0.5;
    }
`