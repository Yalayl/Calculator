class Notifier {
  usersNotified;
  constructor() {
    this.usersNotified = [];
  }

  notify(user, message) {
    this.usersNotified.push({
      user,
      message,
    });
  }
}

module.exports = Notifier;
