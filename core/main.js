import { createContainer } from "./container.js";
import { createPill } from "./pill.js";

const description = document.querySelector("#description");
if (description) {
  const bioLines = [
    "I'm Valra! I go by she/her pronouns, I am so autistic its wild and with a bit of ADHD aswell, and I like Roblox a little too much.",
    "I have been on Roblox since 2015, and never left.",
    "You may know me from RoValra :3",
    "On January 1st 2025 I started RoValra a chrome extension as a fun project, and now its my actual fulltime job <3",
    "I love to datamine Roblox (rarely tbf) and leak upcoming updates.",
    "Sometimes I also do some bug bounty hunting on Roblox :3",
    "I really like Roblox as a platform if you couldn't tell, however the games suck for the most part LOL",
    "Also I am the only REAL Valra cuz I come up when you search Valra on google 😡 L to all the others using the name Valra",
    "Fun facts:",
    "- I have lived in Denmark pretty much my entire life but I somehow don't really know anyone irl :)",
    "- I got into development from Roblox game development around 2020-2022 and made many projects I never finished.",
    "- Before RoValra I liked to dig and find stuff in Roblox's APIs, so I partly started RoValra to put that knowledge to use.",
    "- I'm actively QA testing for a bunch of Roblox games, notably QA tested for a game made by @woozynate on Roblox.",
    "- I barely play Roblox for fun anymore, I just develop RoValra :) and same for any games for that matter other than Rhythia"
  ];

  description.replaceChildren(
    ...bioLines.map((line, index) => {
      const lineElement = document.createElement("span");
      lineElement.className = index === 0 ? "block" : "block";

      if (index === 0) {
        lineElement.append("I'm Valra! I go by ");

        const pronouns = document.createElement("span");
        pronouns.className = "trans-gradient font-medium";
        pronouns.textContent = "she/her";
        lineElement.append(pronouns, " pronouns, I am so autistic its wild and with a bit of ADHD aswell, and I like Roblox a little too much.");
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
  { label: "Gilberts (Secret yet to be announced Project that will prob never release)", href: "https://valra.cc" },
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
gilbertImage.src = "./static/imgs/GILBERT.png";
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
  { label: "YouTube", username: "NotValra", href: "https://www.youtube.com/@NotValra", icon: "fa-brands fa-youtube" },
  { label: "TikTok", username: "ValraWantBanana", href: "https://www.tiktok.com/@valrawantbanana", icon: "fa-brands fa-tiktok" },
  { label: "GitHub", username: "NotValra", href: "https://github.com/NotValra", icon: "fa-brands fa-github" },
  { label: "HackerOne", username: "Valra", href: "https://hackerone.com/valra", brandIcon: "hackerone" },
  { label: "Roblox", username: "NotValra", href: "https://www.roblox.com/users/447170745/profile", brandIcon: "roblox" }
];

const brandIconPaths = {
  hackerone: "M7.207 0c-.4836 0-.8774.1018-1.1823.3002-.3044.2003-.4592.4627-.4592.7798v21.809c0 .2766.1581.5277.4752.7609.315.2335.7031.3501 1.1664.3501.4427 0 .8306-.1166 1.1678-.3501.3352-.231.5058-.4843.5058-.761V1.0815c0-.319-.1623-.5769-.4893-.7813C8.0644.1018 7.6702 0 7.207 0zm9.5234 8.662c-.4836 0-.8717.0981-1.1683.3007l-4.439 2.7822c-.1988.1861-.2841.4687-.2473.855.0342.3826.2108.747.5238 1.0907.3145.346.6662.5626 1.0684.6547.3963.0899.6973.041.8962-.143l1.7551-1.0951v9.7817c0 .2767.1522.5278.4607.761.3007.2335.6873.3501 1.1504.3501.463 0 .863-.1166 1.1983-.3501.3371-.2332.5058-.4843.5058-.761V9.7381c0-.3193-.165-.577-.4898-.7754-.3252-.2026-.7288-.3007-1.2143-.3007z",
  roblox: "M11.676 0 0 44.166 43.577 56l11.676-44.166zm20.409 35.827-12.177-3.308 3.264-12.342 12.182 3.308z"
};

function createBrandIcon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", name === "roblox" ? "0 0 55.253 56" : "0 0 18.45 23.6");
  svg.setAttribute("class", "h-4 w-4 shrink-0 fill-current");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", brandIconPaths[name]);
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("clip-rule", "evenodd");
  svg.append(path);
  return svg;
}

const socialElements = socials.map(({ label, username, href, icon, brandIcon }) => {
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

  const iconElement = brandIcon ? createBrandIcon(brandIcon) : document.createElement("i");
  if (icon) {
    iconElement.className = icon;
    iconElement.setAttribute("aria-hidden", "true");
  }
  link.append(iconElement);

  return link;
});

const socialsContainer = createContainer({
  className: "flex min-w-0 flex-wrap justify-center gap-2 md:justify-start",
  children: socialElements,
});

document.querySelector("#socials-section").append(socialsContainer);

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
