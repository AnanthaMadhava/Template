import React from 'react';
import Div from './Div';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';

const CourseCard = ({ image, title, subTitle, rating, overallRating, amount, cartIcon }) => {
    return (
        <Div className="card courses_card">
            <Div className="card-header card-header-large bg-dark d-flex justify-content-center">
                <Link to="#" className="card-header__title border-bottom-0 justify-content-center align-self-center d-flex flex-column">
                    <span><img src={image} className="card_image mb-1" alt="logo" /></span>
                    <span className="course__title">{title}</span>
                    <span className="course__subtitle">{subTitle}</span>
                </Link>
            </Div>
            <Div className="p-3">
                <Div className="mb-2">
                    <span className="mr-2">
                        <Rate 
                            className="rateIcon"
                            disabled 
                            allowHalf
                            defaultValue={rating}
                        />
                    </span>
                    <strong>{rating}</strong><br />
                    <small className="text-muted">{`(${overallRating})`}</small>
                </Div>
                <Div className="d-flex align-items-center">
                    <strong className="h4 m-0">{amount}</strong>
                    <Link to="#" className="btn btn-primary ml-auto d-flex align-items-center"><i className="material-icons" style={{fontSize: '18px'}}>{cartIcon}</i></Link>
                </Div>
            </Div>
        </Div>
    );
};

export default CourseCard;