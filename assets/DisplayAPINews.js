//import { fetchData } from "./fetchData.js";

import { showError } from "./showError.js";

export async function DisplayAPINews() {
  const API = "https://technology-news3.p.rapidapi.com/news";
  const content = document.getElementById("content");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4576715d90msh459597c3ccbfc1bp1283f4jsn4f0671f97930",
      "X-RapidAPI-Host": "technology-news3.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(API, options);
    const newsArticles = await response.json();
    let view = newsArticles
      .map(
        (newsArticle) => `
      <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            ${newsArticle.title}
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
      console.error("Content element not found");
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    showError("News fetch failed. Please try again later.: " + error.message);
  }
}
