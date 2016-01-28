// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },
  events {
    'ended': function() {
      this.playFirst();
    }
  }
  playFirst: function() { 
      this.at(0).play();
       
    }

});