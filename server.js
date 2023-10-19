const http = require('http');
const app = require('./app');
const sequelize = require('./src/config/database');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

sequelize.sync().then(() => console.log('Database connected successfully!!!'));

server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});