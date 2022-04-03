import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarOriginal} from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './style.css'

interface Props {
    id: number;
    title: string,
    description: string;
    author: string;
    tags: string[];
    price: number;
    discountedPrice: number;
}
const CourseItem: React.FC<Props> = ({id, title, description, author, tags, price, discountedPrice}) => {

    const [addedToWishlist, setAddedToWishlist] = useState(false);
    //Function to use currency pipe similar to Angular
    function currencyFormat(num: number) {
        return '₹' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '₹1,')
    }

    function toggleAddedToWishlist() {
        if(addedToWishlist === false)
            setAddedToWishlist(true);

        setAddedToWishlist(false);
    }
    return (
        <>
            <div className="card">
            <div className="row m-2">
            <div className="col-sm-1 themed-grid-col align-middle"> <Link to='/coursedisplay'><div className="square"></div></Link></div>
            <div className="col-sm-3 themed-grid-col align-middle" style={{fontSize:"small"}}><strong>{title}</strong></div>
            <div className="col-sm-1 themed-grid-col small-Elements" style={{fontSize:"small"}}>{author}</div>
            <div className="col-sm-1 themed-grid-col align-middle">
                {addedToWishlist === true? <FontAwesomeIcon icon={faSolidStar} onClick={() => toggleAddedToWishlist}/>: <FontAwesomeIcon icon={faStarOriginal} onClick={() => toggleAddedToWishlist}/>}
                {/* <FontAwesomeIcon icon={faStarOriginal} />
                <FontAwesomeIcon icon={faSolidStar} /> */}
            </div>
            <div className="col-sm-1 themed-grid-col mt-2.5 align-middle small-Elements" style={{fontSize:"small"}}><Link to='/coursedisplay'>{currencyFormat(discountedPrice)}</Link></div>
            <div className="col-sm-1 themed-grid-col mt-2.5 align-middle small-Elements" style={{fontSize:"small"}}><Link to='/coursedisplay'><del>{ currencyFormat(price) }</del></Link></div>
            <div className="col-sm-3 themed-grid-col align-middle mt-1"><button className="btn btn-block" style={{fontSize:"small", backgroundColor: "#FE8B1F", color: "white"}}>Add to cart</button></div>
            <div className="col-sm-1 themed-grid-col align-middle mt-2"><Link to='/coursedisplay'><FontAwesomeIcon icon={faAngleRight} /></Link></div>
        </div>
    </div>
        </>
    )
}

export default CourseItem
