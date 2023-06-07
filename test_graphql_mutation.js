var author = "author name"
var content = "Content"
var query = `mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}`

var body = JSON.stringify({
    query,
    variables: {
      input: {
        author,
        content,
      },
    },
  })

console.log(body)