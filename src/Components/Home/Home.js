import React, { Component } from 'react';
import Div from '../../Reusable_Components/Div';
import CourseCard from '../../Reusable_Components/CourseCard';
import Zoom from 'react-reveal/Zoom';

class Home extends Component {
    state = {
        image: ['assets/images/logos/react.svg', 'assets/images/logos/vuejs.svg', 'assets/images/logos/angular.svg', 'assets/images/logos/javascript.svg'],
        title: ['React', 'Vue.js', 'Angular', 'Javascript'], 
        subTitle: ['Learn the Basics', 'Quick Tips', 'Back to Basics', 'ES6 and Beyond'], 
        rating: [4.7, 4.7, 4.7, 4.7], 
        overallRating: ['391 ratings', '391 ratings', '391 ratings', '391 ratings'], 
        amount: ['$49', '$49', '$49', '$49'], 
        cartIcon: ['add_shopping_cart', 'add_shopping_cart', 'add_shopping_cart', 'add_shopping_cart'],
        delay: [0, 100, 200, 300,]
    }

    courses = (
        <Div className="row">
            {this.state.image.map((list, i) => (
                <Div className="col-sm-12 col-md-6 col-lg-3" key={i}>
                    <Zoom key={i} delay={this.state.delay[i]} >
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
                <h2 className="bold m-4 text-center p-4">Recent Courses</h2>
                {this.courses}
            </Div>
        );
    }
}

export default Home;