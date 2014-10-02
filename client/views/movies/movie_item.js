/**
 * Created by merzoug on 10/2/14.
 */
Template.movieItem.helpers({
    domain: function() {
        console.log("Hello there !")
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});