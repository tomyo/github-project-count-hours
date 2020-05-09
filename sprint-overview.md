# Clean report fr client of finished sprint.

## Steps
1. Filter issues by sprint (github.com/team/project/milestone/id)
2. Run following script in console:

```js
// Remove counted hours ([stimated][real])
for (a of document.querySelectorAll('a')) {
  if (a.text.indexOf('[') > 0) {
    a.text = a.text.slice(0, a.text.indexOf('['))
  }
}

// Remove avatars of collaborators
for (a of document.querySelectorAll('.avatar .avatar-user')) {
  a.remove()
}

// Remove extra info in table header
document.querySelector('.repository-content .TableObject').remove()

// Remove style for unread issues (blue drop-shadow)
document.querySelectorAll('.Box-row.Box-row--unread').forEach((e)=> {
  e.classList.remove('Box-row--unread')
})

// Remove assignee and issues creators in issue info
document.querySelectorAll('span.opened-by').forEach((e)=> {
  e.innerText = e.innerText.replace(/by\s\w*\s/, '')
})

```
