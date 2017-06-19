import {dao} from './dao';
import * as mocha from 'mocha';
import * as chai from 'chai';
import * as express from 'express';

const expect = chai.expect;

describe('DAO Test', () => {

  it('should return correct layer', () => {
    expect(dao('mongo')).to.exist;
    expect(dao('mongo').dao).to.exist;
    expect(dao('mysql')).to.exist;
    expect(dao('mysql').dao).to.exist;
  });

});

