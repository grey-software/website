const fetch = require('node-fetch')
const fs = require('fs')

const repositories = [
  'grey.software',
  'linkedin-focus',
  'twitter-focus',
  'toonin',
  'material-math',
  'sponsorware',
  'futurist.network',
]

const fetchRepoContributors = async (repoName) => {
  const result = await fetch(
    `https://api.github.com/repos/grey-software/${repoName}/contributors`,
  )
  const contributors = await result.json()
  return contributors
    .filter((contributor) => !contributor.login.endsWith('[bot]'))
    .map((contributor) => {
      return {
        username: contributor.login,
        avatar: contributor.avatar_url,
        link: contributor.html_url,
        repos: [{name: repoName, contributions: contributor.contributions}],
      }
    })
}

const constructContributors = async () => {
  const contributors = new Map()

  for (repo of repositories) {
    const repoContributors = await fetchRepoContributors(repo)
    repoContributors.forEach((contributor) => {
      if (!contributors.has(contributor.username)) {
        contributors.set(contributor.username, contributor)
      } else {
        const existingContributor = contributors.get(contributor.username)
        const mergedRepos = contributor.repos.concat(existingContributor.repos)
        contributors.set(contributor.username, {
          ...existingContributor,
          repos: mergedRepos,
        })
      }
    })
  }
  return Object.fromEntries(contributors)
}

const writeContributorsFile = async () => {
  const contributors = await constructContributors()
  console.log(contributors)

  fs.writeFile(
    'content/contributors.json',
    JSON.stringify(contributors),
    'utf8',
    function (err) {
      if (err) {
        console.log('An error occured while writing JSON Object to File.')
        return console.log(err)
      }
    }
  )
}

writeContributorsFile()
