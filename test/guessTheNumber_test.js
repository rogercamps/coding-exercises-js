import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('should be a function', function(){
    expect(guessTheNumber).to.be.a('function')
  })

  xit('should generate a number between 1 and 100', function(){
  expect(guessTheNumber(5)).to.equal(true)
  })
})
