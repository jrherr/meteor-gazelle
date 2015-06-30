Schemas.personalSettings = new SimpleSchema({
  avatarUrl: {
    type: String,
    label: 'Avatar URL',
    optional: true
  },

  lastFmUsername: {
    type: String,
    label: 'Last.fm username',
    optional: true
  },

  profileTitle1: {
    type: String,
    label: 'Profile title 1',
    optional: true
  },

  profileInfo1: {
    type: String,
    label: 'Profile info 1',
    autoform: {
      rows: 5
    }
  }
});

Schemas.paranoiaSettings = new SimpleSchema({
  recentActivity: {
    type: Object,
    label: 'Recent activity',
    optional: true
  },
  'recentActivity.lastSeen': {type: Boolean, label: 'Last seen', defaultValue: true},

  donations: {
    type: Object,
    label: 'Donations',
    optional: true
  },
  'donations.donorStats': {type: Boolean, label: 'Show donor stats', defaultValue: true},
  'donations.donorHeart': {type: Boolean, label: 'Show donor heart', defaultValue: true},

  statistics: {
    type: Object,
    label: 'Statistics',
    optional: true
  },
  'statistics.uploaded': {type: Boolean, label: 'Uploaded', defaultValue: true},
  'statistics.downloaded': {type: Boolean, label: 'Downloaded', defaultValue: true},
  'statistics.ratio': {type: Boolean, label: 'Ratio', defaultValue: true},

  torrentComments: {
    type: Object,
    label: 'Comments (torrents)',
    optional: true
  },
  'comments.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'comments.showList': {type: Boolean, label: 'Show list'},

  collagesStarted: {
    type: Object,
    label: 'Collages (started)',
    optional: true
  },
  'collagesStarted.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'collagesStarted.showList': {type: Boolean, label: 'Show list'},

  collagesContributed: {
    type: Object,
    label: 'Collages (contributed to)',
    optional: true
  },
  'collagesContributed.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'collagesContributed.showList': {type: Boolean, label: 'Show list'},

  requestsFilled: {
    type: Object,
    label: 'Requests (filled)',
    optional: true
  },
  'requestsFilled.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'requestsFilled.showBounty': {type: Boolean, label: 'Show bounty', defaultValue: true},
  'requestsFilled.showList': {type: Boolean, label: 'Show list'},

  requestsVotedFor: {
    type: Object,
    label: 'Requests (voted for)',
    optional: true
  },
  'requestsVotedFor.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'requestsVotedFor.showBounty': {type: Boolean, label: 'Show bounty', defaultValue: true},
  'requestsVotedFor.showList': {type: Boolean, label: 'Show list'},

  uploadedTorrents: {
    type: Object,
    label: 'Uploaded torrents',
    optional: true
  },
  'uploadedTorrents.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'uploadedTorrents.showList': {type: Boolean, label: 'Show list'},

  uploadedTorrentsUniqueGroups: {
    type: Object,
    label: 'Uploaded torrents (unique groups)',
    optional: true
  },
  'uploadedTorrentsUniqueGroups.showCount': {
    type: Boolean,
    label: 'Show count',
    defaultValue: true
  },

  uploadedTorrentsPerfectFlacs: {
    type: Object,
    label: 'Uploaded torrents ("perfect" FLACs)',
    optional: true
  },
  'uploadedTorrentsPerfectFlacs.showCount': {
    type: Boolean,
    label: 'Show count',
    defaultValue: true
  },
  'uploadedTorrentsPerfectFlacs.showList': {type: Boolean, label: 'Show list'},

  torrentsSeeding: {
    type: Object,
    label: 'Torrents (seeding)',
    optional: true
  },
  'torrentsSeeding.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'torrentsSeeding.showList': {type: Boolean, label: 'Show list'},

  torrentsLeeching: {
    type: Object,
    label: 'Torrents (leeching)',
    optional: true
  },
  'torrentsLeeching.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'torrentsLeeching.showList': {type: Boolean, label: 'Show list'},

  torrentsSnatches: {
    type: Object,
    label: 'Torrents (snatched)',
    optional: true
  },
  'torrentsSnatches.showCount': {type: Boolean, label: 'Show count', defaultValue: true},
  'torrentsSnatches.showList': {type: Boolean, label: 'Show list'},

  torrentsUploadSubscriptions: {
    type: Object,
    label: 'Torrents (upload subscriptions)',
    optional: true
  },
  'torrentsUploadSubscriptions.showCount': {
    type: Boolean,
    label: 'Allow torrent upload subscriptions',
    defaultValue: true
  },

  invitees: {
    type: Object,
    label: 'Invitees',
    optional: true
  },
  'invitees.showCount': {type: Boolean, label: 'Show count', defaultValue: true},

  artistsAdded: {
    type: Object,
    label: 'Artists added',
    optional: true
  },
  'artistsAdded.showCount': {type: Boolean, label: 'Show count', defaultValue: true},

});

Schemas.notificationSettings = new SimpleSchema({
  automaticThreadSubscription: {
    type: Boolean,
    label: 'Automatically subscribe to threads you post in'
  },

  unseededTorrentAlerts: {
    type: Boolean,
    label: 'Enable unseeded torrent alerts'
  },

  pushNotifications: {
    type: String,
    allowedValues: [
      'Disable',
      'Notify My Android',
      'Prowl',
      'Super Toasty',
      'Pushover',
      'PushBullet'
    ],
    optional: false,
    label: 'Push notifications'
  },

  newsAnnouncements: {
    type: Object,
    label: 'News announcements',
    optional: true
  },
  'newsAnnouncements.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},
  'newsAnnouncements.push': {type: Boolean, label: 'Push'},

  blogAnnouncements: {
    type: Object,
    label: 'Blog announcements',
    optional: true
  },
  'blogAnnouncements.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},
  'blogAnnouncements.push': {type: Boolean, label: 'Push'},

  inboxMessages: {
    type: Object,
    label: 'Inbox message',
    optional: true
  },
  'inboxMessages.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},
  'inboxMessages.traditional': {type: Boolean, label: 'Traditional'},
  'inboxMessages.push': {type: Boolean, label: 'Push'},

  staffMessages: {
    type: Object,
    label: 'Staff messages',
    optional: true
  },
  'staffMessages.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},

  threadSubscriptions: {
    type: Object,
    label: 'Thread subscriptions',
    optional: true
  },
  'threadSubscriptions.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},

  quoteNotifications: {
    type: Object,
    label: 'Quote notifications',
    optional: true
  },
  'quoteNotifications.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},
  'quoteNotifications.push': {type: Boolean, label: 'Push'},

  torrentNotifications: {
    type: Object,
    label: 'Torrent notifications',
    optional: true
  },
  'torrentNotifications.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},
  'torrentNotifications.push': {type: Boolean, label: 'Push'},

  collageSubscriptions: {
    type: Object,
    label: 'Collage subscriptions',
    optional: true
  },
  'collageSubscriptions.popup': {type: Boolean, label: 'Pop-up', defaultValue: true},
  'collageSubscriptions.push': {type: Boolean, label: 'Push'}
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
  },
  notificationSettings: {
    type: Schemas.notificationSettings,
    label: 'Notification settings'
  },
  paranoiaSettings: {
    type: Schemas.paranoiaSettings,
    label: 'Paranoia settings'
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
