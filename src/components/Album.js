import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Album() {
const [photos, setPhotos]=useState([]);
useEffect(()=>{
    axios.get('https://api.unsplash.com/photos/random?count=30&client_id=eabab3af0950e1039a56eac39d421af54bf8c9156b61333cbe93c7160c768d6d').then((response)=>{    
    response['data'].map((image)=>{
            const {alt_description, urls, created_at}=image;
            const imageYear=new Date(image.created_at).getFullYear();
            setPhotos(prevState=>[...prevState, image])
            setPhotos(prevState=>prevState.sort(function(a,b){
                return new Date(a.created_at)-new Date(b.created_at)
            }))
        })
    })

}, [])

  return (
    <div className="image-container">
      {photos.length?photos.map((image)=><img className="image-view" src={image.urls.small} alt={image.alt_description} />):null}
    </div>
  );
}

export default Album;