function solve() {
  const textAreaValue = document.getElementById("input").value;
  const resultDiv = document.getElementById("output");

  const sentencesArr = textAreaValue
      .split(".")
      .filter((s) => s !== "")
      .map((s) => s + ".");

  const paragraphRoof = Math.ceil((sentencesArr.length / 3));

  for (let i = 0; i < paragraphRoof; i++) {
      const joinedSentences = sentencesArr.splice(0, 3).join("");
      resultDiv.innerHTML += `<p>${joinedSentences}</p>`;
  }
}