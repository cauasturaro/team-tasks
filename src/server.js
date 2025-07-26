const app = require('./app');
const Student = require('./models/StudentModel');
const { sequelize } = require('./config/database');
const PORT = 8080;

sequelize.sync({ alter: true })
    .then(() => console.log("[TT BACKEND] Tables created successfuly!"))
    .catch(error => console.error("TT", error));

app.listen(PORT, () =>{
    console.log(`[TT BACKEND] Server running on port ${PORT}`);
})