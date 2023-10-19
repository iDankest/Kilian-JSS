"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectdb_1 = __importDefault(require("./config/connectdb"));
//Routers
const CursoRoutes_1 = __importDefault(require("./routes/CursoRoutes"));
const MensajeRoutes_1 = __importDefault(require("./routes/MensajeRoutes"));
const TareaRoutes_1 = __importDefault(require("./routes/TareaRoutes"));
const UsuarioRoutes_1 = __importDefault(require("./routes/UsuarioRoutes"));
const AdminRoutes_1 = __importDefault(require("./routes/AdminRoutes"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(CursoRoutes_1.default);
app.use(MensajeRoutes_1.default);
app.use(TareaRoutes_1.default);
app.use(UsuarioRoutes_1.default);
app.use(AdminRoutes_1.default);
app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));
try {
    connectdb_1.default.authenticate();
    console.log('La conexión con la Base de Datos es correcta');
}
catch (error) {
    console.error('No se puede conectar con la base de datos', error);
}
