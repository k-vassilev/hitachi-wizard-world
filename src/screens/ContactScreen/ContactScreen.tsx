import CorneliusImage from '../../assets/Corneliushogwarts.webp';
import './contactScreen.css';

const ContactScreen = () => {
    return (
      <address>
        <img className="responsive-img" src={CorneliusImage} alt="Cornelius Oswald Fudge" />
        <h2>Contact Information</h2>
        <p>Name: Cornelius Oswald Fudge</p>
        <p>Organization: Ministry of Magic Headquarters</p>
        <p>Location: Underground of Whitehall and the HM Treasury building</p>
        <p>City: London</p>
        <p>Country: Great Britain</p>
      </address>
    );
  };
  
  export default ContactScreen;