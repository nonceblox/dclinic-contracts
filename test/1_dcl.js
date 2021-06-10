const DCLToken = artifacts.require("DCLToken");
const truffleAssert = require("truffle-assertions");
const Web3 = require("web3");
const web3 = new Web3();

contract("DCLToken", (accounts) => {
    var owner = accounts[0];
    before(async () => {
        this.token = await DCLToken.deployed();
    });
    it("should have correct owner", async () => {
        const tokenOwner = await this.token.owner();
        assert.equal(tokenOwner, owner);
    });
    it("should have correct name", async () => {
        const name = await this.token.name();
        assert.equal(name, "Dclinic Token");
    });
    it("should have correct symbol", async () => {
        const symbol = await this.token.symbol();
        assert.equal(symbol, "DCL");
    });
    it("should have correct decimals", async () => {
        const decimals = await this.token.decimals();
        assert.equal(decimals, 18);
    });
    it("should have correct supply", async () => {
        const totalSupply = await this.token.totalSupply();
        const expectedTotalSupply = await web3.utils.toWei("100000000", "ether");
        assert.equal(totalSupply, expectedTotalSupply);
    });
    it("owner should have correct balance", async () => {
        const ownerBalance = await this.token.balanceOf(owner);
        const expectedOwnerBalance = await web3.utils.toWei("100000000", "ether");
        assert.equal(ownerBalance, expectedOwnerBalance);
    });
    it("holder should be able to transfer", async () => {
        const holder = owner;
        const receiver = accounts[1];
        const amount = web3.utils.toWei("20", "ether");

        const prevHolderBalance = await this.token.balanceOf(holder);
        const prevReceiverBalance = await this.token.balanceOf(receiver);

        const transferResult = await this.token.transfer(receiver, amount, { from: holder });
        truffleAssert.eventEmitted(transferResult, "Transfer");

        const holderBalance = await this.token.balanceOf(holder);
        const receiverBalance = await this.token.balanceOf(receiver);

        const expectedHolderBalance = BigInt(prevHolderBalance) - BigInt(amount);
        const expectedReceiverBalance = BigInt(prevReceiverBalance) + BigInt(amount);

        assert.equal(holderBalance, expectedHolderBalance);
        assert.equal(receiverBalance, expectedReceiverBalance);
    });
    it("holder should be able to grant approval", async () => {
        const holder = owner;
        const spender = accounts[1];
        const amount = web3.utils.toWei("20", "ether");

        const approveResult = await this.token.approve(spender, amount, { from: holder });
        truffleAssert.eventEmitted(approveResult, "Approval");

        const allowance = await this.token.allowance(holder, spender);

        assert.equal(allowance, amount);
    });
});