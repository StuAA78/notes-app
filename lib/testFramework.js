function Test() {
  this.description = ""
  this.whatWeGet = ""
  this.passed = ""
  this.whatWeWant = ""
}

Test.prototype.describe = function(description){
  this.description = description
}

Test.prototype.expect = function(whatWeGet){
  this.whatWeGet = whatWeGet
}

Test.prototype.toEqual = function(whatWeWant){
  this.whatWeWant = whatWeWant
  this.passed = this.whatWeGet === whatWeWant
}

Test.prototype.toNotEqual = function(whatWeWant){
  this.passed = this.whatWeGet !== whatWeWant
  this.whatWeWant = whatWeWant
}

Test.prototype.toInclude = function(whatWeWant){
  this.passed = this.whatWeGet.includes(whatWeWant)
  this.whatWeWant = whatWeWant
}

Test.prototype.toNotInclude = function(whatWeWant){
  this.passed = !this.whatWeGet.includes(whatWeWant)
  this.whatWeWant = whatWeWant
}

Test.prototype.getResult = function(){
  console.log("\nTest name: " + this.description)
  console.log("What we expected: " + this.whatWeWant)
  console.log("What we got: " + this.whatWeGet)
  console.log(this.passed)
}

Test.prototype.getDescription = function(){
  return this.description
}
