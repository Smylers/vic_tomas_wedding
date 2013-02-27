// scrollbar_adjust.js
//
// Ensure content is in the same distance from the left, regardless of whether
// the page is long enough to scroll.
//
// Beyond max-width, additional width is distributed evenly between the left
// and right (sort-of centring the content). On a page with a scrollbar at the
// right, the total width is reduced so the space at the left is reduced too,
// starting the content slightly to the left of where it is on pages that don't
// scroll. This makes it jump when switching between pages.
//
// Avoid this by having some right padding on all pages, to make room for the
// scroll bar (which is done in CSS), then reducing that by the width of the
// scrollbar on pages that have one, thereby restoring the amount of surplus
// space (to be divided between the two sides) to what it would've been without
// the scroll bar.

$(document).ready(function()
{
  $('body').css({paddingRight: '-=' + (window.innerWidth - $(window).width())})
});
