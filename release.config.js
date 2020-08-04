module.exports = {
  "branches": [
    "+([1-9])?(.{+([1-9]),x}).x",
    "master",
    "tech/config-dev-cicd-env",
    "develop",
    "next",
    {
      "name": "alpha",
      "prerelease": true
    },
    {
      "name": "beta",
      "prerelease": true
    }
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/git"
  ]
}