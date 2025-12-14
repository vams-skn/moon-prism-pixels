const doors = document.querySelectorAll(".door");
const overlay = document.getElementById("overlay");

const modalDay = document.getElementById("modal-day");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalExtra = document.getElementById("extra-text");

const startDate = new Date(new Date().getFullYear(), 10, 11);

const challenges = [
  {
    title: "Refresh Your Phone",
    text: "Pick a lockscreen and wallpaper that fits the version of you walking into the new year. It could be a picture that calms you, your favorite quote, or a drawing you particularly like.",
    extra: "Extra challenge: while you're here, reorganize your apps into folders that make sense and removes the visual clutter on your screen."
  },
  {
    title: "Wardrobe Reset Day",
    text: "Open your wardrobe and be honest. If you haven't worn a piece all year, or it makes you sigh in a bad way, it's probably time: let go of those you no longer reach for or don't see yourself wearing ever.",
    extra: "Extra challenge: consider donating the clothes you no longer want but are in good condition to a local charity or shelter."
  },
  {
    title: "Inbox Quiet Hour",
    text: "Spend some time in your inbox, especially the emails that have been sitting there for months. Archive freely and delete without guilt.",
    extra: "Extra challenge: unsubscribe from the mailing lists you no longer want to be a part of and set up labels to help you manage future emails more effectively."
  },
  {
    title: "Digital Wardrobe Declutter",
    text: "Clean out your Downloads folder, delete duplicates, and sort stray files into places that make sense.",
    extra: "Extra challenge: organize your desktop by removing unnecessary icons and creating a folder structure that makes sense to you."
  },
  {
    title: "Browser Reset",
    text: "Close tabs (yes, even the ones you're \"saving for later\") and remove browser extensions you don't actually use anymore.",
    extra: "Extra challenge: go through your bookmarks and delete the ones you no longer need. Keep only the sites you genuinely want to come back to."
  },
  {
    title: "Phone Storage Sweep",
    text: "Go through your phone and uninstall apps that no longer serve you. Review permissions, clear clutter, and free up space.",
    extra: "Extra challenge: turn off notifications for apps that constantly demand your attention and end up distracting you."
  },
  {
    title: "Camera Roll Curator",
    text: "Delete blurry photos, duplicates, and unnecessary screenshots. Create a small \"Keep\" album for screenshots that you actually need.",
    extra: "Extra challenge: make a \"Favourite Moments of 2025\" album for special memories that are worth revisting."
  },
  {
    title: "Notes App Postmortem",
    text: "Scroll through your notes app and delete what no longer represents who you are. Keep what still sparks something.",
    extra: "Extra challenge: pick one idea from your notes and give it a little more attention. Turn it into something bigger."
  },
  {
    title: "Gratitude List",
    text: "In your journal, list five things (could be people, tools, songs, or communities) that supported you this year.",
    extra: "Extra challenge: send a thank-you message to someone who has helped you get through 2025."
  },
  {
    title: "Social Feed Detox",
    text: "Take a scroll through your social feeds and mute or block accounts that make you feel tense. Curate a space that feels relaxing rather than draining.",
    extra: "Extra challenge: clear out saved posts you know you'll never return to."
  },
  {
    title: "Personal Desk Reset",
    text: "Wipe down your desk or workspace. Throw away dried pens, scraps of paper, and things that have no business being there.",
    extra: "Extra challenge: add one small joy item: stickers, a photo, a tiny figurine, that makes the space feel like yours again."
  },
  {
    title: "Subscription Check",
    text: "Review your paid apps and memberships with honesty. Keep what still feels aligned with your life as it is now, not as it once was. Cancel what doesn't.",
    extra: "Extra challenge: take note of your recurring expenses so the new year begins with clarity rather than surprise."
  },
  {
    title: "Mindful Tech Reset",
    text: "Adjust your digital boundaries: check your screen-time, alarms, do-not-disturb settings, and app limits to better suit your current needs.",
    extra: "Extra challenge: set up different phone modes for work, school, sleep, or rest."
  },
  {
    title: "Digital Vision Board",
    text: "Create a moodboard for 2026 using whatever medium feels easiest to you: Pinterest, Canva, Notion, or something handmade. Set it as your wallpaper if you'd like.",
    extra: "Extra challenge: take a look at how you spent your time and energy this year; not to judge yourself, but to notice what sustained you and what depleted you."
  },
  {
    title: "A Clean Slate + Letter to Yourself",
    text: "Decide on one thing you're leaving behind: it could be a bad habit or a fear. Choose the one thing you're bringing into 2026 with confidence.",
    extra: "Extra challenge: write a letter to the version of you who will open it at the end of 2026. The contents of it are up to you, but ideas can be found on my substack!"
  }
];

const today = new Date();

doors.forEach((door, index) => {
  const doorDate = new Date(startDate);
  doorDate.setDate(startDate.getDate() + index);

  if (today < doorDate) {
    door.classList.add("locked");
    return;
  }

  door.addEventListener("click", () => {
    modalDay.textContent = `DAY ${index + 1}`;
    modalTitle.textContent = challenges[index].title;
    modalText.textContent = challenges[index].text;
    modalExtra.textContent = challenges[index].extra;
    
    overlay.classList.remove("hidden");
  });
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});
