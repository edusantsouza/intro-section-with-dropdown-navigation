(function () {
  const openMenu = document.querySelector(".menu-icon");
  const closeMenu = document.querySelector(".close-icon");
  const showMenu = document.querySelector(".effect");
  const featuresSelect = document.querySelector(".features_dropdown");
  const companySelect = document.querySelector(".company_dropdown");
  const featuresList = document.querySelector(".features_list");
  const companyList = document.querySelector(".company_list");
  const mobileFeaturesSelect = document.querySelector(".mobile_features");
  const mobileCompanySelect = document.querySelector(".mobile_company");
  const mobileFeaturesList = document.querySelector(".mobile_features_list");
  const mobilecompanyList = document.querySelector(".mobile_company_list");

  mobileFeaturesSelect.addEventListener("click", () => {
    mobileFeaturesList.classList.toggle("visible");
    if (mobileFeaturesList.classList.contains("visible")) {
      mobileFeaturesSelect.children[1].textContent = "expand_less";
    } else {
      mobileFeaturesSelect.children[1].textContent = "expand_more";
    }
  });
  mobileCompanySelect.addEventListener("click", () => {
    mobilecompanyList.classList.toggle("visible");
    if (mobilecompanyList.classList.contains("visible")) {
      mobileCompanySelect.children[1].textContent = "expand_less";
    } else {
      mobileCompanySelect.children[1].textContent = "expand_more";
    }
  });
  featuresSelect.addEventListener("click", () => {
    featuresList.classList.toggle("visible");
    if (featuresList.classList.contains("visible")) {
      featuresSelect.children[0].children[1].textContent = "expand_less";
    } else {
      featuresSelect.children[0].children[1].textContent = "expand_more";
    }
  });
  companySelect.addEventListener("click", () => {
    companyList.classList.toggle("visible");
    if (companyList.classList.contains("visible")) {
      companySelect.children[0].children[1].textContent = "expand_less";
    } else {
      companySelect.children[0].children[1].textContent = "expand_more";
    }
  });
  closeMenu.addEventListener("click", () => {
    showMenu.classList.remove("visible");
  });
  openMenu.addEventListener("click", () => {
    showMenu.classList.add("visible");
  });
})();
