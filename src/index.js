// ------------------------------------
// DOCUMENT ELEMENTS
// ------------------------------------

const _indexDdl = document.querySelector('#_indexDdl');
const _randElemBtn = document.querySelector('#_randElemBtn');
const _searchBar = document.querySelector('#_searchBar');

// ------------------------------------
// DOCUMENT FUNCTIONS & EVENT HANDLERS
// ------------------------------------

// index dropdown handler
// todo - implement this properly
let selectedIdx = _indexDdl.value.toLowerCase();
_indexDdl.onchange = function() {
  selectedIdx = _indexDdl.value.toLowerCase();
};
// random element button
_randElemBtn.onclick = function() {
  document.location = `#${ELEMENTS.getRandElem()}`;
};
// search bar handler
const elemKeys = Object.keys(ELEMENTS.elems);
_searchBar.oninput = function() {
  // todo - implement selectedIdx
  search(_searchBar.value, elemKeys, '_searchDisp'); 
};
function search(input, searchArr, targetDisp) {
  // declare local variable
  let inputArr = input.split('');
  let disp = document.querySelector(`#${targetDisp}`);
  
  // clear target display
  disp.innerHTML = '';
  
  // loop through given search array
  // todo - try to implement a bianary search
  searchArr.forEach(function(item, index) {
    // (toLowerCase() used to search without woring about case sensitivity)
    // if the item being checked contained a letter from the input,
    // skip to the next iteration, else break out of the loop
    // if the end of the loop is reached, display the item
    for (let i = 0; i < inputArr.length; i++) {
      // check if current item includes searched string
      let contains = item.toLowerCase().includes(inputArr[i].toLowerCase());
      
      if (i === (inputArr.length - 1) && contains === true) {
        // if the element contains all letters from the output
        disp.innerHTML += `<a href="#${item}">${boldFormat(item, inputArr)}</a>`;
      } else if (contains === true) {
        // if the letter is in the element
        continue;
      } else {
        // if the letter isn't in the element
        break;
      }
    }
  });
  
  // todo - reconsider what to write here when styling
  if (input === '') {
    disp.innerHTML += 'Your results will appear here';
  } else if (disp.innerHTML === '') {
    disp.innerHTML = 'Nothing matches your search';
  }
}
// format a given string by bolding the given characters in a string
// input - {string} that will be formatted
// letterArr - {array} of letters that will be used to format input
function boldFormat(input, letterArr) {
  let inputArr = input.split('');
  let output = [];
  
  for (let i = 0; i < inputArr.length; i++) {
    // console.log(inputArr[h]);
    for (let j = 0; j < letterArr.length; j++) {
      if (inputArr[i].toLowerCase() === (letterArr[j].toLowerCase())) {
        output.push(`<b>${inputArr[i]}</b>`);
        break;
      } else if (j === (letterArr.length - 1)){
        output.push(inputArr[i]);
      }
    }
  }
  
  // return formatted string
  return output.join('');
}
