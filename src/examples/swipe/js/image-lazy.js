const images = document.getElementsByTagName("img");

const callback = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const image = entry.target;
      const dataSrc = image.getAttribute("data-src");
      image.setAttribute("src", dataSrc);
      observer.unobserve(image);
    }
  }
};

const observer = new IntersectionObserver(callback);

for (let i = 0; i < images.length; i++) {
  observer.observe(images[i]);
}
