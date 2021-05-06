import React ,{useEffect} from 'react';
import {Col,} from 'react-bootstrap';
import SingleVideo from './SingleVideo';
import SuggestionVideo from './SuggestionVideo';
import YouTube from 'simple-youtube-api';
import config from '../../config';

const youtube = new YouTube('config.apiKey');
export default () => {

    useEffect(()=>{
        callApi();
    },[]);
 const result1 =   youtube.searchVideos('Centuries', 4)
    .then(results => {
        console.log(`The video's title is ${results[0].title}`);
    })
    console.log(result1)
    .catch(console.log);
    const callApi = async () => {
   const result = await youtube.search("ramtoo",5)
   console.log(result);
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
