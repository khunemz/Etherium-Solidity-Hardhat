async function main() {
  //
  const MyContract = await ethers.getContractFactory('MyContract');
  const myContract = await MyContract.deploy("My Contract");

  console.log("My Contract deployed to : ", myContract.address);
}


main().then(() => {
  return process.exit(0);
}).catch(e => {
  console.log(e);
  process.exit(1)
});