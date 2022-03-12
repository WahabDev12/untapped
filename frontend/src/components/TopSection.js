import "./topsection.css";
import { Icon } from '@iconify/react';

const TopSection = () => {
    return (  
        <section id="top-section">
        <div className="input-box-home">
          <Icon icon="akar-icons:search" height="18" inline={true} />

          <div>
          </div>
          <input className="search-posts" placeholder="Search posts..." />
        </div>
      
      </section>
    );
}
 
export default TopSection;