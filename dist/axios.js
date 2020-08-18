"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var enum_1 = require("./enum");
var Dictionaries_1 = __importDefault(require("./api/Dictionaries"));
var User_1 = __importDefault(require("./api/User"));
var Ads_1 = __importDefault(require("./api/Ads"));
var Vk_1 = __importDefault(require("./api/Vk"));
var Axios = /** @class */ (function () {
    function Axios(mode, token, callbackError) {
        if (mode === void 0) { mode = enum_1.Mode.dev; }
        this.axiosBase = this.init(mode, token, callbackError);
    }
    Axios.prototype.getBseURL = function (mode) {
        switch (mode) {
            case enum_1.Mode.prod:
                return 'https://api.friendshome.ru/v1/';
            case enum_1.Mode.dev:
                return 'http://127.0.0.1:8000/v1/';
        }
        return '';
    };
    Axios.prototype.init = function (mode, token, callbackError) {
        var _this = this;
        var axiosBase = axios_1.default.create({
            baseURL: this.getBseURL(mode)
        });
        axiosBase.interceptors.request.use(function (config) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                config.headers.Authorization = "Bearer " + token;
                return [2 /*return*/, config];
            });
        }); }, function (error) {
            return Promise.reject(error);
        });
        axiosBase.interceptors.response.use(function (config) {
            return config;
        }, function (error) {
            var _a = error.response, data = _a.data, status = _a.status;
            if (status === 401) {
                return Promise.reject(error);
            }
            if (data.errors && callbackError) {
                var messages = Object.keys(data.errors)
                    .map(function (key) { return data.errors[key]; })
                    .join('\n');
                callbackError(messages);
            }
            else if (data.message && callbackError) {
                callbackError(data.message);
            }
            return Promise.reject(error);
        });
        return axiosBase;
    };
    Axios.prototype.getDictionariesApi = function () {
        return new Dictionaries_1.default(this.axiosBase);
    };
    Axios.prototype.getUserApi = function () {
        return new User_1.default(this.axiosBase);
    };
    Axios.prototype.getAdsApi = function () {
        return new Ads_1.default(this.axiosBase);
    };
    Axios.prototype.getVkApi = function () {
        return new Vk_1.default(this.axiosBase);
    };
    return Axios;
}());
exports.default = Axios;
//# sourceMappingURL=axios.js.map