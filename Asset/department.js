(() => {
  const lightbox = document.getElementById("departmentLightbox");
  if (!lightbox) return;
  const lightboxImage = lightbox.querySelector(".department-lightbox__image");
  const lightboxCaption = lightbox.querySelector(".department-lightbox__caption");
  let lightboxItems = [];
  let lightboxIndex = 0;

  const updateLightbox = () => {
    const image = lightboxItems[lightboxIndex].querySelector("img");
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = lightboxItems[lightboxIndex].querySelector("h3").textContent;
  };
  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  };
  const moveLightbox = (direction) => {
    lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
    updateLightbox();
  };

  document.querySelectorAll(".department-gallery").forEach((gallery) => {
    const wrapper = gallery.querySelector(".department-gallery-wrapper");
    const track = gallery.querySelector(".department-gallery-track");
    const items = [...track.querySelectorAll(".department-gallery-card")];
    const dots = gallery.querySelector(".department-gallery-dots");
    let current = 0;
    const perView = () => window.innerWidth <= 820 ? 1 : 2;
    const maxIndex = () => Math.max(0, items.length - perView());
    const goTo = (index) => {
      current = Math.max(0, Math.min(index, maxIndex()));
      track.style.transform = `translateX(-${current * (items[0].offsetWidth + 22)}px)`;
      dots.querySelectorAll("button").forEach((dot, i) => dot.classList.toggle("active", i === current));
    };
    const buildDots = () => {
      dots.innerHTML = "";
      for (let i = 0; i <= maxIndex(); i += 1) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `department-gallery-dot${i === current ? " active" : ""}`;
        dot.setAttribute("aria-label", `Xem ảnh ${i + 1}`);
        dot.addEventListener("click", () => goTo(i));
        dots.appendChild(dot);
      }
    };
    items.forEach((item) => item.addEventListener("click", () => {
      lightboxItems = items; lightboxIndex = items.indexOf(item); updateLightbox();
      lightbox.classList.add("active"); document.body.style.overflow = "hidden";
    }));
    buildDots();
    gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => goTo(current - 1));
    gallery.querySelector("[data-gallery-next]").addEventListener("click", () => goTo(current + 1));
    let startX = 0;
    wrapper.addEventListener("touchstart", (event) => { startX = event.touches[0].clientX; }, { passive: true });
    wrapper.addEventListener("touchend", (event) => {
      const diff = startX - event.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    });
    window.addEventListener("resize", () => { buildDots(); goTo(current); });
  });

  lightbox.querySelector(".department-lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".department-lightbox-prev").addEventListener("click", () => moveLightbox(-1));
  lightbox.querySelector(".department-lightbox-next").addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
})();
