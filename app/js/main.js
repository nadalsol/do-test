/*
 *
 * Main scripts
 *
 * Author :  Nadal Soler </> Front-end Developer.
 *           nadal dot soler at gmail dot com
 *           https://github.com/nadalsol
 *           https://twitter.com/nadalsol
 * Created:  Feb 2017.
 *
 */


// Hide form and show confirmation message
$('#signup-form').submit(function(event) {
  $(this).addClass('is-hidden');
  $('#signup-message').removeClass('is-hidden');
  event.preventDefault();
});
