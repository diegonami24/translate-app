document.getElementById("translateButton").addEventListener("click", async () => {
    let text = document.getElementById("inputText").value;
    if (text.trim() ==="") return;

    let response = await fetch (`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|en`);
    let data = await response.json();

    document.getElementById("outputText").value = data.responseData.translatedText;
});

document.getElementById("newTextButton").addEventListener("click", () => {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
});

document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
