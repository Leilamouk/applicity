import logo from '../images/logo.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Topbar = () => {
    return ( 
        <div className='topbar'>
            <img src={logo} alt="" />
            <AddShoppingCartIcon sx={{fontSize: 50}} />
        </div>
     );
}
 
export default Topbar;