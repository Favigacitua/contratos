import { response } from "express";
import { request } from "http";

// get viajes
response = {
  type: "object",
  properties: {
    viajes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          nombre: {
            type: "string",
          },
          descripcion: {
            type: "string",
          },
          precio: {
            type: "number",
          },
          imagen: {
            type: "string",
            description: "URL de la imagen del viaje",
          },
        },
        required: ["id", "nombre", "descripcion", "precio", "imagen"],
      },
    },
  },
  required: ["viajes"],
};

// get viaje
response = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    nombre: {
      type: "string",
    },
    descripcion: {
      type: "string",
    },
    precio: {
      type: "number",
    },
    imagen: {
      type: "string",
      description: "URL de la imagen del viaje",
    },
  },
  required: ["id", "nombre", "descripcion", "precio", "imagen"],
};

// get favoritos
header = {
  type: "object",
  properties: {
    Authorization: {
      type: "string",
    },
  },
  required: ["Authorization"],
};
response = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        id: { type: "string" },
        nombre: { type: "string" },
        email: { type: "string" },
      },
      required: ["id", "nombre", "email"],
    },
    viajes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          nombre: { type: "string" },
          descripcion: { type: "string" },
          precio: { type: "number" },
          imagen: {
            type: "string",
            description: "URL de la imagen del viaje",
          },
        },
        required: ["id", "nombre", "descripcion", "precio", "imagen"],
      },
    },
  },
  required: ["user", "viajes"],
};

// get mis viajes
header = {
  type: "object",
  properties: {
    Authorization: {
      type: "string",
    },
  },
  required: ["Authorization"],
};

response = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        id: { type: "string" },
        nombre: { type: "string" },
        email: { type: "string" },
      },
      required: ["id", "nombre", "email"],
    },
    viajes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          nombre: { type: "string" },
          precio: { type: "number" },
          imagen: {
            type: "string",
            description: "URL de la imagen del viaje",
          },
        },
        required: ["id", "nombre", "precio", "imagen"],
      },
    },
  },
  required: ["user", "viajes"],
};

// post login
request = payload = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["email", "password"],
};

header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
    "Content-Type": { type: "string" },
  },
  required: ["Authorization", "Content-Type"],
};

response = {
  type: "object",
  properties: {
    token: { type: "string" },
    user: {
      type: "object",
      properties: {
        id: { type: "string" },
        nombre: { type: "string" },
        email: { type: "string" },
      },
      required: ["id", "nombre", "email"],
    },
  },
  required: ["token", "user"],
};

// post register
request = payload = {
  type: "object",
  properties: {
    email: { type: "string" },
    nombre: { type: "string" },
    password: { type: "string" },
    "repetir password": { type: "string" },
  },
  required: ["email", "nombre", "password", "repetir password"],
};

header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
    "Content-Type": { type: "string" },
  },
  required: ["Authorization", "Content-Type"],
};

response = {
  type: "object",
  properties: {
    token: { type: "string" },
    user: {
      type: "object",
      properties: {
        id: { type: "string" },
        nombre: { type: "string" },
        email: { type: "string" },
      },
      required: ["id", "nombre", "email"],
    },
  },
  required: ["token", "user"],
};

// post favoritos
request = payload = {
  type: "object",
  properties: {
    userId: { type: "string" },
    productId: { type: "string" },
  },
  required: ["userId", "productId"],
};

header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
    "Content-Type": { type: "string" },
  },
  required: ["Authorization", "Content-Type"],
};

response = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  required: ["message"],
};

// delete favoritos
request = payload = {
  type: "object",
  properties: {
    userId: { type: "string" },
    productId: { type: "string" },
  },
  required: ["userId", "productId"],
};

header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
    "Content-Type": { type: "string" },
  },
  required: ["Authorization", "Content-Type"],
};

response = {
  type: "object",
  properties: {
    message: { type: "string" },
    favoritos: {
      type: "array",
      items: {
        type: "object",
        properties: {
          productId: { type: "string" },
          nombre: { type: "string" },
          descripcion: { type: "string" },
          precio: { type: "number" },
          imagen: {
            type: "string",
            description: "URL de la imagen del producto",
          },
        },
        required: ["productId", "nombre", "descripcion", "precio", "imagen"],
      },
    },
  },
  required: ["message", "favoritos"],
};

// Put datos personales
request = payload = {
  type: "object",
  properties: {
    nombre: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["nombre", "email", "password"],
};

header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
    "Content-Type": { type: "string" },
  },
  required: ["Authorization", "Content-Type"],
};

response = {
  type: "object",
  properties: {
    message: { type: "string" },
    user: {
      type: "object",
      properties: {
        id: { type: "string" },
        nombre: { type: "string" },
        email: { type: "string" },
      },
      required: ["id", "nombre", "email"],
    },
  },
  required: ["message", "user"],
};
