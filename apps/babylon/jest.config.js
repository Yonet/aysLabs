module.exports = {
  name: 'babylon',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/babylon',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
