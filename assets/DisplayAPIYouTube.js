import { showError } from "./showError.js";

export async function DisplayAPIYoutube() {
  const API =
    "https://youtube-v31.p.rapidapi.com/search?channelId=UC-yJ1V3fN75A4dlR6dgRgEg&part=snippet%2Cid&order=date&maxResults=9";
  const content = document.getElementById("content1");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4576715d90msh459597c3ccbfc1bp1283f4jsn4f0671f97930",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(API, options);
    const videos = await response.json();
    let view = videos.items
      .map(
        (video) => `
        <div class="group relative">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${
          video.snippet.description
        }" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            ${video.snippet.title || "No Title available."}
            </h3>
            <p class="text-sm text-gray-500">
              
            </p>
          </div>
        </div>
      `
      )
      .slice(0, 4)
      .join("");

    if (content) {
      content.innerHTML = view;
    } else {
      console.error("Content element not found in Youtube Data");
    }
  } catch (error) {
    console.error("Error fetching Youtube Data:", error);
    showError(
      "Youtube Data fetch failed. Please try again later. " + error.message
    );
  }
}
