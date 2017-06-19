"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = require("./dao");
const chai = require("chai");
const expect = chai.expect;
describe('DAO Test', () => {
    it('should return correct layer', () => {
        expect(dao_1.dao('mongo')).to.exist;
        expect(dao_1.dao('mongo').dao).to.exist;
        expect(dao_1.dao('mysql')).to.exist;
        expect(dao_1.dao('mysql').dao).to.exist;
    });
});
