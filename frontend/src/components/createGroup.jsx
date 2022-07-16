import Sidebar from "./Sidebar";
import { CreateGroupStyled } from "./styles/CreateGroup.Styled";
import { MainGridStyled } from "./styles/MainGrid.Styled";


const CreateGroup = () => {

    const emojis = [
        '😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😔','😌','😂','😭','😪','😥','😰','😅','😓','😆','😋','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','👼','👸','😺','😸','😻','😽','😼','🙀','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👅','👄','👍','👌','👊','✊','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','⛅','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📌','📎','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','🆕','🚭','🈷','🈸','🈂','Ⓜ','🛂','㊙','㊗','❇','❎','✅','💟','🆚','📳','🅾','💠','➿','🏧','💹','💲','💱','❌','⭕','❗','❓','❕','❔','🔃','🕤','✖','➕','➖','➗','💮','💯','✔','☑','🔘','🔗','➰','🔱'
    ];

    const selectedEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    

    return ( 
        <>
            <Sidebar />
            <MainGridStyled>
                    <CreateGroupStyled>
                        <h2 className="group-alert">Create a community🎉</h2>
                        <br></br> 
                <div className="main-div">
                    <div className="primary_div">
                      <div className="group-info">
                        <div className="group-icon">
                              <h1 className="emoji">{selectedEmoji}</h1>
                        </div>
                        

                        <div className="group-name">
                            Community Name
                        </div>
                            {/* eslint-disable-next-line */}
                        <a className="members__privacy" href="">
                            0 members | <ion-icon name="earth-outline"></ion-icon> Public
                        </a>

                        <div className="desc-invite">

                        <div className="group-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                        </div>

                        </div>

                    </div>

                        <div className="banner">
                            <img 
                            alt=""
                            src="https://img.icons8.com/external-filled-outline-02-chattapat-/180/000000/external-community-social-media-filled-outline-02-chattapat-.png"
                            />
                        </div>
                </div>

                    {/* Input Fields */}
                    <div className="fields">

                        <label>Community Name</label>
                        <input placeholder="Community Name" className="field c_name" />

                        <label>Description</label>
                        <textarea  
                        placeholder="What is the purpose of your group? Limit 175 characters" 
                        id="c_desc" className="field"
                        
                        />

                        <label>Cover Photo <small>(Optional)</small></label>
                        <div className="slot">
                        <div className="photo-upload">
                            <label className="field-label">
                                    <span className="icon">
                                        <ion-icon name="cloud-upload-outline"></ion-icon>
                                    </span>
                                    <span className="title">Upload photo</span>
                                    <input 
                                        className="file-input" 
                                        type="file" hidden="hidden"
                                        accept="image/*"
                                    />
                            </label>

                        </div>
                        </div>

                        <label>Community Icon <small>(Optional)</small></label>
                        <div className="slot">
                        <div className="photo-upload">
                            <label className="field-label">
                                    <span className="icon">
                                        <ion-icon name="cloud-upload-outline"></ion-icon>
                                    </span>
                                    <span className="title">Upload photo</span>
                                    <input 
                                        className="file-input"   
                                        type="file" hidden="hidden"
                                        accept="image/*" 
                                    />
                            </label>

                        </div>
                     
                        </div>

                        <label>Privacy</label>  
                        <div className="select">
                            <select name="format" id="format">
                                <option selected disabled>Select Privacy</option>
                                <option value="public">Public</option>
                                <option value="private">Private</option>

                            </select>
                        </div>

                        <label>Community Color</label>
                        <div className="color-field">
                             <input className="color-input" type="color" />
                        </div>

                        <div className="checkbox-wrapper">
                        <label className="checkbox-label">
                            <input className="checkbox-input" type="checkbox" />
                            <span className="terms-text">
                                I have read the <a className="link-to" href="/app/terms-and-conditions">
                                    Untapped Code of Conduct</a> and I agree to enforce it in my community
                            </span>
                        </label>
                        </div>

                        <div className="create-wrapper">
                            <button className="create-btn">Create community</button>
                        </div>
                 

                    </div>
                </div>
                      

                </CreateGroupStyled>
            </MainGridStyled>
        </>
     );
}
 
export default CreateGroup;