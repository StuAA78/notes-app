test1 = new Test()
test1.describe("1 + 1 = 2")
test1.expect(1+1)
test1.toEqual(2)

test2 = new Test()
test2.describe("1 + 1 != 3")
test2.expect(1+1)
test2.toNotEqual(3)

test3 = new Test()
test3.describe("QWERTYUIOP to include RTY")
test3.expect("QWERTYUIOP")
test3.toInclude("RTY")

test4 = new Test()
test4.describe("QWERTYUIOP to not include ZXC")
test4.expect("QWERTYUIOP")
test4.toNotInclude("ZXC")
