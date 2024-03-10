$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system"),
      process = $("#process"),
      product = $("#product");

  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  var muted = false;
  var audio = new Audio("./music/sun.mp3");

  var processShown = false;
  var productShown = false;
  process.hide();
  product.hide();

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    console.log(e);
    console.log("ref + " + ref);

    audio.pause();
    var text = "";
    switch (ref) {
      case "sun":
        text = "This data was gathered from the past 2 years of reading science fiction novels. I envisioned each novel from their planets, plotting planets by the size of the novel"
        + " and the speed of their revolution by how fast I finished the book. I use StoryGraph, which gives me the date I finished the book, and from my search history, I can also"
        + " determine when I started. The songs were chosen from YouTube and provide the feeling I have when I look back onto that novel. ";
        audio = new Audio("./music/sun.mp3");
        break;
      case "mercury":
        text = "Eyes of the Void by Adrian Tchaikovsky: An intensely hostile, radioactive world. Rapid growing glass jungles scar its surface. It cannot support life."
        audio = new Audio("./music/mercury.mp3");
        break;
      case "venus":
        text = "Hyperion by Dan Simmons: Dominated by the Sea of Grass and treacherous Tesla trees, this planet is home to the physics-defying Time Tombs, and as of late, a slew of murders."
        audio = new Audio("./music/venus.mp3");
        break;
      case "earth": 
        text = "The Dispossessed by Ursula K. Le Guin: Urras, the Earth-like capitalist society, sits opposite its desert moon Anarres. Yet, the people of Anarres have want for nothing,"
          + " and their hands stay empty.";
          audio = new Audio("./music/earth.mp3");
        break;
      case "mars":
        text = "Lord of Light by Roger Zelazny: The first settlers of this planet adopted positions as Gods, banishing a false Buddha to the Golden Cloud above the planet."
        audio = new Audio("./music/mars.mp3");
        break;
      case "jupiter":
        text = "Foundation by Isaac Asimov: A predominantly ocean world, this unassuming planet hosts a powerful hand of the Galaxy: Terminus City."
        audio = new Audio("./music/jupiter.mp3");
        break;
      case "saturn":
        text = "Cyteen by C. J. Cherryh: This toxic world serves as the capital of the Union, where humans are cloned, trained, and owned at Reseune."
        audio = new Audio("./music/saturn.mp3");
        break;
      case "uranus":
        text = "Rendezvous with Rama by Arthur C. Clarke: An alien ship of immense size, its interior holds relics of an ancient civilization."
        audio = new Audio("./music/uranus.mp3");
        break;
      case "neptune":
        text = "The Left Hand of Darkness by Ursula K. Le Guin: The planet called Winter is cold and harsh, and its people hold no gender."
        audio = new Audio("./music/neptune.mp3");
        break;
    }

    if (!muted) audio.play();

    $(this).parent().find('p').html(text);
    e.preventDefault();
  });

  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".show-process").click(function() {
    body.toggleClass("process-large process-close");
    if (!processShown) {
      process.show(500);
      processShown = !processShown;
    } else {
      process.hide(500);
      processShown = !processShown;
    }
  });

  $(".show-product").click(function() {
    body.toggleClass("product-large product-close");
    if (!productShown) {
      product.show(500);
      productShown = !productShown;
    } else {
      product.hide(500);
      productShown = !productShown;
    }
  });

  $('.speaker').click(function(e) {
    e.preventDefault();
  
    $(this).toggleClass('mute');
    muted = !muted;
    if (muted) audio.pause();
    else audio.play();
    console.log('muted: ' + muted);
  });

  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

});