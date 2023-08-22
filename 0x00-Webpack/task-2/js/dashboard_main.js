import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  // Create and append elements to the body
  $('<p>Holberton Dashboard</p>').appendTo('body');
  $('<p>Dashboard data for the students</p>').appendTo('body');
  $('<button>Click here to get started</button>').appendTo('body');
  $('<p id="count"></p>').appendTo('body');
  $('<p>Copyright - Holberton School</p>').appendTo('body');

  // Function to update the counter
  let count = 0;
  const updateCounter = _.debounce(function () {
    count++;
    $('#count').text(count + ' clicks on the button');
  }, 500);

  // Bind the debounce function to the click event of the button
  $('button').on('click', updateCounter);
});

