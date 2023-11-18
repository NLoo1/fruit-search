const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	str = str.toLowerCase();
	str = str.replace(/\s+$/, '');
	str = str.replace(/^\s+/, '');
	// Populate results array with matches
	for(let fr of fruit){
		// console.log("LOOP")
		if(fr.toLowerCase().includes(str) && str !== ""){
			results.push(fr);
		}
	}

	return results;
}

function searchHandler(e) {
	// Take the input and pass to search();

	// Check if input actually has text
	if(input.value){
		let searchInput = input.value;
		const results = search(searchInput);

		// Check if any value in fruit includes that input
		// showSuggestions(results from search, inputVal)
		showSuggestions(results, searchInput);

	}
	else{
		suggestions.innerHTML = "";
	}
}

function showSuggestions(results, inputVal) {
	// From searchHandler(), update suggestions based on matches
	// If results is empty, change text to no results

	if(results.length == 0){
		suggestions.innerHTML = "No results found."
	} else{
		suggestions.innerHTML = "";
		for(let result of results){
			const newSuggestion = document.createElement("li");
			newSuggestion.innerText = result;
			suggestions.appendChild(newSuggestion);
		}
	}
}

function useSuggestion(e) {
	// If you click on a suggestion, the input text will take that value
	// Once clicked, set the value of textbox to that suggestion 
	// Clear list

	// console.log(e.target);
	if(e.target.tagName == "LI"){
		input.value = e.target.innerText;
		suggestions.innerHTML = "";
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);