export const messagesPath = 'messages'

export const messagesMethods = ['find', 'get', 'create', 'patch', 'remove']

export const messagesClient = (client) => {
  const connection = client.get('connection')

  client.use(messagesPath, connection.service(messagesPath), {
    methods: messagesMethods
  })
}
