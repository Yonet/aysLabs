module.exports = {
  name: 'libs-ui-babylon',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-babylon',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
