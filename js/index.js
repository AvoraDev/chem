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
let selectedIdx = '';
_indexDdl.onchange = function() {
   selectedIdx = _indexDdl.value;
   _index.innerHTML = selectedIdx;
};
// random element button
_randElemBtn.onclick = function() {
   document.location = `#${ELEMENTS.getRandElem()}`;
};
// search bar handler
_searchBar.oninput = function() {
   search(document.getElementById('_searchBar').value, undefined, '_searchDisp');
};
function search(input, index, targetDisp) {
   // todo - implement 'index'
   // declare local variable
   let inputArr = input.split('');
   let disp = document.querySelector(`#${targetDisp}`);
   
   // clear target display
   disp.innerHTML = '';
   
   // loop through all elements
   // todo - try to implement a bianary search
   Object.keys(ELEMENTS).forEach(function(elem, index) {
      // to avoid including other functions and arrays
      if (index < 118) {
         // (toLowerCase() used to search without woring about case sensitivity)
         // if the element being checked contained a letter from the input,
         // skip to the next iteration, else break out of the loop
         // if the end of the loop is reached, display the element
         for (let i = 0; i < inputArr.length; i++) {
            // check if element includes searched string
            let contains = elem.toLowerCase().includes(inputArr[i].toLowerCase());
            
            if (i === (inputArr.length - 1) && contains === true) {
               // if the element contains all letters from the output
               disp.innerHTML += `<a href="#${elem}">${boldFormat(elem, inputArr)}</a> <br>`;
            } else if (contains === true) {
               // if the letter is in the element
               continue;
            } else {
               // if the letter isn't in the element
               break;
            }
         }
      }
   });
   
   // todo - reconsider what to write here when styling
   if (input === '') {
      disp.innerHTML += 'Search something';
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
   
   for (let j = 0; j < inputArr.length; j++) {
      for (let k = 0; k < letterArr.length; k++) {
         if (inputArr[j].toLowerCase() === (letterArr[k].toLowerCase())) {
            output.push(`<b>${inputArr[j]}</b>`);
            break;
         } else if (k === (letterArr.length - 1)){
            output.push(inputArr[j]);
         }
      }
   }
   
   // return formatted string
   return output.join('');
}