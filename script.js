const featuresBtn = document.getElementById("features-btn");
const featuresDD = document.getElementById("features-dd");
const companyBtn = document.getElementById("company-btn");
const companyDD = document.getElementById("company-dd");

const toggleClass = (element, attribute) => {
  element.classList.toggle(attribute);
};

featuresBtn.addEventListener("click", () =>
  toggleClass(featuresDD, "dd-active")
);
companyBtn.addEventListener("click", () => toggleClass(companyDD, "dd-active"));
