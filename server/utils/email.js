const Sib = require("sib-api-v3-sdk");

const client = Sib.ApiClient.instance;

const apiKey = client.authentications["api-key"];




/* apiKey.apiKey =
  "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";
 */
const tranEmailApi = new Sib.TransactionalEmailsApi();

const sender = {
  email: "equipo6smartstore@gmail.com",
};

const receivers = [
  {
    email: "geckoestudio@gmail.com",
  },
];

tranEmailApi
  .sendTransacEmail({
    sender,
    to: receivers,
    subject: "Orden confirmada",
    textContent: "jueves, pero a que costo",
  })
  .then(console.log)
  .catch(console.log);