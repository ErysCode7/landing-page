const headerNav = document.querySelector("[data-header-container]");
const hero = document.querySelector("[data-hero]");
const heroContents = document.querySelector("[data-hero-contents]");
const investingSection = document.querySelector("[data-investing]");
const showcaseSection = document.querySelector("[data-showcase]");
const dataPromotiontitle = document.querySelector("[data-promotion-title]");
const dataPromotionGood = document.querySelector("[data-promotion-good]");
const companySection = document.querySelector("[data-company]");
const faqSection = document.querySelector("[data-faq]");
const closingImageSection = document.querySelector("[data-closing-image]");
const closingContentSection = document.querySelector("[data-closing-contents]");
const form = document.querySelector("[data-form]");

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        headerNav.classList.add("scroll");
      } else {
        headerNav.classList.remove("scroll");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

headerObserver.observe(hero);

//observers
const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show-aos", entry.isIntersecting);
      if (entry.isIntersecting) slideObserver.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -250px 0px",
  }
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show-fade", entry.isIntersecting);
      if (entry.isIntersecting) fadeObserver.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -350px 0px",
    // threshold: 1,
  }
);

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show-fade-in", entry.isIntersecting);
      if (entry.isIntersecting) fadeInObserver.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -350px 0px",
  }
);

fadeInObserver.observe(heroContents);

fadeObserver.observe(investingSection);

fadeInObserver.observe(showcaseSection);

slideObserver.observe(dataPromotiontitle);
slideObserver.observe(dataPromotionGood);

fadeObserver.observe(companySection);

fadeInObserver.observe(faqSection);

slideObserver.observe(closingImageSection);
slideObserver.observe(closingContentSection);

fadeInObserver.observe(form);
