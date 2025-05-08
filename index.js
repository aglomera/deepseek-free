import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: "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"
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Oi, quanto é 2 + 2?" }],
        model: "deepseek/deepseek-chat:free", // Para DeepSeek V3
        // Ou use "deepseek/deepseek-r1:free" para DeepSeek R1
    });

    console.log(completion.choices[0].message.content);
}

main();