$(function () {
  var apiUrl = "https://api.github.com";
  var getRecipes = function (cb) {
    $.ajax({
      dataType: "json",
      url: apiUrl + "/users/harp-recipes/repos",
      success: function (data, status) {
        cb(null, data);
      },
      error: function (xhr, status, message) {
        cb(message, null);
      }
    });
  }

  var getRecipeMeta = function (name, cb) {
    $.ajax({
      dataType: "json",
      url: apiUrl + "/repos/harp-recipes/" + name + "/contents/_harp.json",
      headers: {
        "Accept": "application/vnd.github.VERSION.raw",
      },
      success: function (data, status) {
        cb(null, data);
      },
      error: function (xhr, status, message) {
        cb(message, null);
      }
    });
  }

  var getRecipeContent = function (name, cb) {
    $.ajax({
      url: apiUrl + "/repos/harp-recipes/" + name + "/contents/README.md",
      headers: {
        "Accept": "application/vnd.github.raw",
      },
      success: function (data, status) {
        cb(null, marked(data));
      },
      error: function (xhr, status, message) {
        console.log("error: ", arguments);
        cb(message, null);
      }
    });
  }
  
  var getRecipe = function (name, cb) {
    $.ajax({
      dataType: "json",
      url: apiUrl + "/repos/harp-recipes/" + name + "",
      headers: {
        "Accept": "application/vnd.github.VERSION.raw",
      },
      success: function (data, status) {
        cb(null, data);
      },
      error: function (xhr, status, message) {
        cb(message, null);
      }
    });
  }

  var getRecipeNameFromPath = function () {
    return window.location.pathname.replace("/recipes/", "");
  }
  
  if ($("#recipes").length > 0) {
    getRecipes(function (err, recipes) {
      var recEl = $("#recipes");
      if (!err) {
        if (recipes.length > 0) {
          for (var i in recipes) {
            var rec = recipes[i];
            recEl.append("<li><a href='/recipes/" + rec.name + "'>" + rec.description + "</a></li>")
          }
        } else {
          // TODO: Show message
        }
      }
    });
  }

  if ($("#recipe").length > 0) {
    var recipeName = getRecipeNameFromPath();
    getRecipe(recipeName, function (err, recipe) {
      if (!err) {
        $("#recipe").find(".recipe-loading").remove();
        console.log(recipe);
        $("#recipe").find(".recipe-title").html(recipe.description);
        getRecipeContent(recipeName, function (err, content) {
          $("#recipe").find(".recipe-content").html(content);
        });
      } else {
        // TODO: Handle error
      }
    });
  }
});