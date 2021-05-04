import React from 'react';
import {Col,} from 'react-bootstrap';
import SingleVideo from './SingleVideo';
import SuggestionVideo from './SuggestionVideo';

export default () => {
    const callApi = () => {
        
    }
    return (
        <React.Fragment>
           <Col  xs ={12} lg={8} style={{border: "2px solid red"}}>
           <SingleVideo/></Col>
          <Col xs ={12} lg={4} style={{border: "2px solid red"}}>
          <SuggestionVideo/></Col> 
        </React.Fragment>
    )
}
