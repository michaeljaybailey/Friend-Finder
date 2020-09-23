
var friends = require("../data/friends");


module.exports = function(app) {
 

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  

  app.post("/api/friends", function(req, res) {
    
    var bestMatch = {
      name: "",
      friendDifference: Infinity
    };

    
    var userData = req.body;
    var userScores = userData.scores;

   
    var Difference;

   
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      Difference = 0;

      console.log(currentFriend.name);

      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        
        Difference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

     
      if (Difference <= bestMatch.friendDifference) {
        
        bestMatch.name = currentFriend.name;
        bestMatch.friendDifference = totalDifference;
      }
    }

    
    friends.push(userData);

   
    res.json(bestMatch);
  });
};
