import Home from "./Home";
import Jobs from "./Jobs";
import Communities from "./Communities";

const State = ({component}) => {

    const toggle = (component) => {
        switch(component){
            case 'home':
                return <Home />
            case 'jobs':
                return <Jobs />
            case 'communities':
                return <Communities />
            default:
                return "Page not Found 😥"
        }
    }


    return (  
        <div className="container">
            {toggle(component)}    
        </div>
    );
}
 
export default State;