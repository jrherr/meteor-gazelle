if (Meteor.isServer) {
  Accounts.onCreateUser(function (options, user) {
    User.insert({
      _id: user._id,
      username: user.username,
      enabled: true
    });
    return user;
  });
}

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/',
  template: 'login',
  redirect: '/home'
});

AccountsTemplates.addField({
  _id: 'username',
  type: 'text',
  required: true,
  func: function (value) {
    var self = this;
    if (Meteor.isClient) {
      Meteor.call('userCanLogin', value, function (error, result) {
        if (!result) {
          self.setSuccess();
        } else {
          self.setError(error);
        }
        self.setValidating(false);
      });
    } else {
      return Meteor.call('userCanLogin', value);
    }
  }
});
