function Test() {
  this.description = ""
  this.whatWeGet = ""
  this.passed = ""
}

Test.prototype.describe = function(description){
  this.description = description
}

Test.prototype.expect = function(whatWeGet){
  this.whatWeGet = whatWeGet
}

Test.prototype.toEqual = function(whatWeWant){
  this.passed = this.whatWeGet === whatWeWant
}

Test.prototype.toNotEqual = function(whatWeWant){
  this.passed = this.whatWeGet !== whatWeWant
}

Test.prototype.toInclude = function(whatWeWant){
  this.passed = this.whatWeGet.includes(whatWeWant)
}

Test.prototype.toNotInclude = function(whatWeWant){
  this.passed = !this.whatWeGet.includes(whatWeWant)
}

Test.prototype.getResult = function(){
  return this.passed
}
