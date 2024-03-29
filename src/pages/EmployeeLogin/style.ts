import { styled } from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  align-items: center;

  .name{
    text-align: center;
    margin-bottom: 2rem;
  }

  .box{

    border: 1px solid rgba(223, 99, 71,0.3);
    border-radius: 1rem;
    background-color: rgba(223, 99, 71,0.3);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1{
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: rgba(250,250,250,0.8);
    }

    input{
        border-color: rgba(230,230,230,0.5);
        background-color: rgba(230,230,230,0.2);
        
    }

    input::placeholder{
        
    }

    .links{
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        color: rgba(250,250,250,0.8);
    }

    button{
        width: 100%;
        height: 3rem;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        font-weight: 400;
    }
  }
`;