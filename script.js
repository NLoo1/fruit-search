const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	const capitalizeFirstLetter = ([first, ...rest]) => {
		return first.toUpperCase() + rest.join('');
	};

	str = capitalizeFirstLetter(str);

	// Populate results array with matches
	for(let fr of fruit){
		console.log("LOOP")
		if(fr.includes(str)){
			results.push(fr);
		}
	}

	return results;
}

// Helper function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function searchHandler(e) {
	// TODO
	// Take the input and pass to search();
	// search(str);

	let searchInput = capitalizeFirstLetter(input.innerText);
	const results = search(searchInput);
	
	showSuggestions(results);

// Example usage:
let yourString = "hello world";
let capitalizedString = capitalizeFirstLetter(yourString);
console.log(capitalizedString); // Output: "Hello world"


	// Check if any value in fruit includes that input
	// showSuggestions(results from search, inputVal)
}

function showSuggestions(results, inputVal) {
	// TODO
	// From searchHandler(), update suggestions based on matches
	// If results is empty, change text to no results

	if(results.length == 0){
		suggestions.innerText = "No results found."
	} else{
		for(let result of results){
			const newSuggestion = document.createElement("li");
			newSuggestion.innerText = result;
			suggestions.appendChild(newSuggestion);
		}
	}
}

function useSuggestion(e) {
	// TODO
	// If you click on a suggestion, the input text will take that value
	// Once clicked, set the value of textbox to that suggestion 
	// Clear list

	if(e.target == "li"){

	}
	else{
		console.log("bruh");
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);