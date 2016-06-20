var activeIndex = 0;

function keyListener(event) {
  var x = event.which || event.keyCode;
  var rootLayout = document.querySelector('#layouts');
  var layouts = rootLayout.children;

  // Up keycode: 38
  // Down keycode: 40
  
  if (x == 38) {
    activeIndex--;

    if (activeIndex < 0) activeIndex = layouts.length - 1;
  } else if (x == 40) {
    activeIndex++;

    if (activeIndex > layouts.length - 1) activeIndex = 0;
  }

  for (var i = 0; i < layouts.length; i++) {
    if (layouts[i].nodeName == 'A-ENTITY') {
      if (i != activeIndex) {
        layouts[i].setAttribute('visible', false);
      } else {
        layouts[i].setAttribute('visible', true);
      }
    }
  }
}

function initSecondButton(event) {
  console.log('event.currentTarget: ' + event.currentTarget)

  event.currentTarget.addEventListener('stateadded', function(evt) {
    if (evt.state == 'hovered') {
      console.log('thumbnail hovered');
    }
  });
}