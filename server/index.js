const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sistema_eleccion_reina',
    port: 3306
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    /* const sqlInsertar = "INSERT INTO reviews (nombrePelicula, reviewPelicula) VALUES ('Inception','Buena Pelicula')"
    db.query(sqlInsertar, (err, result) =>{
        res.send('Hola Dylan');
    }) */
})

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * from reviews"
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result)
    })
})

app.get('/api/getReinas', (req, res) => {
    const sqlSelect = "SELECT * from candidata"
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send(result)
    })
})
app.get('/api/getReinasBarra', (req, res) => {
    const sqlSelect = "SELECT candidata.CAND_NOMBRE1, foto_candidata.FOTO_URL from candidata JOIN foto_candidata WHERE candidata.CANDIDATA_ID = foto_candidata.CANDIDATA_ID"
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send(result)
    })
})




app.get('/api/getLogin', (req, res) => {   
    const sqlSelect = "SELECT * FROM usuario ";
    db.query(sqlSelect, [req.params.USUARIO_USERNAME,req.params.USUARIO_CONTRASENA], (err, result) => {
        res.send(result);
        console.log(result);
    });
  });



app.post('/api/getFotosReinas', (req, res) => {
    const id = req.body.id;
    console.log(id);
    const sqlSelect = "SELECT * from foto_candidata where CANDIDATA_ID = ?;";
    db.query(sqlSelect, id, (err, result) => {
        if (err) 
            console.log(err);

        console.log(result);
        res.send(result)
    })
})




app.post('/api/calificar', (req, res)=>{
    
    const cali = req.body.cali;
    const id = req.body.idReina;
    console.log(cali, id);

    const sqlInsertar = "INSERT INTO calificacion (CANDIDATA_ID,EVENTO_ID,USUARIO_ID,CALIFICACION_NOMBRE,CALIFICACION_PESO,CALIFICACION_VALOR) VALUES (?,1,1,'Trajes',45,?)";
    db.query(sqlInsertar, [id, cali], (err, result)=>{
        console.log(err);
    })
})

app.delete('/api/borrar/:nombrePel', (req, res) =>{
    const nombre = req.params.nombrePel;
    const sqlBorrar = "DELETE FROM reviews WHERE nombrePelicula = ?";
    db.query(sqlBorrar, nombre, (err, result) => {
        if (err) console.log(err);
    });
})

app.put('/api/actualizar', (req, res) =>{
    const nombre = req.body.nombrePelicula;
    const nombreReview = req.body.reviewPelicula;
    console.log("Test",nombre,nombreReview)
    const sqlActualizar = "UPDATE reviews SET reviewPelicula = ? WHERE nombrePelicula = ?";
    db.query(sqlActualizar, [nombreReview, nombre], (err, result) => {
        if (err) console.log(err);
    });
})

app.listen(3001, () => {
    console.log('Corriendo en el Puerto 3001');
})