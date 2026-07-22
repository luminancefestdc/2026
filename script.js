// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll(
  ".about, .courses, .gallery, .register, .about__stats, .course, .gallery__tile"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => io.observe(el));

// ---------- Mobile nav ----------
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav__links");
if (burger && navLinks) {
  burger.addEventListener("click", () => {
    const open = navLinks.style.display === "flex";
    navLinks.style.display = open ? "none" : "flex";
    navLinks.style.position = "fixed";
    navLinks.style.top = "0";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.background = "var(--maroon-deep)";
    navLinks.style.flexDirection = "column";
    navLinks.style.padding = "90px 30px 30px";
    navLinks.style.gap = "26px";
  });
}

// ---------- Registration form ----------
// NOTE FOR MAINTAINERS:
// This form currently just confirms locally. To actually collect
// registrations on a static GitHub Pages site, connect it to a
// form backend such as Formspree, Getform, or a Google Form, and
// change the fetch URL below. See the README for step-by-step setup.
const form = document.getElementById("regForm");
const note = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";

    // Placeholder: replace FORM_ENDPOINT with your Formspree/Getform URL
    const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"

    try {
      if (FORM_ENDPOINT) {
        const data = new FormData(form);
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
      } else {
        // No backend configured yet — simulate success locally
        await new Promise((res) => setTimeout(res, 700));
      }
      form.reset();
      note.textContent = "You're registered! A confirmation email is on its way.";
      note.style.color = "#163C2E";
      submitBtn.textContent = "Registered ✓";
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Confirm Registration";
      }, 2500);
    } catch (err) {
      note.textContent = "Something went wrong — please try again.";
      note.style.color = "#5C1220";
      submitBtn.disabled = false;
      submitBtn.textContent = "Confirm Registration";
    }
  });
}
