'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

const nickName = document.getElementById('nickname');
nickName.textContent = 'elf';

const favFood = document.getElementById('fav-food');
favFood.textContent = 'pizza';

const hometown = document.getElementById('hometown');
hometown.textContent = 'Istanbul';

const listItems = document.querySelectorAll('li');
listItems.forEach((listItem) => (listItem.className = 'list-item'));
