(function(){
  /**
   * Populate class dropdown menu
   */
   var template = document.querySelector('.template');

  //find out what page we're on
  var className = window.location.search.split('=')[1];
  if(typeof className === 'undefined') className = 'all';
  //todo(rohan) in routing  always redirect to have ?who=Class at the end so this never fails

  var chosenClass = {};
  for(var i = 0; i < classesInfo.length; ++i){
    var classElement = template.cloneNode(true); //clone the template
    classElement.style.display = 'block'; //set the clone to be displayed
    classElement.classList.remove('template'); //remove template class
    classElement.childNodes[0].innerHTML = classesInfo[i].className; //add classname to the text
    classElement.childNodes[0].href = '/brothers?who='+classesInfo[i].className; //add class to the end of the href
    //highlight if we're on brothers
    if(classesInfo[i].className === className){
      classElement.classList.add('selected');
      chosenClass = classesInfo[i];
    }
  }

  
  /**
   * Main Container HTML
   */
  var mainContainer = document.querySelector('#main');
  //all
  if(className === 'all'){
    //card html string
    var cardHTML ='';
    cardHTML += '<div class="card">';
    cardHTML += '<div class="card-image">';
    cardHTML += '<img src="" width="100%">';
    cardHTML += '<span class="card-title grey-text text-darken-3"></span>';
    cardHTML += '</div>';
    cardHTML += '<div class="card-content">';
    cardHTML += '<p><b></b></p>';
    cardHTML += '</div>';
    cardHTML += '</div>';

    
    /**
     * Table of Contents
     */
    mainContainer.innerHTML += '<br><div class="divider"></div><br>';
    mainContainer.innerHTML += '<div class="classSection"></div>';

    var section = mainContainer.querySelector('.classSection');
    section.innerHTML += '<h4 id="allClass" class="blue-text text-lighten-2">Classes</h4>';

    for(var i = 0; i < classesInfo.length; ++i){
      var classCard = '';
      classCard += '<div id="' + classesInfo[i]['className'] + '" class="row">';
      classCard += '<div class="col s12 m9 l10">';
      classCard += '<div class="card">';
      classCard += '<div class="card-image">';
      classCard += '<img class="materialboxed" src="/media/class_imgs/' + classesInfo[i]["numericalClassNum"] + '.jpg" width="100%">';
      classCard += '</div>';
      classCard += '<div class="card-content">';
      classCard += '<p><a href="/brothers?who=' + classesInfo[i]['className'] + '"><b>' + classesInfo[i]['className'] + ' Class</b></a></p>';
      classCard += '</div>';
      classCard += '</div>';
      classCard += '</div>';
      section.innerHTML += classCard;
    }

    var founderRow = section.querySelector('#Founder');
    // /**
    //  * table of contents
    //  */

    var tableOfContentsHTML = '';
    tableOfContentsHTML += '<div class="col hide-on-small-only m3 l2">';
    tableOfContentsHTML += '<div class="pin-top" style="top: 0px;">'
    tableOfContentsHTML += '<div style="height: 1px;">'
    tableOfContentsHTML += '<ul class="section table-of-contents">'
    tableOfContentsHTML += '<li><a href="#eboard" class>E-Board</a></li>';
    for(var i = 0; i < classesInfo.length; ++i) {
      tableOfContentsHTML += '<li><a href="#' + classesInfo[i]['className'] + '" class="">' + classesInfo[i]['className'] + ' Class</a></li>';
    }
    tableOfContentsHTML += '</ul></div></div></div>';
    founderRow.innerHTML += tableOfContentsHTML;
  }
  //specific class
  else{
    /**
     * Banner HTML
     */
    bannerHTML += '<h1 class="header center white-text text-lighten-2">' + chosenClass['className'] + ' Class </h1>';
    bannerHTML += '<h5 class="header center col s12 light">Crossed ' + chosenClass['crossSemester'] + ' \'' + chosenClass['crossYear'] + '</h5>';
    bannerImageHTML = '<img alt="Unsplashed background img 1" src="/media/class_imgs/' + chosenClass['numericalClassNum'] + '.jpg" style="display: block; transform: translate3d(100%, 357px, 0px);">';

    /**
     * Brother cards
     */
    //make rows
    var cards = [];
    for(var i = chosenClass.classNums[0]; i < chosenClass.classNums[1]; ++i){
      var brother = brothersInfo[i-1];
      
      //create card HTML
      var cardHTML = '';
      cardHTML += '<div class="col s12 m6">';
      cardHTML += '<div class="card">';
      cardHTML += '<div class="card-image waves-effect waves-block waves-light">'
      cardHTML += '<img class="activator" src="/media/brother_imgs/' + i + '.jpg" width="100%">';
      cardHTML += '</div>';
      cardHTML += '<div class="card-content">';
      cardHTML += '<span class="card-title activator grey-text text-darken-4">';
      cardHTML += '#' + i + ' ' + brother['firstName'] + ' ' + brother['lastName'];
      cardHTML += '<i class="material-icons right">more_vert</i>';
      cardHTML += '</span>';
      cardHTML += '<p>' + brother['status'] + '</p>';
      cardHTML += '</div>';
      cardHTML += '<div class="card-reveal">';
      cardHTML += '<span class="card-title grey-text text-darken-4">';
      cardHTML += '#' + i + ' ' + brother['firstName'] + ' ' + brother['lastName'];
      cardHTML += '<i class="material-icons right">close</i>';
      cardHTML += '</span>';
      cardHTML += '<p>';
      cardHTML += brother['status'];
      cardHTML += '<br><br>Major: ' + brother['major'];
      cardHTML += '<br><br>Positions Held: ';


      positionsHeld = brother['positionsHeld'];
      for( l = 0; l < positionsHeld.length; l++ ) {
          cardHTML += positionsHeld[l];
          if( l + 1 != positionsHeld.length ) {
              cardHTML += ', ';
          }
      }              
      cardHTML += '</p></div></div></div>';
      cards.push(cardHTML);
    }

    var rows = [];
    for(var i = 0; i < cards.length; ++i){
      //ever 2 cards, make a new row
      if(i%2 === 0){
        var row = document.createElement('div');
        row.classList.add('row');
        rows.push(row);
      }
      //add card to last row
      rows[rows.length - 1].innerHTML += cards[i];
    }

    for(var i = 0; i < rows.length; ++i) main.appendChild(rows[i]);
  }
})();


//todo(rohan) fix this...
//Jquery & Materialize Stuff
(function($){
  $(function(){

    // todo(rohan) fix this timeout thing. Also doesnt need to run when not on all brothers page
    // Floating-Fixed table of contents for brothers page
    setTimeout(function() {
     $('.table-of-contents').pushpin({top: $('#Founder').offset().top});
    },100);
      
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.scrollspy').scrollSpy();
      
  }); // end of document ready
})(jQuery); // end of jQuery name space
