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
// Avoid this by adding extra padding to the right the same width as a
// scrollbar on pages that don't have one.

$(document).ready(function()
{

  // A scrollbar reduces .width() but not innerWidth, so if these two are the
  // same then there isn't a scrollbar on this page:
  if (window.innerWidth - $(window).width() == 0)
  {

    // We want to add right padding the same width as a scrollbar. That first
    // involves measuring how wide a scrollbar is. Big bottom padding will
    // force a scroll bar to appear:
    $('html').css({paddingBottom: '100%'});

    // The reduction in .width() now reflects that scrollbar:
    var scrollbar_width = window.innerWidth - $(window).width();

    // Remove that padding, since it isn't actually desired. The scrollbar will
    // disappear again:
    $('html').css({paddingBottom: 0});

    // Add padding in its place:
    $('body').css({paddingRight: '+=' + scrollbar_width});

  }
});
