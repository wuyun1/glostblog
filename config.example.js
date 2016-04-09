// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
	config;

config = {
	// ### Production
	// When running Ghost in the wild, use the production environment.
	// Configure your URL and mail settings here
	production: {
		url: process.env.GHOST_URL || '',
		mail: {},

		// 配置MySQL 数据库

		database: {
			client: 'mysql',
			connection: {
				'user': process.env.GHOST_MYSQL_USER || process.env.MYSQL_ENV_MYSQL_USER || 'root',
				'password': process.env.GHOST_MYSQL_PASSWORD || process.env.MYSQL_ENV_MYSQL_PASSWORD || '123456',
				'host': process.env.GHOST_MYSQL_HOST || '139.129.33.41',
				'port': process.env.GHOST_MYSQL_PORT || 3306,
				'database': process.env.GHOST_MYSQL_DATABASE || process.env.MYSQL_ENV_MYSQL_DATABASE || 'ghost',
				charset: 'utf8'
			}
		},

		server: {
			host: '0.0.0.0',
			port: '2368'
		},
		// 参考文档： http://www.ghostchina.com/ghost-0-5-5-chinese-edition-released/

		//Storage.Now,we can support `qiniu`,`upyun`, `aliyun oss`, `aliyun ace-storage` and `local-file-store`

		// or
		// 参考文档： http://www.ghostchina.com/qiniu-cdn-for-ghost/
		/*storage: {
		    provider: 'qiniu',
		    bucketname: 'your-bucket-name',
		    ACCESS_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		    SECRET_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		    root: '/image/',
		    prefix: 'http://your-bucket-name.qiniudn.com'
		}*/

		// or
		// 参考文档： http://www.ghostchina.com/upyun-cdn-for-ghost/
		/*storage: {
		    provider: 'upyun',
		    bucketname: 'your-bucket-name',
		    username: 'your user name',
		    password: 'your password',
		    root: '/image/',
		    prefix: 'http://your-bucket-name.b0.upaiyun.com'
		}*/

		// or
		// 参考文档： http://www.ghostchina.com/aliyun-oss-for-ghost/
		storage: {
			provider: 'qiniu',
			bucketname: process.env.OSS_BUCKET || 'myblog',
			ACCESS_KEY: process.env.OSS_ACCESS_KEY_ID || 'bcOHf7glzbDVusXdmgz7wNC_fhRGygaKhDAG_zoR',
			SECRET_KEY: process.env.OSS_ACCESS_KEY_SECRET || 'fPW3oYbZAf4MfRPgiA1twIw_2jEcxTyzTf3TAtEs',
			root: process.env.OSS_ROOT || '/image/',
			endpoint: process.env.OSS_ENDPOINT,
			prefix: process.env.OSS_PREFIX || 'http://7xsjnn.com2.z0.glb.qiniucdn.com'
		},
		paths: {
			contentPath: process.env.GHOST_CONTENT
		}
	},

	// ### Development **(default)**
	development: {
		// The url to use when providing links to the site, E.g. in RSS and email.
		// Change this to your Ghost blog's published URL.
		// url: 'http://localhost:2368',
		url: process.env.GHOST_URL || '',
		// url: 'asdfasfd',
		// Example mail config
		// Visit http://support.ghost.org/mail for instructions
		// ```
		//  mail: {
		//      transport: 'SMTP',
		//      options: {
		//          service: 'Mailgun',
		//          auth: {
		//              user: '', // mailgun username
		//              pass: ''  // mailgun password
		//          }
		//      }
		//  },
		// ```

		// #### Database
		// Ghost supports sqlite3 (default), MySQL & PostgreSQL
		// database: {
		// 	client: 'sqlite3',
		// 	connection: {
		// 		filename: path.join(__dirname, '/content/data/ghost-dev.db')
		// 	},
		// 	debug: false
		// },

		database: {
			client: 'mysql',
			connection: {
				host: '139.129.33.41',
				user: 'root',
				password: '123456',
				database: 'ghost',
				charset: 'utf8'

			}
		},
		// #### Server
		// Can be host & port (default), or socket
		server: {
			// Host to be passed to node's `net.Server#listen()`
			host: '0.0.0.0',
			// Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
			port: '2368'
		},
		// #### Paths
		// Specify where your content directory lives
		paths: {
			contentPath: path.join(__dirname, '/content/')
		}
	},

	// **Developers only need to edit below here**

	// ### Testing
	// Used when developing Ghost to run tests and check the health of Ghost
	// Uses a different port number
	testing: {
		// url: 'http://127.0.0.1:2369',
		database: {
			client: 'sqlite3',
			connection: {
				filename: path.join(__dirname, '/content/data/ghost-test.db')
			}
		},
		server: {
			host: '127.0.0.1',
			port: '2369'
		},
		logging: false
	},

	// ### Testing MySQL
	// Used by Travis - Automated testing run through GitHub
	'testing-mysql': {
		// url: 'http://127.0.0.1:2369',
		database: {
			client: 'mysql',
			connection: {
				host: '127.0.0.1',
				user: 'root',
				password: '',
				database: 'ghost_testing',
				charset: 'utf8'
			}
		},
		server: {
			host: '127.0.0.1',
			port: '2369'
		},
		logging: false
	},

	// ### Testing pg
	// Used by Travis - Automated testing run through GitHub
	'testing-pg': {
		// url: 'http://127.0.0.1:2369',
		database: {
			client: 'pg',
			connection: {
				host: '127.0.0.1',
				user: 'postgres',
				password: '',
				database: 'ghost_testing',
				charset: 'utf8'
			}
		},
		server: {
			host: '127.0.0.1',
			port: '2369'
		},
		logging: false
	}
};

module.exports = config;