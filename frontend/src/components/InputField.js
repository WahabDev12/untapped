import { InputStyled } from "./styles/Input.Section.Styled";
import { Icon } from '@iconify/react';


const InputField = () => {
    return (
        <>
        <InputStyled>
        
        <div className="input-box">
                <Icon icon="akar-icons:search" height="21" inline={true} />
        <div>
          </div>
          <input type="text" className="search-jobs" placeholder="Search Jobs" />
        </div>
        </InputStyled>
        
        </>
      
      );
}
 
export default InputField;