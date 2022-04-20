import styled from "styled-components";

export const HeaderStyled = styled.header`

  display: flex;
  align-items: center;
  padding: 17px 25px;
  top: 0;
  z-index: inherit;
 
  h2{
    font-size: 17.5px;
    font-weight:300;
    padding-left: 7px;
    font-family:'Inter',sans-serif;
  }

  .notifications{
      padding-left:1.5em;
      cursor: pointer;
  }

  .settings{
      padding-left:3.8em;
      cursor:pointer;
  }

  .line{
      width:270px;
      background-color:#333;
      height:10px;
  }

  

  @media (max-width: 950px) {
      h2{
          display: none;

      }
      padding: 20px;
      .notifications{
          display:none;
      }
      .settings{
          display:none ;
      }
  }

`