const fs = require('fs');

function importar(marca) {
    let path = "";
    switch (marca) {
        case "Hot Toys":
            path = `./datos/figuras1.json`;
            break;
        case "Bandai":
            path = `./datos/figuras2.json`;
            break;
        case "Star Wars":
            path = `./datos/figuras3.json`;
            break;
        default:
            console.log(`La marca ${marca} no es valida`);
            return []
    }
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}



module.exports = importar;