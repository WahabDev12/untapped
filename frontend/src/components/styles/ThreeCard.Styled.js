import styled from "styled-components";

export const ThreeCardsStyled = styled.div`

    display: grid; 
    grid-template-rows: 120px 10px 10px 10px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0px;
    margin-top: 30px;
    margin-bottom:2px;
    margin-left:20px;
    width: 70%;
    grid-column-gap: 15px;
    

    div{
        border-radius:16px;
        box-shadow: 0px 2px 8px rgb(0 0 0 / 8%);
        padding:1x 10px;
        height:7.5rem;
        cursor:pointer;
    }     
    
    div > img{
        max-width:80%;
        border-top-left-radius:16px;
    }

    div > p{
        color:#0e0e0e;
        font-size: .875rem;
        left: 1.5rem;
        font-weight: 600;
        line-height:130%;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 25px;
        margin-inline-end: 0px;
    }

  

    @media (max-width: 950px) {
            
      display:none;
        
  }





`