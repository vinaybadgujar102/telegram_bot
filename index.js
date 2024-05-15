const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();

try {
  const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  bot.command("name", (ctx) => {
    ctx.reply("👋 Hello, I'm Vinay, a Fullstack Web Developer!");
  });

  // Command to display education
  bot.command("education", (ctx) => {
    ctx.reply(
      "🎓 Education:\n- Bachelor of Technology in Computer Engineering from RC Patel Institute of Technology, Shirpur, MH, India."
    );
  });

  // Command to display skills
  bot.command("skills", (ctx) => {
    ctx.reply(
      "🔧 Skills:\n- React.js, Express.js, MongoDB, Node.js, Javascript, Typescript, Next.js, TailwindCss, Recoil, Redux, Postgresql, Docker, HTML, CSS, Git, GitHub, GitHub Actions, Playwright."
    );
  });

  // Command to display projects
  bot.command("projects", (ctx) => {
    ctx.reply(
      "🛠️ Projects:\n1. Todo App with Authentication (MERN)\n2. Netflix Clone (Next.js)"
    );
  });

  // Command to display experience
  bot.command("experience", (ctx) => {
    ctx.reply(
      "🚀 Experience:\n- Managed full stack codebases, enhancing functionality and user experience.\n- Merged 50+ pull requests for new features, design updates, and bug fixes.\n- Adapted to new challenges by learning technologies like PWA, IndexedDB, and Playwright."
    );
  });

  // Command to display contact information
  bot.command("contact", (ctx) => {
    ctx.reply(
      "📧 Contact:\nYou can contact me on LinkedIn: [Your LinkedIn Profile Link]"
    );
  });

  // Start command
  bot.start((ctx) => {
    ctx.reply(
      "Welcome to Vinay's Portfolio Bot! Use commands like /name, /education, /skills, /projects, /experience, /contact to learn more about me."
    );
  });

  // Start the bot
  bot.launch().then(() => console.log("Bot started"));
} catch (error) {
  console.log(error);
}
