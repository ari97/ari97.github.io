//Activates the image gallery



function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  // Image info to be updated
  let galleryInfo = document.querySelector("#gallery-info");
  let mainTitle = galleryInfo.querySelector(".title");
  let mainDesc = galleryInfo.querySelector(".description");


  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function() {
      // code to set clicked image as main image

      //First lets get the new image source and alt
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageAlt = thumbnail.alt;
      //Now lets set it
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);



      //Change the current image styling to the newly clicked one
      const currentClass = "current";
      //target the current image and take out the class
      document.querySelector(".current").classList.remove(currentClass);
      //now add it
      thumbnail.parentNode.classList.add(currentClass);

      //Update the image info
      mainTitle.innerHTML = thumbnail.dataset.title;
      mainDesc.innerHTML = thumbnail.dataset.description;



    });
  });

}
