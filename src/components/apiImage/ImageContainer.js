import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Weather } from '../weather/Weather';
import { Quote } from '../quote/Quote';
import { GoalsInput } from '../goals/GoalsInput';
import { GoalsList } from '../goals/GoalsList';
import {
    loadImage,
    selectImage,
    // isLoadingWeather,
  } from './bgImageSlice';

  export const ImageContainer = () => {
    const dispatch = useDispatch();
    // console.log('weather', weather);
    // const commentsAreLoading = useSelector(isLoadingWeather);

    useEffect(() => {
        // console.log('1111');
        dispatch(loadImage());
      }, []);

      const image = useSelector(selectImage);
      console.log('image', image);


    return (
        <div className='image-container' style={{ width: '100%', minHeight: '100vh',  backgroundImage: `url(${image.bgImageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
        {/* // <div className='image-container' style={{ background: no-repeat `url(${image.image.src})`}}> */}
            <Weather />
            <GoalsInput />
            <GoalsList />
            <Quote />
        </div>
      );
  }

//   export default Weather;