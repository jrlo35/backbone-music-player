// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  //template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
    //<%= playCount %></td>'),

  events: {
    'click': function() {
      //this.model.play();
      this.model.enqueue(); //may need to invoke this outside separately
    },


  },
  

  render: function(){
    console.log(this.model.get('playCount'))
    return this.$el.html(this.model.get('title') + ' ' + this.model.get('artist') + ' ' + this.model.get('playCount'));
      //this.template(this.model.attributes) + 
  }

});
