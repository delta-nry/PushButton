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

function createButton(canvas) {
  // check if canvas.getContext is successful
  if (canvas !== undefined && canvas.getContext) {
    // draw button on canvas
    var button = canvas.getContext('2d');
    button.beginPath();
    button.fillStyle = 'rgb(200, 0, 0)';
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

function updateButton(canvas, status) {
  if (canvas !== undefined && status !== undefined) {
    if (status === 'down') {
      // TODO: change color
    } else if (status === 'up') {
      // TODO: change color
    }
  }
}


function main() {
  // get rendering context and its associated functions
  var psCanvas = document.getElementById('push_button_canvas');
  // create push button
  createButton(psCanvas);
  
  // add mouse/touch interactivity
  psCanvas.addEventListener("mousedown", function(event) {
    if (event.region) {
      console.log('button down');
      updateButton(psCanvas, 'down');
    }
  });
  
  // add mouse/touch interactivity
  psCanvas.addEventListener("mouseup", function(event) {
    if (event.region) {
      console.log('button up');
      updateButton(psCanvas, 'up');
    }
  });
}
