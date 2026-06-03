import express from 'express';  
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('categorias', 'root', '', {
    host:'localhost',
    dialect:'mysql',
    logging:false
});

const conectarBD = async() => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Conexión correcta');

    }catch(error){
        console.error('Error de conexión', error);
    }
};
conectarBD();
const app = express();
app.use(express.json());

const Categoria = sequelize.define('Categoria',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING(100),
        allowNull:false
    },
    descripcion:{
        type: DataTypes.STRING(255)
    }
},{
    tableName:'categorias',
    timestamps:true
});

const Producto = sequelize.define('Producto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING(100),
        allowNull:false
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    categoriaId:{
        type: DataTypes.INTEGER
    }

},{
    tableName:'productos',
    timestamps:false
});
Categoria.hasMany(Producto,{
    as: 'productos',
    foreignKey:'categoriaId',
    onDelete:'CASCADE'
});
Producto.belongsTo(Categoria,{
    foreignKey:'categoriaId',
    
    onDelete:'CASCADE'
});

// 1 registrar nueva categoria
app.post('/categorias', async (req, res) => {
  try{
    const {nombre, descripcion} = req.body;
    const result = await Categoria.create({nombre,descripcion});
    res.status(201).json({mensaje:'categoría creada correctamente: ',result});

  }catch(err){
    res.status(500).json({mensaje: 'error en crear categoría: ', err});
  }
});

// 2 devolver todas las categorias
app.get('/categorias', async (req, res) => {
  try{
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);

  }catch(err){
    res.status(500).json({mensaje: 'error encontrando categorias: ' ,err});
  }
});
// 3 obtener categoria por id y sus productos
app.get('/categorias/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const resultado = await Categoria.findByPk(id, {
      include: [{ model: Producto, as: 'productos' }]
    });
    if (!resultado) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.status(200).json(resultado);
  }catch(err){
    res.status(500).json({mensaje: 'error obteniendo categoría: ', err});
  }
});
// 4 actualizar datos de la categoria con id x
app.patch('/categorias/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const categoria = await Categoria.findByPk(id);
    await categoria.update(req.body);
    res.json({ message: 'Categoría actualizada', data: categoria });
  }catch(err){
    res.status(500).json({mensaje: 'error actualizando categoría: ', err});
  }
});

// 5 eliminar categoría y productos
app.delete('/categorias/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const categoria = await Categoria.findByPk(id);
    await categoria.destroy({ force: true, cascade: true }); 
    res.status(200).json({message: 'Categoría y sus productos correspondientes eliminados correctamente'});
  } catch (err) {
    res.status(500).json({mensaje: 'error eliminando categoria: ', err});
  }
});
const puerto = 3000;
app.listen(puerto, ()=>{
    console.log(`Servidor en http://localhost:${puerto}`);
});


/*
// 4 

app.patch('/categorias/:id', async(req,res)=>{

    try{

        const id = req.params.id;

        const {nombre, descripcion} = req.body;

        await Categoria.update(
            {
                nombre,
                descripcion
            },
            {
                where:{id}
            }
        );

        res.status(200).json({
            mensaje:'Categoria actualizada correctamente'
        });

    }catch(error){

        res.status(500).json({
            mensaje:'Error al actualizar categoria',
            error
        });

    }

});

app.delete('/categorias/:id', async(req,res)=>{

    try{

        const id = req.params.id;

        await Categoria.destroy({
            where:{id}
        });

        res.status(200).json({
            mensaje:'Categoria y productos eliminados correctamente'
        });

    }catch(error){

        res.status(500).json({
            mensaje:'Error al eliminar categoria',
            error
        });

    }

});*/