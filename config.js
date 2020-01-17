/**
 * URL connection format
 * mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
 * 
 * In below connection URL format
 * localhost:27017 = server:port, default port is 27017, port value is optional
 * test = our database name
 * 
 * See more: https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
 */ 
var config = {
	database: {
		url: 'mongodb+srv://Raju:Raju2020@mlabcluster-aowv6.mongodb.net/test?retryWrites=true&w=majority'
	},
	server: {
		host: '192.168.2.179',
		port: '3000'
	}
}

module.exports = config