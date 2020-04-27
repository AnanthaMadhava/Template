import React, { Component } from 'react';
import Div from '../../Reusable_Components/Div';
import { Link } from 'react-router-dom';
import CourseCard from '../../Reusable_Components/CourseCard';
import Zoom from 'react-reveal/Zoom';

class StudentCourses extends Component {
    state = {
        image: ['assets/images/logos/react.svg', 'assets/images/logos/vuejs.svg', 'assets/images/logos/angular.svg', 'assets/images/logos/javascript.svg', 'assets/images/logos/node.svg', 'assets/images/logos/gitlab.png', 'assets/images/logos/angular.svg'],
        title: ['React', 'Vue.js', 'Angular', 'Javascript', 'Node', 'Gitlab', 'Angular'], 
        subTitle: ['Learn the Basics', 'Quick Tips', 'Back to Basics', 'ES6 and Beyond', 'ES6 and Beyond', 'Git Workflows', 'Typescript and Beyond'], 
        rating: [4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7], 
        overallRating: ['391 ratings', '391 ratings', '391 ratings', '391 ratings', '391 ratings', '391 ratings', '391 ratings'], 
        amount: ['$49', '$49', '$49', '$49', '$49', '$49', '$49'], 
        cartIcon: ['add_shopping_cart', 'add_shopping_cart', 'add_shopping_cart', 'add_shopping_cart', 'add_shopping_cart', 'add_shopping_cart', 'add_shopping_cart'],
        delay: [0, 100, 200, 300, 400, 500, 600]
    }

    studentCourse = (
        <Div className="row">
            {this.state.image.map((list, i) => (
                <Div className="col-sm-12 col-md-6 col-lg-3 mt-4" key={i}>
                    <Zoom key={i} delay={this.state.delay[i]}>
                        <CourseCard 
                            key={i} 
                            image={list} 
                            title={this.state.title[i]}
                            subTitle={this.state.subTitle[i]}
                            rating={this.state.rating[i]}
                            overallRating={this.state.overallRating[i]}
                            amount={this.state.amount[i]}
                            cartIcon={this.state.cartIcon[i]}
                        />
                    </Zoom>
                </Div>
            ))}
        </Div>
    )

    render() {
        return (
            <Div className="container">
                <Div className="d-flex align-items-center justify-content-between">
                    <h1 className="bold m-0">Courses</h1>
                    <Link to="#" class="btn btn-success ml-3 d-flex align-items-center">Go to Courses<i class="material-icons" style={{fontSize: '18px', marginLeft: '5px'}} >arrow_forward</i></Link>
                </Div>
                {this.studentCourse}
            </Div>
        );
    }
}

export default StudentCourses;