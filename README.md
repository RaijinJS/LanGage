# LanGage - Solo Project

AI-powered conversation practice app for language learners (Spanish)

## Description:

LanGage uses the GPT API to provide language learners with the
opportunity to overcome the most critical issue with modern language learning
techniques, a lack of options to practice conversational output. The only way
to effectively level-up your output skills is to engage them. LanGage takes the
awkwardness out of making mistakes with tutors, language exchange partners, friends,
etc. What’s more, besides costly tutors, natives generally don’t have the knowledge
or will to efficiently provide live feedback. With LanGage, learners have a
safe environment to practice free-flowing conversation on-demand, but why not
just use ChatGPT? LanGage’s UI is optimized to make learning painless. On top
of a live feedback panel, clicking on previously sent user messages will
display feedback for the given message, while clicking on a message (sent by the
app) or word in the conversation will pop-up translations. Cast your worries
and fears aside and improve your conversational prowess today!

## Tech stack

**Front End:**

- React

**Back End:**

- Server: Express (for community and documentation),

- Database: MongoDB with Mongoose (for flexibility and speed)

## Data sources

- **OpenAI**: GPT 3.5 turbo / 4 turbo API via node dependency

- **DeepL**: Deepl Translation API via node via node dependency

## Getting Started

The project is divided into two repositories, front end (Langage_client) and back end (LanGage).

LanGage client: Run `npm i`, then `npm start`.
LanGage (server): CD into server and run `npm i`. Make sure to add a config.js file to the server directory. The config file should contain the following:

https://platform.openai.com/docs/api-reference/authentication

https://www.deepl.com/en/docs-api

```
module.exports = {port: 3001,

  apiK: 'a string containing your OpenAI GPT API key',

  deeplApiK: 'a string containing your DeepL API key',

};
```

Run the server from the terminal with the command `npx nodemon index.js`.

## Demo Screenshots:

Start a new conversation - The LanGage mascot quietly reads his book while waiting.

![1.png](./Screenshots/1.png)

Write a message to receive a reply and feedback, the LanGage mascot points to the board to bring the user's attention towards his feedback:

![2.png](./Screenshots/2.png)

If there are no mistakes in the user input, LanGage will provide encouragement:

![3.png](./Screenshots/3.png)

After a user message is sent, there can be a minor delay due to the speed of the GPT API. During this time, the user input field is disabled and a "Please wait..." message replaces the type here placeholder. At the same time, the LanGage mascot seems to be deep in thought reading the user's message....

![4.png](./Screenshots/4.png)

The user may want to start a new conversation or revisit a previous one, clicking the hamburger menu in the navigation bar will reveal previous conversations as well as the option to start a new one.

![5.png](./Screenshots/5.png)

When the user opens up an old conversation with a pending reply from LanGage, the LanGage mascot will point to a letter to indicate he's waiting for a reply.

![6.png](./Screenshots/6.png)

Want to see feedback on an older message? Hovering over your message will reveal a feedback button, clicking it will replace the content in the feedback chalkboard with the relevant feedback.

![7.png](./Screenshots/7.png)

Not sure what the response from LanGage means? Or just not familiar with a specific word? Hovering over a message will reveal a translate button, while clicking on a word will open up a pop-up with a translation by DeepL.

![8.png](./Screenshots/8.png)

![9.png](./Screenshots/9.png)

![10.png](./Screenshots/10.png)

LanGage is responsive!

![11.png](./Screenshots/11.png)

![12.png](./Screenshots/12.png)

![13.png](./Screenshots/13.png)