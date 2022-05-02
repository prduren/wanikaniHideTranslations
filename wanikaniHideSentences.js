const sentences = document.querySelectorAll(".context-sentence-group");
const newSentences = Array.from(sentences);
const button = document.createElement("button");
const section = document.querySelector("#item-info-context-sentences");

button.classList.add("engTextHider");
button.innerHTML = "Hide/Show English Sentences"

section.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', () => {
    newSentences.forEach(element => {
        element.children.forEach(child => {
            if (child.lang !== "ja") {
                if (child.style.display === "none") {
                    child.style.display = "block";
                } else {
                    child.style.display = "none";
                }
            }
        });
    });
});
