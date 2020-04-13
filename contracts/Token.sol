pragma solidity >=0.4.21 <0.7.0;


contract Token {
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    string public name = "Token";

    string public symbol = "Token";
    string public standard = "Token v1";

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 initialSupply) public {
        balanceOf[msg.sender] = initialSupply;
        totalSupply = initialSupply;
    }

    function transfer(address to, uint256 value) public returns (bool success) {
        require(balanceOf[msg.sender] >= value);

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;

        emit Transfer(msg.sender, to, value);
        return true;
    }
}
