import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
      <div className="footer">
        <span>Admin</span>
        <span>
          &copy; <Link to="https://github.com/dev-sajjad" target='_blank' className='link'>dev-sajjad</Link>{" "}
          Admin Dashboard
        </span>
      </div>
    );
};

export default Footer;