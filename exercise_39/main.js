let form = document.querySelector("form")
let languageSelect = document.querySelectorAll("select");
let translatedTextHolder = document.querySelector(".translated-text");
let userText = document.querySelector("textarea");

async function getLanguages() {
  let url = "https://text-translator2.p.rapidapi.com/getLanguages";

  let options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "10161c9bb8msh7d2306b07da83abp1d1aebjsn96c3da5faf6e",
      "x-rapidapi-host": "text-translator2.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    const request = await fetch(url, options);

    // ✅ check HTTP response first
    if (!request.ok) {
      throw new Error(`HTTP error! Status: ${request.status}`);
    }

    const respond = await request.json();
    let listLanguages = respond.data.languages;

    displayLanguage(listLanguages);
  } catch (error) {
    console.error("Error:", error);
  }
}

// getLanguages();

const displayLanguage = (languages) => {
    languages.forEach((lang, index) => { 
        languageSelect.forEach(selc => {
            let options = document.createElement("option");
            options.value = languages[index].code;
            options.textContent = languages[index].name;
            selc.append(options);
        })
    });

};



getLanguages();


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '10161c9bb8msh7d2306b07da83abp1d1aebjsn96c3da5faf6e',
		'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({
		source_language: languageSelect[0].value,
		target_language: languageSelect[1].value,
		text: `${userText.value}`
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const translateApiText = result.data.translatedText;
    
    translatedTextHolder.textContent = translateApiText;

} catch (error) {
	console.error(error);
}
})

