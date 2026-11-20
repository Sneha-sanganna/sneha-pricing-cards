// Monthly / yearly pricing switch
const billingToggle = document.getElementById("billing-toggle");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");
const prices = document.querySelectorAll(".price");
const captions = document.querySelectorAll(".billing-caption[data-monthly-caption]");

function setBillingPeriod(isYearly) {
  billingToggle.setAttribute("aria-checked", String(isYearly));
  monthlyLabel.classList.toggle("selected", !isYearly);
  yearlyLabel.classList.toggle("selected", isYearly);

  prices.forEach(price => {
    price.textContent = isYearly ? price.dataset.yearly : price.dataset.monthly;
  });

  captions.forEach(caption => {
    caption.textContent = isYearly
      ? caption.dataset.yearlyCaption
      : caption.dataset.monthlyCaption;
  });
}

billingToggle.addEventListener("click", () => {
  const currentlyYearly = billingToggle.getAttribute("aria-checked") === "true";
  setBillingPeriod(!currentlyYearly);
});

// Start with monthly billing selected.
setBillingPeriod(false);
