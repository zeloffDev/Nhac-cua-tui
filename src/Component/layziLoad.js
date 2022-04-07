import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
import MyComponent from './MyComponent'

const layziLoad = () => {
    return (
        <div className="list">
          <LazyLoad height={200}>
            <img src="tiger.jpg" /> 
          </LazyLoad>
          <LazyLoad height={200} once >
                                    
            <MyComponent />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
                                 
            <MyComponent />
          </LazyLoad>
          <LazyLoad>
            <MyComponent />
          </LazyLoad>
        </div>
      );
};

export default layziLoad;