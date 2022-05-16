// ------------------------------------------------------------------------
// DOCUMENT ELEMENTS
// ------------------------------------------------------------------------

const _indexDdl = document.querySelector('#_indexDdl');
const _randElemBtn = document.querySelector('#_randElemBtn');
const _searchBar = document.querySelector('#_searchBar');

// ------------------------------------------------------------------------
// DOCUMENT FUNCTIONS & EVENT HANDLERS
// ------------------------------------------------------------------------

// index dropdown handler
// todo - implement this properly
let selectedIdx = _indexDdl.value.toLowerCase();
_indexDdl.onchange = function() {
  selectedIdx = _indexDdl.value.toLowerCase();
};
// random element button
_randElemBtn.onclick = function() {
  document.location = `#${ELEMENTS.GetRandElem()}`;
};
// search bar handler
_searchBar.oninput = function() {
  // todo - implement selectedIdx
  OWL.DisplayBoldSearch(
    _searchBar.value,
    ELEMENTS.elemKeys,
    '_searchDisp',
    function(input) {return `href="#${input}"`}
  );
};
