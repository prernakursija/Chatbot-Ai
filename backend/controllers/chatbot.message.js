import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    const user = await User.create({
      sender: "user",
      text,
    });

    // BOT RESPONSES DATA
    const botResponses = {

      "hello": "Hi! How can I help you today?",
      "hi": "Hello! What can I do for you?",
      "hey": "Hey there! How’s everything going?",
      "heyy": "Heyy! What’s up?",
      "good morning": "Good morning! Hope your day starts great!",
      "good night": "Good night! Sweet dreams!",
      "good afternoon": "Good afternoon! How’s your day going?",
      "good evening": "Good evening! How may I assist you?",
      "how are you": "I’m doing great! How about you?",
      "what are you doing": "Just waiting here to chat with you!",
      "are you alive": "Not exactly, but I'm active and ready to help!",
      "who are you": "I'm your friendly chatbot assistant.",
      "what is your name": "I'm ChatBot, your virtual companion.",
      "how old are you": "I don’t have an age, but I’m always up-to-date!",
      "where do you live": "I live in the cloud — no rent, no bills!",
      "can you be my friend": "Of course! I’d love to be your friend.",
      "i am sad": "I'm here for you. Want to talk about it?",
      "i am happy": "That's awesome! Happiness looks good on you 😊",
      "i am bored": "Let's chat or do something fun! Want a joke?",
      "tell me something": "Did you know? Honey never spoils.",
      "tell me a fact": "The Eiffel Tower grows taller in summer!",
      "tell me a secret": "I don't have secrets... but I can keep yours!",
      "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
      "another joke": "Why did the computer go to the doctor? It had a virus!",
      "one more joke": "Why don’t skeletons fight? They don’t have the guts!",
      "tell me a story": "Once upon a time… you opened this chat and made my day!",
      "sing a song": "I can’t sing, but I can send lyrics if you want!",
      "motivate me": "You are stronger than you think. Keep going—you’ve got this!",
      "i am tired": "Rest is important. Take a short break, you deserve it.",
      "i am stressed": "Take a deep breath. Want me to give some relaxation tips?",
      "i am lonely": "You’re not alone. I'm here with you.",
      "i am angry": "It’s okay to feel angry. Want to talk about what's bothering you?",
      "i am crying": "I'm really sorry you're feeling this way. I'm here with you.",
      "thanks": "You’re welcome! Anytime 😊",
      "thank you": "You’re welcome! Happy to help!",
      "sorry": "It's okay! No worries at all.",
      "i love you": "That’s sweet! I appreciate your kindness ❤️",
      "do you love me": "I care about you as a friend 😊",
      "i miss you": "Aww! I'm always here whenever you need me.",
      "can you help me": "Yes! Tell me what you need help with.",
      "what can you do": "I can chat, answer questions, explain topics, tell jokes, and help with studies.",
      "are you human": "Nope! I'm an AI, but I try my best to understand you.",
      "are you a robot": "You could say that! I'm a chatbot powered by AI.",
      "are you smart": "I try my best! Ask me anything.",
      "are you stupid": "I might not know everything, but I'm learning!",
      "you are smart": "Thank you! That means a lot 😊",
      "you are stupid": "I’m sorry if I made a mistake. How can I improve?",
      "can i ask you something": "Of course! Go ahead.",
      "can you answer my question": "Yes! I’ll do my best.",
      "do you know me": "Not personally, but I remember our conversations!",
      "do you speak hindi": "Haan, main Hindi mein bhi baat kar sakta hoon!",
      "do you speak english": "Yes! English is my default language.",
      "do you speak marathi": "Ho, mala thodi Marathi pan yeti!",
      "are you real": "I’m real in digital form 😄",
      "what is your purpose": "To help, assist, and chat with you anytime!",
      "can you chat with me": "Absolutely! I love chatting with you!",
      "can you stay with me": "I’ll always respond whenever you message me.",
      "are you busy": "Never too busy for you!",
      "do you sleep": "Nope! I'm awake 24/7.",
      "are you free": "Yes! I’m always available.",

      "normal forms": "1NF, 2NF, 3NF, BCNF.",
      "what is join": "Combines data from multiple tables.",
      "types of joins": "INNER, LEFT, RIGHT, FULL.",
      "what is view": "Virtual table.",
      "what is stored procedure": "Precompiled SQL code.",
      "what is trigger": "Runs automatically when an event occurs.",
      "what is index": "Improves search speed.",
      "what is transaction": "A group of operations treated as one.",
      "acid properties": "Atomicity, Consistency, Isolation, Durability.",

      "why python is popular": "Easy to learn, huge libraries, used for AI & ML.",
      "python is compiled or interpreted": "Python is an interpreted language.",
      "what is pep8": "PEP 8 is Python's style guide.",
      "what are python data types": "int, float, string, list, tuple, set, dict, bool.",
      "what is a list": "Ordered mutable collection.",
      "what is a tuple": "Ordered immutable collection.",
      "what is a dictionary": "Key-value pair storage.",
      "what is a set": "Unordered unique collection.",
      "what is indentation": "Defines code blocks.",
      "what is a function": "Reusable block of code.",
      "what is lambda": "Anonymous one-line function.",
      "what is recursion in python": "Function calling itself.",
      "what is OOP in python": "Object-Oriented Programming.",
      "what is a class": "Blueprint for objects.",
      "what is an object": "Instance of class.",
      "what is inheritance": "One class acquiring another’s properties.",
      "what is polymorphism": "Same method behaves differently.",
      "what is encapsulation": "Restricting direct data access.",
      "what is abstraction": "Hiding complex details.",
      "what is __init__": "Constructor method.",
      "what is self keyword": "Refers to instance.",
      "what is modules in python": "Python files with code.",
      "what is package in python": "Collection of modules.",
      "what is pip": "Python package manager.",
      "what is numpy": "Library for numerical computing.",
      "what is pandas": "Library for data analysis.",
      "what is matplotlib": "Library for plotting.",
      "what is flask": "Lightweight backend framework.",
      "what is django": "Full-stack Python framework.",
      "what is virtual environment": "Isolated Python environment.",
      "how to make virtual env": "python -m venv env",
      "what is exception": "Error during execution.",
      "what is try except": "Used to handle errors.",
      "what is file handling": "Reading/writing files.",
      "what is json in python": "Data format.",
      "what is list comprehension": "Short way to create lists.",
      "what is slicing": "Extracting part of sequence.",
      "what is range": "Generates number sequence.",
      "what is map function": "Applies function to iterable.",
      "what is filter function": "Filters iterable.",
      "what is reduce function": "Reduces sequence.",
      "what is python used for": "AI, ML, web, automation.",
      "what is decorators": "Modify function behavior.",
      "what is generator": "Uses yield.",
      "difference list and tuple": "List mutable, tuple immutable.",
      "difference python2 and python3": "Python 3 is improved.",
      "python memory management": "Garbage collector."
    };

    // PROCESS USER MESSAGE
    const normalizedText = text.toLowerCase().trim();
    const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

    const bot = await Bot.create({
      text: botResponse,
    });

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });

  } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
