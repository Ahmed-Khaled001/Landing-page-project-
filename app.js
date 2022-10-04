/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function navSections(){
    // loops over sections and adds the same number of nav list links
    for (let section of sections){
        // create nav list item, get then set it's text content and link
        const listItem = document.createElement('li');
        const listItemName = section.getAttribute('data-nav');
        const listItemLink = section.getAttribute('id');
        listItem.innerHTML = `<a class='menu__link' href='#${listItemLink}'>${listItemName}</a>`;
        navList.appendChild(listItem);
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function isOnView(sec){
        // return true if the section distance from top is from 0 to 400px
        const distanceTop = sec.getBoundingClientRect().top;
        return (distanceTop >= 0 && distanceTop <= 400);
}


function addActiveClass(){
    document.addEventListener('scroll', function(){
    
        // loop through each section
        for (let section of sections) {
            
            // if the section is on view add the active class
            if (isOnView(section)) {
                section.classList.add('your-active-class');
            }
            // else remove the class
             else {
                section.classList.remove('your-active-class');
            }
        };
    });
}


// build the nav
navSections();

// Add class 'active' to section when near top of viewport
addActiveClass();

