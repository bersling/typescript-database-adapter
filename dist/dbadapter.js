"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsmongo = require("tsmongo");
const tsmysql = require("tsmysql");
function dbadapter(databaseType) {
    switch (databaseType) {
        case 'mongo':
            return tsmongo;
        case 'mysql':
            return tsmysql;
        default:
            throw Error('Database type not implemented!');
    }
}
exports.dbadapter = dbadapter;
