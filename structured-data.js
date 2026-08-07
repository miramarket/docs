// Mintlify includes every .js file in the content directory on every page.
// This adds HowTo structured data to /quickstart only, and keeps it in sync
// with Mintlify's client-side routing (no full page reload between pages).
(function () {
  var SCRIPT_ID = "howto-build-a-strategy";

  var HOWTO = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Build a prediction market strategy with Miramarket",
    "description":
      "Create a simple Miramarket strategy with one condition and one action, then test it with Simulate.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose a market",
        "text":
          "Open the Market tab and use Trending, a category filter, or search to find a market. If the card has more than one named outcome, select the outcome first, then choose YES or NO for it."
      },
      {
        "@type": "HowToStep",
        "name": "Add a condition",
        "text":
          "Open the Condition tab and choose Price Condition. Set a threshold such as price is greater than 50¢, and confirm the condition watches the market and side you intend."
      },
      {
        "@type": "HowToStep",
        "name": "Set an action",
        "text":
          "Return to Market, choose the market and side again, and add it to the canvas after the condition. This action is what the strategy does when its condition is met."
      },
      {
        "@type": "HowToStep",
        "name": "Simulate the strategy",
        "text":
          "Click Simulate to validate the strategy and start a simulated run without placing real trades."
      }
    ]
  };

  function removeExisting() {
    var existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();
  }

  function apply() {
    var onQuickstart = location.pathname === "/quickstart";
    var already = document.getElementById(SCRIPT_ID);

    if (!onQuickstart) {
      if (already) removeExisting();
      return;
    }
    if (already) return; // already injected for this page, avoid duplicates

    var tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = SCRIPT_ID;
    tag.text = JSON.stringify(HOWTO);
    document.head.appendChild(tag);
  }

  apply();

  // Mintlify is client-routed (Next.js), so re-check on every navigation
  // rather than relying on a single load-time check.
  var lastPath = location.pathname;
  function onPathMaybeChanged() {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      apply();
    }
  }

  var pushState = history.pushState;
  history.pushState = function () {
    var result = pushState.apply(this, arguments);
    onPathMaybeChanged();
    return result;
  };
  var replaceState = history.replaceState;
  history.replaceState = function () {
    var result = replaceState.apply(this, arguments);
    onPathMaybeChanged();
    return result;
  };
  window.addEventListener("popstate", onPathMaybeChanged);
})();
