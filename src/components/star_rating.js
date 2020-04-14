
import React from 'react';
import StarRatings from 'react-star-ratings';
 
export default class Foo extends React.Component {
    state={
        rating:5,
    }
    changeRating=( e,newRating, name )=> {
        console.log(e,newRating,name)
      this.setState({
        rating:e
      });
    }
    render() {
    //   rating = 2;
    console.log('rating',this.state.rating)
      return (
        <StarRatings
        //   rating={this.state.rating}
          starRatedColor="#fec620"
          rating={this.state.rating}
          starDimension="40px"
          starSpacing="15px"
          changeRating={(e)=>this.changeRating(e)}
          numberOfStars={6}
          name='rating'
        />
      );
    }
}