

// import { RemarkResponse } from './aiFeatures/AIResponse'

export const AwaitResponse = (props) => {
  let content = ''
    const {aiResponse} = props
   { (aiResponse)? content = aiResponse : content = 'Working on it..'}
  return (
    < >
    
    <p className ="p-4  bg-orange-400 ">
        {content}
        
        
  {/* A young boy, all alone, embarks on an epic journey through the vast wilderness. With each step, he faces new challenges and learns more about himself. This tale promises to be filled with adventure, resilience, and self-discovery. Let's bring this gripping story to life! */}

        </p>
        </>
  )
}
