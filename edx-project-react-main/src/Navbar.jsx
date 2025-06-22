import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function Navbar({count}) {
    return (
        <div className='w-screen border-2 border-gray-400 border-x-0'>
        <nav className="font-medium sticky top-0 w-full h-12 m-2 p-1 bg-white flex justify-between items-center">
            <div>
                <Link to="/" className=" ml-4 mr-8">Home</Link>
                <Link to="/products" className="mr-8">Items</Link>
            </div>
            <div className='flex items-center'>
            <Link to="/signin" className="mr-8">Signin</Link>
            <Link to="/signup" className='mr-8'>Register</Link>
                <button className="bg-gray-200 p-2 rounded-full mr-4">
                <span className="mr-2 text-red-600 font-bold text-xl">{count}</span>
                    
                    <FontAwesomeIcon icon={faShoppingCart} />
    
                </button>
            </div>
        </nav>
        </div>
    );
}
