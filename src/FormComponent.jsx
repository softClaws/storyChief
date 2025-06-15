// import {useState} from 'react';
import { useState,  } from 'react';
import { IdeaForm } from './IdeaForm';
import { AwaitResponse } from './AwaitResponse';
import { handleRemarkResponse, handleStoryGeneration } from './aiFeatures/AIResponse.js';


const API_URL = "https://api-inference.huggingface.co/models/gpt2"

export const FormComponent = () => {
  const [userData, setUserData] = useState('')
  const [showForm, setShowForm] = useState(true)
  const [showStory, setShowStory] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [aiStory, setAiStory] = useState('');

  let userStory = '';
  let generatedResponse = '';
  let placeButton = ''
  let buttonText =''


  
  buttonText =(showStory)? "Home" :"Read Story"
  //form to handle form submission
  const handleForm =(formData)=>{
    userStory = formData.get('userStory').trim();
    if(userStory){
      setUserData(userStory)
      //function call to generate remark
      handleRemarkResponse(
        {
          API_URL,
          setAiResponse,
          data: {userStory}
        }
      )
      handleStoryGeneration(
        {
          API_URL,
          setAiResponse :setAiStory,
          data: {userStory}
        }
      )
    
      
      setShowForm(false)
    }else{
      alert('Kindly write a story idea to generate')
    }
   
  }
  const handleButtonClick =()=>{
    if(showStory){
      setShowForm(true)
    }
    setShowStory(prev => !prev)
    
  }
  {
        (generatedResponse == '')? placeButton = <button className="bg-gray-200 p-4 flex items-center align-middle justify-center rounded-xl mt-4 hover:bg-orange-400 h-12 " onClick ={handleButtonClick}> 
        {buttonText}</button> :
         placeButton = ''
      }


  return (
    <div>
      
    { 
    (showForm)? <IdeaForm handleForm = {handleForm}/> :
      <section className = "flex justify-center mt-2 p-2 m-4">
        <div className="font-roboto
        text-lg 
       
        flex-grow 
        text-center 
        rounded-3xl
        ">

      { (!showStory)? <AwaitResponse aiResponse ={aiResponse}/> :
       <AwaitResponse aiResponse ={aiStory}/>
    }
        
      {placeButton}
        </div>
      </section>    
    }
    </div>
  )
}

