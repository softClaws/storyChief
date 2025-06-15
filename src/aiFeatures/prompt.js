
export const systemRemarkPrompt=()=>{
    return `you are a remark generator that generate an enthusiastic and lively remark from the user prompt. you should include part of the user input to give a short and exciting response.`
}

export const systemPrompt=()=>{
    return `you are a storyteller that generate an enthusiastic, exciting and lively story according to user prompt full of suspense and plot twist. It maybe be horror, comedy`
}
export const generateStoryPrompt =(data)=>{
    const {userStory} = data
  return  `
    prompt: i want you to write a story about how a lost hunter in an amazon forest got lost and discovered a new village, he later found the love of his life and the lived happily ever after

   
title: Whispers of the Amazon\n

story: The sun hung low in the sky, casting a golden hue over the thick emerald canopy of the Amazon rainforest. Birds chirped in wild harmony, and the air buzzed with life. Deep within this living, breathing jungle was Kael, a seasoned hunter from the edge of the forest, known for his unmatched tracking skills and quiet bravery.

But even the best can be blindsided by the unexpected.

On a fateful expedition, Kael chased the trail of a rare jaguar, venturing farther than he'd ever dared. A sudden storm broke the sky open, drowning paths and twisting his direction. Hours turned to days. Food dwindled. Hope flickered. Kael was lost.

But the Amazon, wild as it was, held more than danger. On the fourth day of wandering, Kael stumbled upon something surreal: a hidden village cloaked in mist, nestled by a river and surrounded by luminous flowers. The villagers spoke a melodic dialect and welcomed him with cautious curiosity.

Among them was Amara, a healer with eyes like dusk and laughter like rainfall. She tended to Kael’s wounds and soothed his restless heart. What began as gratitude grew into deep affection. They explored the forest together, exchanged stories under moonlight, and shared dreams of a life filled with purpose.

Kael no longer yearned for the world he left behind. In this mystical place, he found not only a second chance—but a reason to stay.

They married beneath the ancient ceiba tree, the village celebrating under the stars with drums, dancing, and endless joy. Kael became a protector of the village, using his skills to keep its secrets safe.

And in the heart of the Amazon, where he was once lost, Kael found love, home, and happiness beyond anything he had ever imagined.

They lived, as only true soulmates do—happily ever after.


    
###
prompt: about a girl named Adele whose parent moved to a new city which she didn't like but later fell in love with a the son of a fruit seller
    
title: Adele and the City of Surprises\n

story: Adele’s world turned upside down the day her parents told her they were moving. She stood frozen in disbelief, arms crossed and heart sinking.

“A new city? But why?” she asked, trying to mask the crack in her voice.

“It’s a fresh start,” her mother replied gently, offering a smile. But to Adele, it felt more like the end—of her school, her friends, her favorite café, and everything that made life feel like hers.

The new city was loud and strange. The streets buzzed with honking cars and shouting voices. The air was thick with the scent of asphalt and haste. Tall buildings blocked out the sky, and the people walked fast, barely looking up. Adele felt small, lost in the maze of unfamiliar streets. She kept to herself, walked with headphones on, and counted the days since she’d left everything behind.

Then, one golden afternoon, something changed.

As she turned onto her usual street, something caught her eye—a burst of color in an otherwise gray sidewalk. Piles of fruit were stacked neatly at a small wooden stand: oranges, bananas, mangoes, and strawberries so red they looked like they’d been painted by the sun. Behind the stand stood a boy with warm brown eyes, sun-kissed skin, and a smile so bright it could stop time.

“Hey,” he called out, holding up a slice of mango on a stick, “You look like you need this.”

Adele raised an eyebrow. “Excuse me?”

“Trust me,” he said, grinning. “Best in the city.”

Curiosity beat hesitation. She took the mango. One bite—and her taste buds lit up. It was juicy, sweet, with just the right kick of spice. She couldn’t help but smile.

The boy’s name was Remi. His family had run the fruit stand for years. He knew the city inside out—the rooftops, alleyways, quiet gardens tucked between buildings. And for the first time since she arrived, Adele felt something other than frustration: she felt a spark.

She started walking by the stand every day. Sometimes she bought fruit; sometimes she just stopped to chat. Remi showed her hidden corners of the city, took her to the best view on top of the old theater, and told her stories about the people, the culture, the heart of the place she once thought was soulless. In turn, she shared her sketches, her dreams, and the little pieces of the life she had left behind.

The city began to change. The noise softened. The buildings didn’t feel so tall. The sidewalks felt less lonely. She started recognizing faces, laughing more, feeling lighter. And every time she walked away from the fruit stand, she found herself looking back at Remi.

One rainy afternoon, they found themselves running through puddles. Rain soaked their clothes, but their laughter echoed down the street. Adele slipped, and Remi caught her with both arms. For a heartbeat, the world stood still.

“I never thought I’d say this,” Adele said, catching her breath, “but I kind of love it here.”

Remi smiled, eyes shining. “Told you the fruit would grow on you.”

Years later, if you walked down that same street, you’d see them there—Remi behind the fruit stand, Adele sketching nearby. The girl who once hated the city had fallen in love—not just with the mangoes, or the city, but with the boy who brought color into her gray world.

And in the city she never wanted, Adele found something beautiful.

She found love. She found joy. She found home.

And they lived—happily ever after.
    
###
    prompt: ${userStory}
    title:
    story:
    
    
    `
}


export const generateRemarkPrompt =(data)=>{
    const {userStory} = data
  return  `
    
    prompt: i want you to write a story about how a lost hunter in an amazon forest got lost and discovered a new village, he later found the love of his life and the lived happily ever after

   
    Ah, an adventure deep into the Amazon forest where a lost hunter stumbles upon an unknown village — and even finds the love of his life! This sounds like the beginning of a magical and heartwarming journey. Let’s dive into this tale and bring your vision to life!

    
    ###
    prompt: about a girl named Adele whose parent moved to a new city which she didn't like but later fell in love with a the son of a fruit seller
    
    A new city, an unfamiliar world, and a girl named Adele who feels completely out of place — until fate steps in through the son of a humble fruit seller. What a beautiful setup for a story full of unexpected twists, heartfelt moments, and blossoming love! Let’s unfold Adele’s journey together.
    
    ###
    prompt: ${userStory}
    
    
    `
}