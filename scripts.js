// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    updateNavLogo();
    updateArticles();
    updateRecipes();
    // function4()...
    updateFooter();
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */


var updateDocumentTitle = function() {
  // Some code...
  document.title = data.documentTitle;
  console.log(data);
};

var updateNavLogo = function(){
  $(".navLogo").each(function(){
    this.innerHTML=data.firstName +" "+ data.lastName;
  });
}

var updateArticles = function(){
  $(".article-titre").each(function(index){
    this.innerHTML= data.articles[index].title;
  }); 

  $(".article-sous-titre").each(function(index){
    this.innerHTML= data.articles[index].subtitle;
  });
  
  $(".article-content").each(function(index){
    this.innerHTML= data.articles[index].content;
  });
  
  //image
  };

var updateRecipes = function(){
  $(".recipe-price").each(function(index){
    this.innerHTML= data.recipes[index].price.toFixed(2) + "$";
  }); 

  $(".recipe-description").each(function(index){
    this.innerHTML= data.recipes[index].description;
  });

  //image...
};
  
var updateFooter = function(){
  $(".footer-rights p").each(function(){
    this.innerHTML+= " " + data.firstName + " " + data.lastName + " | " + data.email;
  });
};

