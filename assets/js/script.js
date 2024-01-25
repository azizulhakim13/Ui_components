




const textarea = document.getElementById('query');
  const charCountDisplay = document.getElementById('char-count');
  const charLimit = 1200;

  textarea.addEventListener('input', function() {
    const charCount = textarea.value.length;
    charCountDisplay.textContent = `Characters entered: ${charCount} / ${charLimit}`;

    if (charCount > charLimit) {
      const excessChars = textarea.value.slice(charLimit);
      textarea.value = textarea.value.slice(0, charLimit);
      charCountDisplay.textContent = 'Characters limit exceeded. Please remove ' + excessChars.length + ' characters.';
    }
  });


const searchBox = document.getElementById('search-box');
const suggestionsList = document.getElementById('suggestions-list');

const staticSuggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape'];

searchBox.addEventListener('input', () => {
  const userInput = searchBox.value.toLowerCase();
  const filteredSuggestions = staticSuggestions.filter(suggestion =>
    suggestion.toLowerCase().startsWith(userInput)
  );

  suggestionsList.innerHTML = '';
  filteredSuggestions.forEach(suggestion => {
    const listItem = document.createElement('li');
    listItem.textContent = suggestion;
    suggestionsList.appendChild(listItem);
  });

  if (filteredSuggestions.length > 0) {
    suggestionsList.style.display = 'block';
  } else {
    suggestionsList.style.display = 'none';
  }
});

suggestionsList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    searchBox.value = event.target.textContent;
    suggestionsList.style.display = 'none';
  }
});

searchBox.addEventListener('blur', () => {
  suggestionsList.style.display = 'none';
});



$(".readmore-link").click( function(e) {
  // record if our text is expanded
  var isExpanded =  $(e.target).hasClass("expand");
  
  //close all open paragraphs
  $(".readmore.expand").removeClass("expand");
  $(".readmore-link.expand").removeClass("expand");
  
  // if target wasn't expand, then expand it
  if (!isExpanded){
    $( e.target ).parent( ".readmore" ).addClass( "expand" );
    $(e.target).addClass("expand");  
  } 
});








// JavaScript to hide the preloader after 1 second
$(window).load(function() { // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
})



// Get references to the anchor element and the arrow icon
const changeColorLink = document.getElementById("changeColorLink");
const arrowIcon = changeColorLink.querySelector(".arrow-1");

// Add a click event listener to the anchor
changeColorLink.addEventListener("click", function(event) {
  // Prevent the default behavior of the anchor (e.g., navigating to a URL)
  event.preventDefault();

  // Change the background color of the anchor element itself
  changeColorLink.style.backgroundColor = "red";

  // Rotate the arrow icon
  arrowIcon.style.transform = "rotate(90deg)";
});


function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}



