
// import axios from "axios";
import { InferenceClient } from "@huggingface/inference";
import { generateRemarkPrompt, generateStoryPrompt, systemRemarkPrompt, systemPrompt } from './prompt.js';
const API_TOKEN = import.meta.env.VITE_Hugging_face_Api;


function cleanApiResponse(text) {
    // Remove <think>...</think> and any leading slashes or comment markers
    return text
      .replace(/<think>[\s\S]*?<\/think>/g, '')  // remove <think> blocks
      .replace(/\/\/.*$/gm, '')                  // remove any leftover comment lines (optional)
      .trim();                                   // remove extra spaces
  }
  
  const responseTemplate = async (props, promptContent, aiPersona) =>{
  
    const {API_URL, setAiResponse} =props

      const client = new InferenceClient(API_TOKEN);
    
    try { 
        const chatCompletion = await client.chatCompletion({
            // provider: "sambanova",
            // model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            model: "HuggingFaceTB/SmolLM3-3B",
            messages: [
                {
                    role: "system",
                    content: `${aiPersona}`
                },
                {
                    role: "user",
                    content: `${promptContent}`,
                },
            ],
            // max_tokens: 700,
        });
        console.log(setAiResponse)
        console.log(chatCompletion.choices[0].message.content.trim())
        return setAiResponse(cleanApiResponse(chatCompletion.choices[0].message.content.trim()));
    } catch (err) {
        console.error(err.message)
        return setAiResponse(err.message)
    }

  }


   export const handleRemarkResponse = async (props)=>{
    const promptContent =  `generate a short, enthusiastic, precise and lively remark based on the prompt given by user ${generateRemarkPrompt(props.data)}. You should not exceed one paragraph`;
    const aiPersona = systemRemarkPrompt
    console.log("handleRemarkResponse function")
    return await responseTemplate(props, promptContent, aiPersona)
        
        
    }

    export const handleStoryGeneration = async (props)=>{
    const promptContent =  `generate a great thrilling, enthusiastic, exciting and lively story full of plot twist and suspense based on the prompt given by user ${generateStoryPrompt(props.data)}. generate a full story `;
    const aiPersona = systemPrompt
        console.log("handleStoryGeneration Function")
    return await responseTemplate(props, promptContent, aiPersona)
        
        
    }
