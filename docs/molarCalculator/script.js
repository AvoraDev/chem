/*
todo - make calculators for the following:
  molar mass
  theoretica and percent yield
*/

// ------------------------------------------------------------------------
// DOCUMENT ELEMENTS
// ------------------------------------------------------------------------

const _searchBar = document.querySelector('#_searchBar');
const _addBtn = document.querySelector('#_addBtn');
const _clearBtn = document.querySelector('#_clearBtn');

const _elemsToAdd = document.querySelector('#_elemsToAdd');
const _massesToAdd = document.querySelector('#_massesToAdd');
const _results = document.querySelector('#_results');

// ------------------------------------------------------------------------
// OTHER VARIABLES/CONSTANTS
// ------------------------------------------------------------------------
const elemArr = [];
const massArr = [];

// ------------------------------------------------------------------------
// GENERAL DOCUMENT EVENT LISTENERS
// ------------------------------------------------------------------------
_searchBar.oninput = function() {
  OWL.DisplayBoldSearch(
    _searchBar.value,
    ELEMENTS.elemKeys,
    '_searchDisp',
    function(input) {return `onclick="addElem('${input}')"`}
  );
};
_addBtn.onclick = function() {
  let output = 0;
  elemArr.forEach(function(item) {
    output += item;
  });
  
  _results.innerHTML = `${output.toFixed(3)} g/mol`;
};
_clearBtn.onclick = function() {
  elemArr.length = 0;
  massArr.length = 0;
  update(true);
};

// ------------------------------------------------------------------------
// MOLAR MASS
// ------------------------------------------------------------------------
function addElem(input) {
  let elem = ELEMENTS.elems[input].mass;
  let amount = parseInt(prompt(`How many atoms of ${input}?`, 1));
  
  if (isNaN(amount) || amount === '') {
    alert('Please enter a valid number');
    return;
  } else {
    if(typeof(elem) === 'number') {
      elemArr.push(elem * amount);
    } else {
      elemArr.push(ELEMENTS.MassStrToNum(elem) * amount);
    }
  }
  
  // for readability
  massArr.push(`(${ELEMENTS.elems[input].symbol} • ${amount})`);
  update();
}
function update(clear = false) {
  if (clear === true) {
    _elemsToAdd.innerHTML = '...';
    _massesToAdd.innerHTML = '...';
    _results.innerHTML = '...';
  } else {
    _elemsToAdd.innerHTML = massArr.join(' + ');
    _massesToAdd.innerHTML = elemArr.join(' + ');
  }
}
