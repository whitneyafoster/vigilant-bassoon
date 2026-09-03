// Lesson 1: make a button do something visible.

const findLookButton = document.querySelector("#find-look-button");
const aestheticName = document.querySelector("#aesthetic-name");
const aestheticDescription = document.querySelector("#aesthetic-description");
const outfitFormula = document.querySelector("#outfit-formula");
const colorSwatches = document.querySelector("#color-swatches");
const answerButtons = document.querySelectorAll(".answer-button");

const looks = [
  {
    name: "Librarian Chic",
    description: "Precise, bookish, and quietly formidable—texture does the talking.",
    outfit: "Try: fine knit + sharp skirt + one rich, academic color.",
    colors: ["#182637", "#E9E1D1", "#7A1E2C", "#B6A253"]
  },
  {
    name: "Elevated Normcore",
    description: "The art of looking effortlessly composed in pieces that never shout.",
    outfit: "Try: perfect tee + straight jean + an excellent coat.",
    colors: ["#F6F2E9", "#8B857A", "#252525", "#B8A89A"]
  },
  {
    name: "New Money Miami",
    description: "Sunny confidence, polished excess, and absolutely no apology for the entrance.",
    outfit: "Try: optic white + gold hardware + one deliciously bold color.",
    colors: ["#FFFFFF", "#F7C948", "#FF5D7A", "#1EAAA8"]
  },
  {
    name: "Cottagecore",
    description: "Soft, romantic, and nostalgic—like a walk through a sun-dappled forest.",
    outfit: "Try: floral dress + straw hat + delicate accessories.",
    colors: ["#F5E1DA", "#A3C9A8", "#D9B08C", "#F2D1C9"]
  },
  {
    name: "Cyberpunk",
    description: "Futuristic, edgy, and neon-lit—embracing the digital age with style.",
    outfit: "Try: metallic jacket + sleek pants + bold neon accents.",
    colors: ["#0F0F0F", "#FF00FF", "#00FFFF", "#1A1A1A"]
  },
  {
    name: "Bohemian",
    description: "Free-spirited, eclectic, and artistic—mixing patterns and textures with ease.",
    outfit: "Try: flowy maxi dress + layered jewelry + earthy tones.",
    colors: ["#A0522D", "#FFD700", "#8B4513", "#FF6347"]
  },
  {
    name: "Minimalist",
    description: "Clean lines, neutral colors, and a focus on simplicity and functionality.",
    outfit: "Try: tailored blazer + monochrome outfit + subtle accessories.",
    colors: ["#FFFFFF", "#000000", "#808080", "#C0C0C0"]
  },
  {
    name: "Dark Academia",
    description: "Intellectual, mysterious, and vintage-inspired—think libraries and classic literature.",
    outfit: "Try: tweed blazer + pleated skirt + oxford shoes.",
    colors: ["#3B2F2F", "#A67B5B", "#D9C9B6", "#5C4033"]
  },
];

function showLook(selectedLook) {

  aestheticName.textContent = selectedLook.name;
  aestheticDescription.textContent = selectedLook.description;
  outfitFormula.textContent = selectedLook.outfit;
  colorSwatches.innerHTML = "";

  selectedLook.colors.forEach(function (color) {
    colorSwatches.innerHTML += `<span class="swatch" style="background-color: ${color}"></span>`;
  });
}

function showRandomLook() {
  const randomIndex = Math.floor(Math.random() * looks.length);
  const selectedLook = looks[randomIndex];
  showLook(selectedLook);
}

function chooseMood(event) {
  const chosenMood = event.target.dataset.mood;

  if (chosenMood === "bookish") showLook(looks[0]);
  if (chosenMood === "discreet") showLook(looks[1]);
  if (chosenMood === "bold") showLook(looks[2]);
  if (chosenMood === "romantic") showLook(looks[3]);
  if (chosenMood === "futuristic") showLook(looks[4]);
  if (chosenMood === "eclectic") showLook(looks[5]);
  if (chosenMood === "minimalist") showLook(looks[6]);
  if (chosenMood === "mysterious") showLook(looks[7]);
}

findLookButton.addEventListener("click", showRandomLook);
answerButtons.forEach(function (button) {
  button.addEventListener("click", chooseMood);
});

