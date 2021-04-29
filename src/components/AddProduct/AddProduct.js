import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)
    
    const onSubmit = data => {
        alert('Your Book Added Successfully.')
        const eventData = {
            bookName: data.bookName,
            bookPrice: data.bookPrice,
            imageURL: imageURL
        }
        const url =`https://blueberry-pudding-00667.herokuapp.com/addBooks`;
        

        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(eventData)
        })

        .then(res => console.log('server side response', res))
    };



    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','af4f9ea290484763ba729d92c02b9e6e');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{color:'yellowgreen'}}>Add your books here</h1>
            <form onSubmit={handleSubmit(onSubmit)}
 >
                <input name="bookName" placeholder="Book Name" ref={register} />
                <br/>
                <input name="bookPrice" placeholder="Book Price" defaultValue="" ref={register}/>
                <br/>
                <input style={{marginLeft:'200px'}} name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                <input style={{color:'green'}} type="submit" />
            </form>
            
        </div>
    );
};

export default AddProduct;