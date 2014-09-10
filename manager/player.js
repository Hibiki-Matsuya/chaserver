/******************************************************************************/
/*                                                                            */
/*                                  CHaServer                                 */
/*                           -- Player prototype --                           */
/*                                                                            */
/******************************************************************************/

/*------------------------------------*/
/*             Initialize             */
/*------------------------------------*/
var Player = function(name, addr, port) {
	this.name = name;
	this.addr = addr;
	this.port = port;
}

module.exports = { Player: Player }
