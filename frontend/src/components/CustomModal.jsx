import { ModalStyled } from "./styles/Modal.Styled";
import { Icon } from '@iconify/react';


const CustomModal = ({ close }) => {


    return ( 
        <>
        <ModalStyled>
        <form required>
           <div className="modal"
                id="modal-one" aria-hidden="true"
            >
                <div className="modal-dialog">

                    <div className="modal-header">

                        <div className="dropdown">

                            <span className="user-post-name">
                                {/* eslint-disable-next-line */}
                            <img className="avatar" src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-4--v1.png"/>

                        {/* eslint-disable-next-line */}
                            <a href="">
                                Marie Currie
                            </a>

                            </span>
                            <span className="to">to</span>
                            <select
                               required
                             
                            >
                            <option > Select community</option>
                                <option>Software Engineering</option>
                                <option>Data Science</option>
                                <option>AI and ML</option>
                                <option>Entrepreneur</option>
                      

                            </select>

                        </div>
                        <a onClick={close} className="btn-close" aria-hidden="true">×</a>
                    </div>

                        <div className="modal-body">
                            <input className="title" 
                                type="text" 
                                placeholder= "Create a title" 
                            />  

                            <br></br>
                            <textarea className="caption"
                                placeholder="Add a description or link (optional)"
                              
                            >
                            </textarea>  

                        </div>
                        <div className="modal-footer"> 
                            <div className="editor">
                                <div className="slot">
                                    <label className="field-label">
                                        <span className="icon">
                                            <ion-icon name="image-outline"></ion-icon>    
                                        </span>
                                        <input className="file-input" 
                                            type="file" 
                                            hidden="hidden"
                                            accept="image/*" 
                                        />
                                    </label>

                                </div>

                                <label className="field-label">
                                    <span className="icon-link">
                                        <Icon icon="akar-icons:link-chain" />
                                    </span>
                                </label>


                        </div>


                                <button  className="post-btn" >
                                        Post
                                </button>
                              
                            
                            
                            
                        </div>
                </div>  
                
            </div>
        </form>
        </ModalStyled>
        </>
     );
}
 
export default CustomModal;