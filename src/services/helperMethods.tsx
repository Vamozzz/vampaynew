export function calculateReadingTime(content: any, wordsPerMinute = 200) {
  const words = content?.split(/\s+/).length;
  const minutes = Math?.round(words / wordsPerMinute);
  return minutes;
}

export function truncateDescription(content: string, maxWords = 100) {
  const strippedContent = content?.replace(/<[^>]*>/g, "");
  const words = strippedContent?.split(/\s+/); // uncomment for real data
  // const words = strippedContent.split("");
  const truncatedContent = words?.slice(0, maxWords).join(" "); // uncomment for real data
  // const truncatedContent = words.slice(0, maxWords).join("");
  return `${truncatedContent} <span style="color:#6C54FF;">Read More...</span>`;
}

// Function to share on Facebook
export const shareOnFacebook = (url: string) => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "_blank");
};

export const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month: string = monthNames[date.getMonth()];
  const day: number = date.getDate();
  const year: number = date.getFullYear();
  return `${month} ${day} ${year}`;
};


// Function to share on Twitter
export const shareOnTwitter = (url: string) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "_blank");
};

// Function to share on WhatsApp
export const shareOnWhatsApp = (url: string) => {
  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "_blank");
};

// Function to share on Instagram
export const shareOnInstagram = (url: string) => {
  const shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "_blank");
};
