const Discord = require("discord.js");
const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
});

console.log("askldjkasd");

bot.login('ODEwMjI1MzMwMjgyOTU0Nzky.YCgjIw.k2u4fW0dBIk8CkpbQYZKMgXA5Oc');

bot.once("message", (msg) => {
    console.log(msg);
    // hello there
});

/*
const my_array = [1,2,'jermey'];
console.log(my_array);



const my_function = (message) => {

}*/