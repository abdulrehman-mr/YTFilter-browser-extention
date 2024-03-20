const forbiddenWords = ["song", "tension", "dancing","biwi", "goat", "bride", "fahash", "golddigger","sistrology","#sistrology","meme","comedy","memes","ishq","netflix", "crew", "marriage","dj","mix","trap","love","episode","trailer","clips","marines","she", "music", "dance", "drama", "hiphop", "movie", "prank", "family", "sister", "girls", "girl", "wife", "mom", "mama", "father", "papa", "music", "amma", "giveaway", "vlog", "religion", "ghar", "series", "routine", "crazy", "iqrar", "geo", "hum", "basil", "songs", "status", "modi", "surprise", "surprised", "husband", "recipe"];

function removeVideos() {
  const videoElements = document.querySelectorAll("ytd-rich-item-renderer");
  videoElements.forEach(video => {
    if(video.querySelector("#video-title")){
      const title = video.querySelector("#video-title").textContent.toLowerCase();
      if (forbiddenWords.some(word => title.includes(word))) {
        video.remove();
        //video.innerHTML ="<div style=\"display:block;\"><div style=\"display:flex;aligin-content:center;aligin-items:center;justify-content:center;\">Filtered</div></div>";
      }
    }
  });
}

let timeoutId;

function observeDOMChanges() {
  const observer = new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(removeVideos, 300); // Debouncing - delay before processing
      }
    }
  });

  observer.observe(document.querySelector("#contents"), { childList: true, subtree: true }); // Narrow down the search scope
}

removeVideos();
observeDOMChanges();