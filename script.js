function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function toggleMoreContent(projectId) {
  var moreContent = document.getElementById('moreContent' + projectId);
  var contentPreview = document.querySelector('.content-preview');
  var showMoreBtn = document.querySelector('button[onclick="toggleMoreContent(\'' + projectId + '\')"]');

  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    showMoreBtn.innerHTML = "Show Less";
    contentPreview.style.maxHeight = "none"; // Remove the restriction on preview content height
  } else {
    moreContent.style.display = "none";
    showMoreBtn.innerHTML = "Show More";
    contentPreview.style.maxHeight = "100px"; // Reapply the height restriction to preview content
  }
}
