// For some reason, graphcool doesn't like ESM syntax for this :/
const nodemailer = require('nodemailer')

/*
  This file is not commited to the git repo for security reasons, 
  as it contains details such as email username and password. It
  also contains project specific details such as sender etc.

  It is in the following format:

  export default {
    host: 'SMTP hostname',
    user: 'Account that is being used to send the mail',
    pass: 'Password of the sending account',
    to: 'The recipient of the automated messages'
  }
*/

import config from './mailConfig'

export default event => {
  const { data } = event

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: 465,
    secure: true,
    auth: {
      user: config.user,
      pass: config.pass
    },
    logger: false,
    debug: false
  })

  const message = {
    from: config.user,
    to: config.to,
    subject: `You have a new message from '${data.name}' <${data.email}>`,
    text: `
        From: '${data.email}'

        Name: '${data.name}'

        Subject: '${data.subject}'

        Message: '${data.message}'
      `
  }

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(`Error: ${error.message}`)
    }
  })

  return { data }
}
