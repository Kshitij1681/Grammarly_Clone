const charVal = document.getElementById("textarea");
let total_cnt = document.getElementById("total-counter");
let rem_cnt = document.getElementById("rem-counter");
let charLen = 0;

const pluginElement = document.querySelector("grammarly-editor-plugin");
pluginElement.config = {
  activation: "immediate",
  autocomplete: "on",
  suggestionCards: "on",
  documentDialect: "canadian",
  suggestionCategories: {
    passiveVoice: "on",
  },
};

const updateCounter = () => {
  charLen = charVal.value.length;
  total_cnt.innerHTML = charLen;
  rem_cnt.innerHTML = 150 - charLen;
};

charVal.addEventListener("keyup", () => {
  updateCounter();
});

const copyText = () => {
  if (charVal.value.length > 0) swal({ title: "Text Copied!", text: "Your text has been to copied to the clipboard", icon: "success" });
  charVal.select();
  charVal.setSelectionRange(0, 999);
  navigator.clipboard.writeText(charVal.value);
};
