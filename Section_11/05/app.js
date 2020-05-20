const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const Chatroom = function() {
  let users = {}; //List of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

const brad = new User('Brad');
const steve = new User('Steve');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(steve);
chatroom.register(sarah);

brad.send('Hello Steve', steve);
sarah.send('Hello Brad', brad);
steve.send('Hello Everyone');
