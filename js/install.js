let deferredPrompt; // Allows to show the install prompt
const installButton = document.getElementById("btn-install");

window.addEventListener("beforeinstallprompt", e => {
  console.log("beforeinstallprompt fired");
  deferredPrompt = e;
  installButton.addEventListener("click", installApp);
});

function installApp() {
    console.log("clicou ")
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("PWA setup accepted");
      } else {
        console.log("PWA setup rejected");
      }
      deferredPrompt = null;
    });
  }