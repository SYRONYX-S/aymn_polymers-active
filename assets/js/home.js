window.addEventListener("scroll", function() {
    const container = document.querySelector(".et-hero-tabs-container");
    const topOfContainer = container.offsetTop;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;
    const bottomOfContainer = topOfContainer + containerHeight;
    
    if (scrollTop > topOfContainer && scrollTop < bottomOfContainer - windowHeight) {
      container.classList.add("et-hero-tabs-container--top");
      container.classList.remove("et-hero-tabs-container--bottom");
    } else {
      container.classList.remove("et-hero-tabs-container--top");
      container.classList.add("et-hero-tabs-container--bottom");
    }
  });
  