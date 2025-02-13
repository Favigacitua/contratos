import express, { response } from "express"


const app = express()
app.use(express.json());


// get viajes

app.get('/viajes', (req, res)=>{

    res.json({
        viajes: []
    })
})


// get viaje
app.get('/viaje/:id', (req, res)=>{

    res.json({
        viaje: {
            id: 12,
            nombre: "tailandia",
            precio: 300.000
        }
    })
})

// get favoritos

app.get('/favoritos', (req, res)=>{
    res.json({
        favoritos: []
    })
})

// get mis reseñas

app.get('/mis-reseñas', (req, res)=>{
    res.json({
        reseñas: []
    })
})

// get reseñas

app.get('/reseñas', (req, res)=>{
    res.json({
        reseñas: []
    })
})

// get mis viajes 

app.get('/mis-viajes', (req, res) => {
    

    res.json({ 

        user: {
            id: "usuarioAutenticado.id",
            nombre: "usuarioAutenticado.nombre",
            email: "usuarioAutenticado.email"
        },
        viajes: [] 
    });

 });

// post login

app.post('/login', (req,res)=>{

    res.json({
        token: "123123123213",
        user:{
            id: "usuario123",
            nombre: "Juan Perez",
            email: "juanperez@example.com"

        }
    })
})

// post register

app.post('/register', (req, res)=>{
    res.json ({
        token: "123123123213",
        user: {
          id: "newUser.id",
          nombre:" newUser.nombre",
          email: "newUser.email"
        }
      })
})


// post favoritos 

app.post('/favoritos', (req, res)=>{
    res.json ({
        message: "añadido con exito"
      })
})

// delete favoritos

app.delete('/favoritos', (req, res)=>{
    res.json ({
        message: "response",
        favoritos: []

      })
})

//Put datos personales

app.put('/usuarios/:id', (req, res) => {
    
    res.json({
        user: {
            id: userId,
            nombre: nombre || "Nombre anterior",
            email: email || "Email anterior"
        }
    });
});

//post mis reseñas 
app.post('/mis-reseñas', (req, res)=>{
    res.json ({
        message: "añadido con exito",
        reseñas: []
      })
})

// delete mis reseñas 

app.delete('/mis-reseñas/:id', (req, res)=>{
    res.json ({
        message: "eliminado con exito",
        reseñas: []

      })
})







app.listen(3000,()=> console.log('Servidor corriendo'))

