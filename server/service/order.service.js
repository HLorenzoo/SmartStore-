const Sib = require("sib-api-v3-sdk");

const client = Sib.ApiClient.instance;

const apiKey = client.authentications["api-key"];

apiKey.apiKey =
  "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";

const tranEmailApi = new Sib.TransactionalEmailsApi();

const sender = {
  email: "smartstoreteam6b@gmail.com",
};

const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Orders = require("../models/Orders");

class OrderService {
  static async createOrder(id) {
    try {
      const carrito = await User.findById(id, { carrito: 1, _id: 0 });
      const nombre = await User.findById(id, { username: 1, _id: 0 });
      const direccion = await User.findById(id, { direccion: 1, _id: 0 });
      const email = await User.findById(id, { email: 1, _id: 0 });
      const carritoVaciado = await User.findByIdAndUpdate(
        id,
        {
          $set: {
            carrito: [],
          },
          $push: { ordenes: carrito.carrito },
        },
        { new: true }
      );
      const order = await Orders.create({
        username: nombre.username,
        products: carrito,
      });

      tranEmailApi
        .sendTransacEmail({
          sender,
          to: [email],
          subject: "Orden confirmada perroooooooo",
          textContent: "Gracias por confiar en SmartStore {{params.name}} !!.",
          htmlContent:
            "<h2>Gracias por confiar en SmartStore  {{params.name}} !! </h2> <h4>Tus productos estan siendo enviados a la direccion : {{params.direccion}}</h4>",
          params: {
            name: nombre.username,
            direccion: direccion.direccion,
          },
        })
        .then(() => console.log("Mensaje enviado :P"))
        .catch((error) => console.log(error.message));
      console.log(email);
      return carritoVaciado;
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderService;
