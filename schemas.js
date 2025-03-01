import { response } from "express";
import { request } from "http";

// get usuarios

request = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
  },
  required: ["Authorization"],
};

response = {
  type: "object",
  properties: {
    id: { type: "string" },
    nombre: { type: "string" },
    apellido: { type: "string" },
    email: { type: "string" },
    imagen: {
      type: "string",
      description: "URL de la imagen del usuario",
    },
  },
  required: ["id", "nombre", "apellido", "email", "imagen"],
};

// get viajes
response = {
  type: "object",
  properties: {
    viajes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          destino: { type: "string" },
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
  required: ["viajes"],
};

// get viaje
response = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    destino: {
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
          destino: { type: "string" },
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

// get mis reseñas
header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
  },
  required: ["Authorization"],
};

response = {
  type: "object",
  properties: {
    reseñas: {
      type: "array",
      items: {
        type: "object",
        properties: {
          usuario_id: {
            type: "integer",
            description: "ID único del usuario que hizo la reseña",
          },
          nombre: { type: "string" },
          apellido: { type: "string" },
          destino: { type: "string" },
          valoracion: { type: "number" },
          descripcion: { type: "string" },
        },
        required: [
          "usuario_id",
          "nombre",
          "apellido",
          "destino",
          "valoracion",
          "descripcion",
        ],
      },
    },
  },
  required: ["reseñas"],
};

// get una sola reseña propia en detalle

header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
    "Content-Type": { type: "string", enum: ["application/json"] },
  },
  required: ["Authorization", "Content-Type"],
};

response = {
  type: "object",
  properties: {
    reseña: {
      type: "object",
      properties: {
        id: { type: "string" },
        usuario_id: { type: "integer" },
        nombre: { type: "string" },
        apellido: { type: "string" },
        destino: { type: "string" },
        valoracion: { type: "number" },
        descripcion: { type: "string" },
      },
      required: [
        "id",
        "usuario_id",
        "nombre",
        "apellido",
        "destino",
        "valoracion",
        "descripcion",
      ],
    },
  },
  required: ["reseña"],
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
        apellido: { type: "string" },
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
          destino: { type: "string" },
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
    apellido: { type: "string" },
    password: { type: "string" },
    "repetir password": { type: "string" },
  },
  required: ["email", "nombre", "apellido", "password", "repetir password"],
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
        apellido: { type: "string" },
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
          destino: { type: "string" },
          descripcion: { type: "string" },
          precio: { type: "number" },
          imagen: {
            type: "string",
            description: "URL de la imagen del producto",
          },
        },
        required: ["productId", "destino", "descripcion", "precio", "imagen"],
      },
    },
  },
  required: ["message", "favoritos"],
};

// Put usuarios
request = payload = {
  type: "object",
  properties: {
    nombre: { type: "string" },
    apellido: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
    imagen: {
      type: "string",
      description: "URL de la imagen del producto",
    },
  },
  required: ["nombre", "apellido", "email", "password", "imagen"],
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
        apellido: { type: "string" },
        email: { type: "string" },
        imagen: {
          type: "string",
          description: "URL de la imagen del producto",
        },
      },
      required: ["id", "nombre", "apellido", "email", "imagen"],
    },
  },
  required: ["message", "user"],
};

//post mis reseñas
request = payload = {
  type: "object",
  properties: {
    nombre: { type: "string" },
    destino: { type: "string" },
    valoracion: { type: "number", minimum: 1, maximum: 5 },
    descripcion: { type: "string" },
  },
  required: ["nombre", "destino", "valoracion", "descripcion"],
};

header = {
  type: "object",
  properties: {
    Authorization: { type: "string" },
    "Content-Type": { type: "string", enum: ["application/json"] },
  },
  required: ["Authorization", "Content-Type"],
};

response = {
  type: "object",
  properties: {
    message: { type: "string" },
    reseña: {
      type: "object",
      properties: {
        id: { type: "string" },
        nombre: { type: "string" },
        destino: { type: "string" },
        valoracion: { type: "number" },
        descripcion: { type: "string" },
      },
      required: ["id", "nombre", "destino", "valoracion", "descripcion"],
    },
  },
  required: ["message", "reseñas"],
};

// delete mis reseñas

request = payload = {
  type: "object",
  properties: {
    userId: { type: "string" },
    reviewId: { type: "string" },
  },
  required: ["userId", "reviewId"],
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
    reseñas: {
      type: "array",
      items: {
        type: "object",
        properties: {
          reviewId: { type: "string" },
          nombre: { type: "string" },
          destino: { type: "string" },
          valoracion: { type: "number" },
          descripcion: { type: "string" },
        },
        required: [
          "reviewId",
          "nombre",
          "destino",
          "valoracion",
          "descripcion",
        ],
      },
    },
  },
  required: ["message", "reseñas"],
};
