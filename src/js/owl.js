const OWL = {
  ReturnSearch: function(input, searchArr) {
    let inputArr = typeof(input) === 'object' ? input : input.split('');
    let output = [];
    
    // loop through given array
    // todo - try to implement a bianary search
    searchArr.forEach(function(item) {
      // (toLowerCase() used to search without case sensitivity)
      // if the item being checked contained a letter from the input,
      // skip to the next iteration, else break out of the loop
      // if the end of the loop is reached, display the item
      for (let i = 0; i < inputArr.length; i++) {
        // check if current item includes searched string
        let contains = item.toLowerCase().includes(inputArr[i].toLowerCase());
        
        if (i === (inputArr.length - 1) && contains === true) {
          // if the element contains all letters from the output
          output.push(item);
        } else if (contains === true) {
          // if the letter is in the element
          continue;
        } else {
          // if the letter isn't in the element
          break;
        }
      }
    });
    
    return output;
  },
  DisplayBoldSearch: function(input, searchArr, targetDisp, onclick) {
    let inputArr = input.split('');
    let disp = document.querySelector(`#${targetDisp}`);
    let output = '';
    
    // clear target display
    disp.innerHTML = '';
    
    // check for empty output
    if (input === '') {
      disp.innerHTML += 'Your results will appear here';
    } else {
      // get search results
      this.ReturnSearch(inputArr, searchArr).forEach(function(item) {
        output += `<a ${onclick(item)}>${OWL.BoldFormat(item, inputArr)}</a>`;
      });
      
      // display search results
      disp.innerHTML = output;
      
      // todo - reconsider what displays here
      if (disp.innerHTML === '') {
        disp.innerHTML = 'Nothing matches your search';
      }
    }
  },
  // format a given string by bolding the given characters in a string
  // input - {string} that will be formatted
  // letterArr - {array} of letters that will be used to format input
  BoldFormat: function(input, letterArr) {
    let inputArr = input.split('');
    let output = [];
    
    for (let i = 0; i < inputArr.length; i++) {
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
};
