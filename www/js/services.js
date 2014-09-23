angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'David Evans' },
    { id: 1, name: 'Jay Horner' },
    { id: 2, name: 'Vanden Horner' },
    { id: 3, name: 'Siva Kumar' },
	{ id: 4, name: 'Craig Denford' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
