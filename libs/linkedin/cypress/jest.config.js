module.exports = {
  name: 'linkedin-cypress',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/linkedin/cypress',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
