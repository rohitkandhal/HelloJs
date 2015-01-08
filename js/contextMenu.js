function addContextMenu(event){
	var div = document.getElementById("testDiv");

	EventUtil.addHandler(window, "contextmenu", function(event){
		event = EventUtil.getEvent(event);
		EventUtil.preventDefault(event);

		var menu = document.getElementById("myMenu");
		menu.style.left=  calcApropPosition(event.clientX, menu.clientWidth, "width") + "px";
		menu.style.top = calcApropPosition(event.clientY, menu.clientHeight, "height") + "px";
		menu.style.visibility = "visible";
	});
}

EventUtil.addHandler(window, "load", addContextMenu);

// Helper Functions
function calcApropPosition(currPos, menuSize, orient){
	if(orient === "height"){
		var clientWidth = getHeight();	
	} else {
		var clientWidth = getWidth();
	}

	var finalPos = currPos;

	if(currPos + menuSize >= clientWidth){
		finalPos = currPos - menuSize;
	}

	return finalPos;
}

// Get client browser width
function getWidth() {
  if (self.innerHeight) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

function getHeight() {
  if (self.innerHeight) {
    return self.innerHeight;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  if (document.body) {
    return document.body.clientHeight;
  }
}