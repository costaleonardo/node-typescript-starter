"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const bluebird_1 = __importDefault(require("bluebird"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const MongoStore = connect_mongo_1.default(express_session_1.default);
// Controllers
// API keys and Passport config
// Init Express app
const app = express_1.default();
// Connect to Mongo
// const mongoUrl = MONGODB_URI;
mongoose_1.default.Promise = bluebird_1.default;
// mongoose
//   .connect(mongoUrl, { useNewUrlParser: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.log(err));
// Express config
app.set('port', process.env.PORT || 3000);
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Test route
app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json({ msg: 'API running.' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
}));
exports.default = app;
//# sourceMappingURL=app.js.map