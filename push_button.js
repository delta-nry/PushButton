//   push_button.js: Logic code of PushButton app  
//
//   Copyright 2015 Nathan Robert Yee
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

'use strict';

// CanvasRenderingContext2D -> Number -> Number -> Number -> void
//
// canvas:  a CanvasRenderingContext2D object
// r:       red value of button
// g:       green value of button
// b:       blue value of button
function createButton(canvas, r, g, b) {
  // check if canvas.getContext is successful
  if (canvas !== undefined && r !== undefined && g !== undefined
                           && b !== undefined && canvas.getContext) {
    // draw button on canvas
    var button = canvas.getContext('2d');
    button.beginPath();
    button.fillStyle = 'rgb(' + r.toString() + ', ' + g.toString() + ', '
                                                    + b.toString() + ')';
    button.arc(40, 35, 33, 0, Math.PI*2);
    button.moveTo(0, 0);
    button.fill();
    button.closePath();
    button.stroke();
    // give hit region to button (if supported)
    try {
      button.addHitRegion({id: 'button'});
    } catch (TypeError) {
      alert('Interactivity is unavailable. If you are running Chrome, set ' + 
      'the ExperimentalCanvasFeatures flag to true. If you are running ' + 
      'Firefox, type about:config in the address bar and set ' + 
      'canvas.hitregions.enabled to true.');
    }
  }
}

// CanvasRenderingContext2D -> String -> void
//
// canvas:  a CanvasRenderingContext2D object
// status:  determine how to update button view state ['up', 'down']
function updateButton(canvas, status) {
  if (canvas !== undefined && status !== undefined) {
    if (status === 'down') {      
      var button = canvas.getContext('2d');
      createButton(canvas, 150, 0, 0);
    } else if (status === 'up') {
      var button = canvas.getContext('2d');
      createButton(canvas, 200, 0, 0);
    }
  }
}

// void
function main() {
  // get rendering context and its associated functions
  var pushButtonCanvas = document.getElementById('push_button_canvas');
  // create push button
  createButton(pushButtonCanvas, 200, 0, 0);
  
  // add mouse/touch interactivity
  pushButtonCanvas.addEventListener("mousedown", function(event) {
    if (event.region) {
      updateButton(pushButtonCanvas, 'down');
    }
  });
  
  // add mouse/touch interactivity
  pushButtonCanvas.addEventListener("mouseup", function(event) {
    if (event.region) {
      updateButton(pushButtonCanvas, 'up');
    }
  });
}
