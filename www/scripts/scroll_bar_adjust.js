// scroll bar_adjust.js
//
// Ensure content is in the same distance from the left, regardless of whether
// the page is long enough to scroll.
//
// Beyond max-width, additional width is distributed evenly between the left
// and right (sort-of centring the content). On a page with a scroll bar at the
// right, the total width is reduced so the space at the left is reduced too,
// starting the content slightly to the left of where it is on pages that don't
// scroll. This makes it jump when switching between pages.
//
// Avoid this by adding extra padding to the right the same width as a
// scroll bar on pages that don't have one.

$(document).ready(function()
{

  // A scroll bar reduces .width() but not innerWidth, so if these two are the
  // same then there isn't a scroll bar on this page:
  if (window.innerWidth - $(window).width() == 0)
  {

    // We want to add right padding the same width as a scroll bar. That first
    // involves measuring how wide a scroll bar is. Big bottom padding will
    // force a scroll bar to appear:
    $('html').css({paddingBottom: '100%'});

    // The reduction in .width() now reflects that scroll bar:
    var scroll_bar_width = window.innerWidth - $(window).width();

    // Remove that padding, since it isn't actually desired. The scroll bar
    // will disappear again:
    $('html').css({paddingBottom: 0});

    // Add padding in its place:
    $('body').css({paddingRight: '+=' + scroll_bar_width});

  }
});
