import { ModalStyled } from "./styles/Modal.Styled";

const Modal = () => {
    return ( 
        <ModalStyled>
           <div className="modal" id="modal-one" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-header">
                        <div className="dropdown">
                            <span className="user-post-name">
                            <img alt="avatar" className="avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/39/000000/external-avatar-game-development-xnimrodx-lineal-color-xnimrodx-2.png"/>
                               <a> Abdul-Wahab Abass</a>

                            </span>
                            <span className="to">to</span>
                            <select>
                                <option> Select community</option>
                                <option>💡 General Advice</option>
                                <option>🎤 Software Engineering</option>
                                <option>🎓 Entrepreneurship</option>
                            </select>
                        </div>
                        <a href="#close" className="btn-close" aria-hidden="true">×</a>
                    </div>
                    <div className="modal-body">
                          <input className="title" type="text" placeholder="Create a title" />  
                          <br></br>
                          <textarea className="caption" placeholder="Add a description or link (optional)"></textarea>  
                        </div>
                        <div className="modal-footer">  
                        <a href="#close" className="post-btn">
                            Post    
                        </a> 
                        </div>
                </div>  
          </div>
        </ModalStyled>
     );
}
 
export default Modal;