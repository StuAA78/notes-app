// notes app tests

test = new Test()
test.describe("A note can be created with text")
testNote = new Note()
testNote.write("The quick brown fox")
test.expect(testNote.getText())
test.toEqual("The quick brown fox")
console.log(test.getDescription())
console.log(test.getResult())

test.describe("Note is truncated to 20 chars for the list")
testNote = new Note()
testNote.write("The quick brown fox jumps over the lazy dog")
test.expect(testNote.getDisplayText())
test.toEqual("The quick brown fox ...")
console.log(test.getDescription())
console.log(test.getResult())
console.log(testNote.getDisplayText())

// test framework tests:
//
// test1 = new Test()
// test1.describe("1 + 1 = 2")
// test1.expect(1+1)
// test1.toEqual(2)
//
// test2 = new Test()
// test2.describe("1 + 1 != 3")
// test2.expect(1+1)
// test2.toNotEqual(3)
//
// test3 = new Test()
// test3.describe("QWERTYUIOP to include RTY")
// test3.expect("QWERTYUIOP")
// test3.toInclude("RTY")
//
// test4 = new Test()
// test4.describe("QWERTYUIOP to not include ZXC")
// test4.expect("QWERTYUIOP")
// test4.toNotInclude("ZXC")
