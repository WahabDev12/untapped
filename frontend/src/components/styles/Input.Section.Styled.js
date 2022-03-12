import styled from "styled-components";

export const InputStyled = styled.section`

    margin-top:1.2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:15px;
    margin-left:20.5em;

.input-box {
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    width: 92%;
    max-width: 100%;
    padding: 12.5px 30px;
    border: 1px solid #dadada;  
    
}

.search-jobs {
    border: none;
    outline: none;
    width: 100%;
    margin-left:7px;
    font-size:1rem;
    border-radius: 8px;
    line-height:1.375rem;
  }
  
  @media (max-width: 950px) {
            
        .input-box{
            width:80%;
            max-width: 100%;
        } 
        
        margin-left:6em;
    }




`
