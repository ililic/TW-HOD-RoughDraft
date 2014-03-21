// http://stackoverflow.com/questions/20318822/how-to-create-a-stopwatch-using-javascript
var ready;
ready = function() {
var Stopwatch = function(elem, options) {

  var timer       = createTimer(),
      offset,
      clock,
      interval;

  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements     
  elem.appendChild(timer);

  // initialize
  reset();

  // private functions
  function createTimer() {
    return document.createElement("span");
  }

  function createButton(action, handler) {
    var a = document.createElement("a");
    a.href = "#" + action;
    a.innerHTML = action;
    a.addEventListener("click", function(event) {
      handler();
      event.preventDefault();
    });
    return a;
  }

  function start() {
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render();
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
    timer.innerHTML = clock/1000; 
  }

  function delta() {
    var now = Date.now(),
        d   = now - offset;

    offset = now;
    return d;
  }

  // public API
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};


  $('#my-link').click(function (event) {
    var a = document.getElementById("basic");
    aTimer = new Stopwatch(a);
    aTimer.start();
    $("#basic").append("<p>Please wait...fetching all your data...synchronously...so your users can't do anything until everything is ready...</p>")
  });

};
$(document).ready(ready);
$(document).on('page:load', ready);