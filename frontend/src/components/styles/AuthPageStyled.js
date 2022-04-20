import styled from "styled-components";

export const AuthStyled = styled.section`

  display: grid; 
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px;
  height: 100vh;
  overflow-x: hidden;


  .sign-up-wrapper{
    width:100%;
    padding: 20px 20px 20px 60px;
    margin-top:2rem;
    
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  .image-wrapper{
    width:100%;
  }

  .logo-heading{
    display:flex;
    align-items: center;
    margin-bottom:1rem;
  }
  
  .logo-heading > span{
      margin-left:7px;  
      font-size:25px;
      font-weight:200;
      font-family: "Comic Sans";
  }

  .logo-alert a{
      color:#3380F1;
      font-family: "Comic Sans";
  }

  .login-alert > p{
    font-size:48px;
    font-weight:600;
    font-family: "Comic Sans";
    margin-bottom:0.35rem;

  }

  .login-alert{
    margin-bottom:1.5rem;
  }
  
  .google-btn{
    max-height: 3rem;
    padding-top:15px;
    padding-bottom:30px;
    color: #0e0e0e;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: .875rem;
    height: 2.5rem;
    margin-bottom:1.5rem;
    width: 380px;
    cursor: pointer;
  }

  .google-signup{
    width: 538px;
  }

  .google-btn  img{
      width:25px;
      height:25px;
    
  }

  .btn-title{
     margin-left:20px;
     padding:0px auto;
  }

  .input-fields{
    display:flex;
    flex-direction: column;
    
  }

  .input-text{
    margin-top:10px;
    margin-bottom:2rem;
    width: 350px;
    padding:17px;
    border-radius:4.5px;
    font-size:14px;
    outline:none;
    border:1px solid #666;
    font-family: "Inter",sans-serif;

  }

  small{
     font-family: "Inter",sans-serif;
     font-size:15px;

  }

  small a{
    font-family: "Inter",sans-serif;
    font-size:15px;
    color:#3380F1;
    font-weight:600;

  }

  .spacer{
    width:380px;
    display:flex;
    align-items: center;

  }

  .spacer-large{
    width:538px;
  }

  .spacer .line{
      height: 1px;
      flex: 1;
      background-color: rgb(138, 134, 134)
  }

 

  .spacer small{
      padding: 0 1rem;
      color: rgb(155, 150, 150);
      font-size: 15px;
      padding-top: 1px;
  }


  .image-wrapper{
    border-left: 1px solid rgb(197, 192, 192);
  }

  .img-illustration{
    
    height: 100vh;
    width: fit-content;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .submit-btn{
    outline:none;
    padding:15px;
    border:none;
    border-radius: 4px;
    background-color: #c5ef53;
    font-size:15px;
    font-weight:600;
    width:380px;
    cursor: pointer;
  }

  .submit-btn:hover{
    background-color:#cef16f;

  }

  .footer{
    margin-top:2.7rem;
    width:300px;
    line-height:1.6rem; 

  }

  .footer-signup{
    width:500px;
  }

  hr{
    margin-bottom:1rem;
    width:380px;

  }

  .forgot-alert{
    font-size: .975rem;
    color: #666;
    margin-top:1.rem;

  }

  .recover{
    color:#3380F1;
    font-weight:600;
    font-size:.975rem;
  }

  .message-wrapper{
    width:400px;
    margin-top:0.2rem;  
    margin-bottom:0.8rem;
    
  }

  .message{
    font-family: "Inter";
    line-height:1.6rem; 
  }

  .first-last{
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
  }

  .input-flex{
     width:220px;
  }

  .input-column{
     width:500px;
  }

  .input-column-btn{
    width:538px;
  } 

  .sign-up{
    margin-left:70px;
  }



`