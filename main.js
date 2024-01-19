const newWords = [];

document
  .getElementById("submittemplate")
  .addEventListener("click", function () {
    str = document.getElementById("template").value;
    keywords = extract(str);
    keywords.forEach(function (element) {
      document.getElementById(
        "names"
      ).innerHTML += `<label for="${element}">${element}:</label>
      <input type="text" id="${element}"  placeholder = "${element}">`;
    });
    document.getElementById(
      "names"
    ).innerHTML += `<input type="submit" id="submitnames" value="Execute">`;
    document.getElementById("names").addEventListener("submit", function (e) {
      e.preventDefault();
      for (let i = 0; i < keywords.length; i++) {
        newWords[i] = document.getElementById(keywords[i]).value;
      }
      document.getElementById("finaltext").innerHTML = replace(keywords,newWords);
    });
  });

function replace(arr1, arr2) {
  arr1.forEach((element, ind) => {
    str = str.replace(element, arr2[ind]);
  });
  return str.replace(/\n/g, "<br>").split(/[{{}}]/).join("");
}

function extract(str) {
  return str.match(/{{(.*?)}}/g).map((str) => str.slice(2, -2));
}
