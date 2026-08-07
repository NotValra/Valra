import { createContainer } from "./container.js";
import { createPill } from "./pill.js";

const description = document.querySelector("#description");
if (description) {
  const bioLines = [
    "I'm Valra! I go by she/her pronouns, and I like Roblox a little too much.",
    "I have been on Roblox since 2015, and never left.",
    "You may know me from RoValra :3",
    "On January 1st 2025 I started RoValra a chrome extension as a fun project, and now its pretty much my job <3",
    "I love to datamine Roblox and leak upcoming updates.",
    "Sometimes I also do some bug bounty hunting on Roblox :3",
    "I really like Roblox as a platform if you couldn't tell, however the games suck for the most part LOL"
  ];

  description.replaceChildren(
    ...bioLines.map((line, index) => {
      const lineElement = document.createElement("span");
      lineElement.className = index === 0 ? "block" : "mt-3 block";

      if (index === 0) {
        lineElement.append("I'm Valra! I go by ");

        const pronouns = document.createElement("span");
        pronouns.className = "trans-gradient font-medium";
        pronouns.textContent = "she/her";
        lineElement.append(pronouns, " pronouns, and I like Roblox a little too much.");
      } else {
        lineElement.textContent = line;
      }

      return lineElement;
    }),
  );
}
// comment to see if it fixes deployment
const projects = [
  { label: "RoValra", href: "https://www.rovalra.com" },
];
// Pills
document.querySelector("#welcome-pill").append(
  createPill({
    label: "I LOVE doing silly things :3",
    className: "uppercase tracking-[0.3em]",
  }),
);

document.querySelector("#misc").append(
  createPill({
    label: "I HEARD VALRA DOESN'T LIKE ME! - LucentWaves *does cute kawaii cyber criminal dance*",

    className: "uppercase tracking-[0.1em]",
  }),
);


// Images
const funnyVideo = document.createElement("video");
funnyVideo.className = "mt-4 block max-h-[24rem] max-w-2xl ";
funnyVideo.controls = true;
funnyVideo.loop = true;
funnyVideo.muted = false;
funnyVideo.autoplay = false;
funnyVideo.playsInline = true;
funnyVideo.preload = "metadata";
funnyVideo.setAttribute("aria-label", "Valra video");



const funnyVideoSource = document.createElement("source");
funnyVideoSource.src = "./static/imgs/VALRADOESNTLIKEME!.mp4";
funnyVideoSource.type = "video/mp4";
funnyVideo.append(funnyVideoSource, "Your browser does not support HTML5 video.");
document.querySelector("#misc").append(funnyVideo);


const blahajImage = document.createElement("img");
blahajImage.src = "./static/imgs/blahaj.png";
blahajImage.className = "mx-auto mt-4 max-h-[12rem] w-full max-w-2xl  ";

document.querySelector("#misc").append(blahajImage);
const gilbertImage = document.createElement("img");
gilbertImage.src = "./static/imgs/gilbert.png";
gilbertImage.className = "mx-auto mt-4 max-h-[12rem] w-full max-w-2x1";
document.querySelector("#misc").append(gilbertImage);



// status
const statusPill = createPill({
  label: "Haiiii :3",
  className: "!bg-[#1b102b] -translate-x-2 px-6 py-3 text-lg text-purple-100",
});

const statusBubbleLarge = document.createElement("span");
statusBubbleLarge.className = "h-3 w-3 translate-x-8 rounded-full bg-[#1b102b]";

const statusBubbleSmall = document.createElement("span");
statusBubbleSmall.className = "mt-1 h-2 w-2 translate-x-6 rounded-full bg-[#1b102b]";

document.querySelector("#status-bubble").append(
  statusPill,
  statusBubbleLarge,
  statusBubbleSmall,
);

const socials = [
  { label: "X", username: "ValraSwag", href: "https://x.com/valraswag", icon: "fa-brands fa-x-twitter" },
  { label: "Discord", username: "", href: "https://discord.gg/BjWaQ4e7AY", icon: "fa-brands fa-discord" },
  //{ label: "YouTube", href: "https://youtube.com/", icon: "fa-brands fa-youtube" },
  { label: "TikTok", username: "ValraWantBanana", href: "https://www.tiktok.com/@valrawantbanana", icon: "fa-brands fa-tiktok" },
  { label: "GitHub", username: "NotValra", href: "https://github.com/NotValra", icon: "fa-brands fa-github" },
];

const socialElements = socials.map(({ label, username, href, icon }) => {
  const displayLabel = `${label} · ${username}`;
  const link = createPill({
    label: displayLabel,
    tag: "a",
    href,
    className: "max-w-full gap-2 whitespace-normal break-words px-4 py-2 text-center text-purple-200 hover:bg-purple-500/35",
  });
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", displayLabel);
  link.title = displayLabel;

  const iconElement = document.createElement("i");
  iconElement.className = icon;
  iconElement.setAttribute("aria-hidden", "true");
  link.append(iconElement);

  return link;
});

const socialsContainer = createContainer({
  className: "flex min-w-0 flex-wrap justify-center gap-2 md:justify-start",
  children: socialElements,
});

document.querySelector("#socials").append(socialsContainer);

const projectElements = projects.map(({ label, href }) =>
  createPill({
    label,
    tag: "a",
    href,
    className: "w-full justify-start px-6 py-4 text-left text-base text-purple-50 hover:bg-purple-500/35 text-[17px]",
  }),
);

const projectsContainer = createContainer({
  className: "grid gap-3",
  children: projectElements,
});

document.querySelector("#projects").append(projectsContainer);
