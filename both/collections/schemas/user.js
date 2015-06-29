Schemas.userWarnings = new SimpleSchema({
  warnedBy: {
    type: Number,
    label: 'The user id which issued this warning',
    optional: true
  },
  warning: {
    type: String,
    label: 'The reason for the warning'
  },
  expireOn: {
    type: Date,
    label: 'The date when this warning should expire'
  },
  createdAt: {
    type: Date,
    label: 'When the warning was created',
    defaultValue: function () {
      return new Date(Math.abs(this.expireOn - new Date()));
    }
  }
});

Schemas.userStats = new SimpleSchema({
  uploaded: {
    type: Number,
    label: 'The number of bytes uploaded',
    defaultValue: 5000000
  },
  downloaded: {
    type: Number,
    label: 'The number of bytes downloaded',
    defaultValue: 0
  }
});

Schemas.userProfile = new SimpleSchema({
  title: {
    type: String,
    label: 'The profile title',
    optional: true
  },
  body: {
    type: String,
    label: 'The profile body',
    optional: true
  }
});

Schemas.communitySettings = new SimpleSchema({
  postPerPage: {
    type: String,
    allowedValues: [
      '25',
      '50',
      '100'
    ],
    optional: false,
    label: 'Posts per page (forums)'
  },

  inboxSorting: {
    type: Boolean,
    label: 'List unread private messages first'
  },

  disableEmoticons: {
    type: Boolean,
    label: 'Disable emoticons'
  },

  disableMatureContent: {
    type: Boolean,
    label: 'Disable mature content (forums, comments, profiles)'
  },

  avatarDisplay: {
    type: String,
    allowedValues: [
      'Show avatars',
      'Disable avatars'
    ],
    optional: false,
    label: 'Avatar display'
  },

  autosaveReplyText: {
    type: Boolean,
    label: 'Reply text auto-saving',
    defaultValue: true
  },

  rippyMessages: {
    type: String,
    allowedValues: [
      'Personalised rippies only',
      'On',
      'Off'
    ],
    optional: false,
    label: 'Rippy messages'
  }
});

Schemas.torrentSettings = new SimpleSchema({
  defaultSearchType: {
    type: String,
    label: 'Default search type',
    allowedValues: ['simple', 'advanced'],
    defaultValue: 'simple'
  },

  torrentGrouping: {
    type: Boolean,
    label: 'Enable torrent grouping',
    defaultValue: true
  },

  torrentGroupingDisplay: {
    type: String,
    label: 'Torrent group display',
    allowedValues: ['open', 'closed'],
    defaultValue: 'open'
  },

  snatchedTorrentIndicator: {
    type: Boolean,
    label: 'Snatched torrents indicator',
    defaultValue: false
  },

  coverArtTorrent: {
    type: Object,
    label: 'Cover art (torrents)',
    optional: true
  },

  "coverArtTorrent.enable": {
    type: Boolean,
    label: 'Enable cover artwork'
  },

  "coverArtTorrent.additional": {
    type: Boolean,
    label: 'Enable additional cover artwork'
  },

  coverArtCollage: {
    type: String,
    allowedValues: [
      '10',
      '25',
      '50',
      '100',
      'All',
      'None'
    ],
    optional: false,
    label: 'Cover art (collages)'
  },

  searchFilterTorrent: {
    type: Object,
    label: 'Torrent search filters',
    optional: true
  },

  'searchFilterTorrent.displayControls': {
    type: Boolean,
    label: 'Display filter controls'
  },

  'searchFilterTorrent.officialTag': {
    type: Boolean,
    label: 'Display official tag filters'
  },

  autocompletion: {
    type: String,
    allowedValues: [
      'Everywhere',
      'Search only',
      'Disabled'
    ],
    optional: false,
    label: "Autocompletion"
  },

  votingLinks: {
    type: Boolean,
    label: 'Disable voting links'
  },

  textFileDownload: {
    type: Boolean,
    label: 'Enable downloading torrent files as text files'
  }
});


Schemas.user = new SimpleSchema({
  username: {
    type: String,
    label: 'The user\'s name',
    unique: true,
    index: true
  },
  enabled: {
    type: Boolean,
    label: 'The user\'s account status'
  },
  warned: {
    type: Boolean,
    label: 'Is the user warned',
    defaultValue: false
  },
  warnings: {
    type: [Schemas.userWarnings],
    label: 'The user\'s warnings',
    optional: true
  },
  stats: {
    type: Schemas.userStats,
    label: 'The user\'s stats'
  },
  customTitle: {
    type: String,
    label: 'The user\'s custom title',
    optional: true
  },
  profile: {
    type: Schemas.profile,
    label: 'The user\'s profile',
    optional: true
  },
  classes: {
    type: [Object],
    label: 'The user\'s classes',
    optional: true
  },
  torrentSettings: {
    type: Schemas.torrentSettings,
    label: 'Torrent settings'
  },
  communitySettings: {
    type: Schemas.communitySettings,
    label: 'Community settings'
  }
});

Schemas.newUser = new SimpleSchema({
  username: {
    type: String,
    label: 'The user\'s name'
  },
  password: {
    type: String,
    label: 'The user\'s password',
    min: 8
  },
  email: {
    type: String,
    label: 'The user\'s email'
  }
});
