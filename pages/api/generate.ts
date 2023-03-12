import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai"; 

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body;

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 1,
    messages: [{role: "system", content: "You are an assistant"}, {role: "user", content: prompt}],
});

  
  console.log(response.data.choices)
  res.json({"bot": response.data.choices[0].message?.content})
}
