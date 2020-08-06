module.exports = Phrase;

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  if (this.match(/^\s*$/g )) {
    return true;
  } else {
    return false;
  }
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
