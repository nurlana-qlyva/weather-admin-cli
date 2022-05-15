var UserSearch = function () {
  this.listOfUsers = [];
  this.addUser = function(name, location, date) {
    this.listOfUsers.push(new User(name, location, date));
  };
};


var User = function(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
};

module.exports = UserSearch;