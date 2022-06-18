function addStrong(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] === "string" && words[i].includes("{{")) {
      let prefix = "";
      if (i > 0) {
        prefix = " ";
      }
      words[i] = (
        <strong>
          {prefix +
            words[i].replace(/({{)(.*)(}})/g, "$2").replaceAll("_", " ")}
        </strong>
      );
    } else {
      if (i > 0) {
        words[i] = " " + words[i];
      }
    }
  }

  return words;
}

export default addStrong;
