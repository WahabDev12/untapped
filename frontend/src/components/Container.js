import { ContainerStyled } from "./styles/Container.Styled";

const Container = () => {
    return (  
         <ContainerStyled>
                <p className="alert">NEW JOBS ON SHITAPP</p>
                <div className="job-container">
                    
                <div className="job">
                    <p>This is a test</p>   
                    <p>This is a test</p>    
                    <p>This is a test</p>    
                    <p>This is a test</p>    
                    <p>This is a test</p>    
                    <p>This is a test</p>    
                    <p>This is a test</p>    
                   
                </div>
                <div  className="job">1</div>
                <div  className="job">1</div>
                <div  className="job">1</div>
                    
                </div>
         </ContainerStyled>

    );
}
 
export default Container
