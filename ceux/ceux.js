document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image-container");
  const currentImage = document.getElementById("current-image");
  const imageTitle = document.getElementById("image-title");
  const imageYear = document.getElementById("image-year");

  let currentImageIndex = 0;

  function updateImageInfo(index) {
    const images = document.querySelectorAll(".image, .first");
    const visibleImage = images[index];
    const title = visibleImage.getAttribute("data-title");
    const year = visibleImage.getAttribute("data-year");

    imageTitle.textContent = title + ",";
    imageYear.textContent = year;
  }

  function updateCurrentImageIndex() {
    const images = document.querySelectorAll(".image, .first");
    let closestImageIndex = 0;
    let closestImageDistance = Infinity;

    images.forEach((image, index) => {
      const imageRect = image.getBoundingClientRect();
      const containerRect = imageContainer.getBoundingClientRect();
      const distance = Math.abs(imageRect.top - containerRect.top);

      if (distance < closestImageDistance) {
        closestImageDistance = distance;
        closestImageIndex = index;
      }
    });

    if (closestImageIndex !== currentImageIndex) {
      currentImageIndex = closestImageIndex;
      currentImage.textContent = currentImageIndex + 1;
      updateImageInfo(currentImageIndex);
    }
  }

  imageContainer.addEventListener("scroll", updateCurrentImageIndex);

  window.addEventListener("load", function () {
    const images = document.querySelectorAll(".image, .first");

    function adjustImageHeight() {
      images.forEach(function (image) {
        const containerWidth =
          document.querySelector(".image-container").clientWidth;
        const imageWidth = image.width;

        if (imageWidth > containerWidth) {
          const aspectRatio = image.naturalHeight / image.naturalWidth;
          const newHeight = containerWidth * aspectRatio;
          image.style.maxHeight = newHeight + "px";
        } else {
          image.style.maxHeight = "100%";
        }
      });
    }

    adjustImageHeight();
    window.addEventListener("resize", adjustImageHeight);

    setTimeout(updateCurrentImageIndex, 100);
  });

  window.onload = function () {
    const images = document.querySelectorAll(".image, .first");
    const photographyElements = document.querySelectorAll(".photography");
    const photographyElements1 = document.querySelectorAll(".first");
    const infoCollectElements = document.querySelectorAll(".info_collect");
    const navElements = document.querySelectorAll(".nav");

    images.forEach((image) => image.classList.add("fade-in"));
    photographyElements.forEach((element) => element.classList.add("fade-in"));
    photographyElements1.forEach((element) => element.classList.add("fade-in"));
    infoCollectElements.forEach((element) => element.classList.add("fade-in"));
    navElements.forEach((element) => element.classList.add("fade-in"));

    setTimeout(updateCurrentImageIndex, 100);
  };
});
