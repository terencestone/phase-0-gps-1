function longestString(array) {
  if (array.length === 0) {
    result = null
  } else {
    result = ""
    for (i = 0; i < array.length; i++) { 
      if (result.length < array[i].length) { 
        result = array[i]; 
      } 
    }
  }
  return result;
}
