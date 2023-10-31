
import './Homee.css';
import LockIcon from '@mui/icons-material/Lock';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import GroupIcon from '@mui/icons-material/Group';
import logo from './logo.jpg'

function Homee() {
return (
    <div>
       <img src={logo} />
      <p><span><b>Revolutionize</b></span> your business with our all-in-one web application, where companies can effortlessly complete questionnaires and access results and solutions in one convenient platform.</p>
      <div className="grids">
        <div className="items"><LockIcon color="warning" > </LockIcon><span ><b>Security Assessment and Solutions:</b></span>Provide a platform where businesses can conduct comprehensive security assessments</div>
        <div className="items"><ContentPasteSearchIcon color="warning"></ContentPasteSearchIcon><span><b>Data Analytics and Reporting:</b></span>offer data analytics tools that allow businesses to collect, analyze, and visualize data related to their operations. </div>
        <div className="items"><GroupIcon color="warning"></GroupIcon ><span><b>User friendly Content Management:</b></span>A user friendly system that allows businesses to create, update, and manage their website content. </div>
      </div>
    </div>
  );
}

export default Homee;
