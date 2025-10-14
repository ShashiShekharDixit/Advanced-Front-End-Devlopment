function loadImages() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear old images

  for (let i = 0; i < 10; i++) {
    // Request bigger images (not cropped)
    let imageUrl = "https://source.unsplash.com/random/800x600?sig=" + Math.random();

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Random Unsplash";

    card.appendChild(img);
    gallery.appendChild(card);
  }
}
