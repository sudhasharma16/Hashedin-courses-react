import React from 'react'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarOriginal } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './style.css'
import { CartContext, CartContextType } from '../Context/CardStateProvider'

interface Props {
    course: Product
}

interface Product {
    id: number;
    title: string;
    description: string;
    author: string;
    tags: Array<String>;
    price: number;
    discountedPrice: number
}

const CourseItem: React.FC<Props> = ({ course }) => {

    const { id, title, description, author, tags, price, discountedPrice } = course;
    const cartState = useContext(CartContext) as CartContextType;
    const { addToCart } = cartState;

    const [addedToWishlist, setAddedToWishlist] = useState(true);
    //Function to use currency pipe similar to Angular
    function currencyFormat(num: number) {
        return '₹' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '₹1,')
    }

    function toggleAddedToWishlist() {
        if (addedToWishlist === false)
            setAddedToWishlist(true);

        else
            setAddedToWishlist(false);
    }
    return (
        <>
            <div className="card courseItemCard">
                <div className="row m-2">
                    <div className="col-sm-1 themed-grid-col align-middle"> <Link to='/coursedisplay'><div className="courseItemSquare"></div></Link></div>
                    <div className="col-sm-3 themed-grid-col align-middle" style={{ fontSize: "small" }}><strong>{title}</strong></div>
                    <div className="col-sm-1 themed-grid-col courseItemSmall-Elements" style={{ fontSize: "small" }}>{author}</div>
                    <div className="addToWishListIcon col-sm-1 themed-grid-col align-middle">
                        {addedToWishlist === true ? <FontAwesomeIcon className="faSolidStar" style={{color: "#FFC300"}}icon={faSolidStar} onClick={toggleAddedToWishlist} /> : 
                        <FontAwesomeIcon icon={faStarOriginal} className="faStarOriginal" onClick={toggleAddedToWishlist} />}
                    </div>
                    <div className="col-sm-1 themed-grid-col mt-2.5 align-middle courseItemSmall-Elements" style={{ fontSize: "small" }}><Link to='/coursedisplay'>{currencyFormat(discountedPrice)}</Link></div>
                    <div className="col-sm-1 themed-grid-col mt-2.5 align-middle courseItemSmall-Elements" style={{ fontSize: "small" }}><Link to='/coursedisplay'><del>{currencyFormat(price)}</del></Link></div>
                    <div className="col-sm-3 themed-grid-col align-middle mt-1"><button className="btn btn-block courseItembtn" onClick={() => addToCart(course)} style={{ fontSize: "small", backgroundColor: "#FE8B1F", color: "white" }} >Add to cart</button></div>
                    <div className="col-sm-1 themed-grid-col align-middle mt-2"><Link to={`/courses/${id}`}><FontAwesomeIcon icon={faAngleRight} /></Link></div>
                </div>
            </div>
        </>
    )
}

export default CourseItem
