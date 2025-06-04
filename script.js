function firstWord(str) {
  if (!str) return "";  // empty string case

  // Trim leading spaces to handle cases like " Hello World"
  str = str.trimStart();

  // Find the index of first space
  const spaceIndex = str.indexOf(" ");

  if (spaceIndex === -1) {
    // No space found, return entire string
    return str;
  }

  // Return substring up to the first space
  return str.substring(0, spaceIndex);
}

function showFirstWord() {
  const input = document.getElementById("inputStr").value;
  const output = firstWord(input);

  document.getElementById("result").textContent = output;
}
