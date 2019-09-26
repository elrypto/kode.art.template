
export function toEth(web3:any, weiVal:any):any {
  return web3.utils.fromWei(weiVal, 'ether');
}

export function toWei(web3:any, ethVal:any):any {
  return web3.utils.toWei(ethVal, 'ether');
}