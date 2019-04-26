const projects = [
	 {
	 	title: 'Datumize Web Collector',
	 	url: 'http://hdl.handle.net/2117/127550',
	 	image: 'dwc.png',
	 	description: 'Main developer, created in Datumize. Typescript library to capture interactions of web visitors without altering the code of the website, and Big Data Platform to extract analytics from such data.',
	 	prize: 'Maximum Score with honors in my Master Thesis',
	 	tags: {
	 		types: ['big data'],
	 		languages: ['typescript','java'],
	 		libraries: ['spark','hbase','elasticsearch'],
	 		others: ['Master Thesis']

	 	}
	 },
	 {
	 	title: 'DBpedia Mappings UI',
	 	url: 'http://blog.ismaelrh.com/GSOC-2017/',
	 	image: 'gsoc17.png',
	 	description: 'Project developed for DBpedia inside the Google Summer of Code program. Development of a frontend for administrating RML mappings.',
	 	prize: '',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['react','nodejs'],
	 		others: ['semantic web']

	 	}
	 },
	 {
	 	title: 'React Portfolio',
	 	url: 'https://github.com/ismaelrh/react-portfolio',
	 	image: 'react-portfolio.png',
	 	description: 'This webpage. Web Developer portfolio created with React and Bootstrap 4. Includes "about", "projects", "hackathons" and "resume" sections.',
	 	prize: '',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['react','bootstrap'],
	 		others: []

	 	}
	 },
	 {
	 	title: '©-graph',
	 	url: 'https://github.com/ismaelrh/c-graph',
	 	image: 'cgraph.png',
	 	description: 'Tool to visualize relationships between groups of copyright-related papers. Multiple grouping criterias can be applied. Good-looking and easy to use.',
	 	prize: '',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['vis.js'],
	 		others: ['semantic web']

	 	}
	 },
	 {
	 	title: 'Stock Surfer',
	 	url: 'https://github.com/albertomg994/Stock-Surfer',
	 	image: 'stocksurfer.png',
	 	description: 'Game where you have to surf the stock graphs of several enterprises and change among them to remain above of a minimum level.',
	 	prize: '',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['phaser'],
	 		others: []

	 	}
	 },
	  {
	 	title: 'Stores for Me!',
	 	url: 'http://devpost.com/software/stores4me',
	 	image: 'storesforme.png',
	 	description: 'Heat map of bank transactions so customers can see where people like him/her (age, salary,...) buys more frequently.',
	 	prize: 'HackUPC Fall \'16 Hackathon Winner of GFT Challenge\'',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['AngularJS','nodejs'],
	 		others: []

	 	}
	 },
	 {
	 	title: 'Linked Data Hurricanes Info',
	 	url: 'https://github.com/borjaeg/keystone',
	 	image: 'keystone.png',
	 	description: 'Web application that shows in an interactive map the zones affected by hurricanes. For that, it uses Open and Linked Data from DBPedia and Geonames.',
	 	prize: 'Winner of Keystone Hackathon 2016 on Open and Linked Data',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript','java'],
	 		libraries: ['Spark'],
	 		others: []

	 	}
	 },
	  {
	 	title: 'Infoboxer',
	 	url: 'http://sid.cps.unizar.es/Infoboxer',
	 	image: 'infoboxer.png',
	 	description: 'System that helps users to create rich and accurate content for Knowledge Bases and Wikipedia Infoboxes, using statistical and semantic knowledge from linked data sources and the Semantic Web.',
	 	prize: 'Winner of Best Final Degree Project Prize 2016 by Tecnara',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['java','javascript'],
	 		libraries: ['Spring','AngularJS'],
	 		others: ['semantic web']

	 	}
	 },
	  {
	 	title: 'WallaPoints!',
	 	url: 'https://github.com/ismaelrh/wallapoints',
	 	image: 'wallapoints.png',
	 	description: 'Interactive map where users can mark their favourite points of interest and calculate routes. They can also visualize stats, follow users and rate other points.',
	 	prize: '',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['AngularJS','nodejs'],
	 		others: []

	 	}
	 },
	 {
	 	title: 'ZGZ-Tram',
	 	url: 'https://github.com/ismaelrh/zgztram',
	 	image: 'zgztram.png',
	 	description: 'A simple web application that shows Zaragoza\'s Tramway times on a map, using Zaragoza OpenData.',
	 	prize: '',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['AngularJS','leaflet'],
	 		others: []

	 	}
	 },
	 {
	 	title: 'Chip-8',
	 	url: 'https://github.com/ismaelrh/Java-chip8-emulator',
	 	image: 'chip8.png',
	 	description: 'A simple Chip-8 system emulator written in Java that runs all the available ROMs.',
	 	prize: '',
	 	tags: {
	 		types: ['desktop app'],
	 		languages: ['java'],
	 		libraries: [],
	 		others: []

	 	}
	 },
	 {
	 	title: 'PocketShop!',
	 	url: 'https://github.com/WallaTeam/FinApps15-App',
	 	image: 'pocketshop.png',
	 	description: 'A solution for small business that provides a stock, client and sales management system, using a Raspberry Pi and one or more Android devices.',
	 	prize: '',
	 	tags: {
	 		types: ['hybrid mobile app'],
	 		languages: ['java','python'],
	 		libraries: ['AngularJS','ionic'],
	 		others: ['raspberry pi']

	 	}
	 },
	 {
	 	title: 'Twitter Contest Bot',
	 	url: 'https://github.com/ismaelrh/Twitter-Contest-Bot',
	 	image: 'twitterbot.png',
	 	description: 'A Twitter bot that search for "Follow and Retweet to WIN..." tweets and participates in such contests.',
	 	prize: '',
	 	tags: {
	 		types: ['cli'],
	 		languages: ['java'],
	 		libraries: [],
	 		others: []

	 	}
	 },
	 {
	 	title: 'San Lorenzo App',
	 	url: 'https://github.com/ismaelrh/sanLorenzo-ionic',
	 	image: 'sanlorenzo.png',
	 	description: 'Mobile app that contains an interactive guide of San Lorenzo festivities at Huesca. Includes maps, images and favourites among other information. Updated every year.',
	 	prize: '',
	 	tags: {
	 		types: ['hybrid mobile app'],
	 		languages: ['javascript'],
	 		libraries: ['AngularJS','ionic'],
	 		others: []

	 	}
	 },
	 {
	 	title: 'WallaLinks!',
	 	url: 'https://github.com/WallaTeam/WallaLinks',
	 	image: 'wallalinks.png',
	 	description: 'A URL-Shortener web service and platform with advanced features like protected links, expiration and stats.',
	 	prize: '',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript','java'],
	 		libraries: ['spring','nodejs','expressjs'],
	 		others: []

	 	}
	 },
	 {
	 	title: 'Cropper',
	 	url: 'https://2015.spaceappschallenge.org/project/cropper/',
	 	image: 'cropper.png',
	 	description: 'A real-time collaborative social-network made for farmers who want to alert to other farmers of dangeours events, like floods, storms, plagues, diseases, etc.',
	 	prize: 'Local winner of Space Apps Zaragoza 2015',
	 	tags: {
	 		types: ['web app'],
	 		languages: ['javascript'],
	 		libraries: ['AngularJS','nodejs','leaflet'],
	 		others: []

	 	}
	 },
	 {
	 	title: 'WallaPet',
	 	url: 'https://github.com/WallaTeam/Wallapet',
	 	image: 'wallapet.png',
	 	description: 'Android app for making simple deals between sellers/buyers of Animals and Animals in adoption.',
	 	prize: '',
	 	tags: {
	 		types: ['android app'],
	 		languages: ['java'],
	 		libraries: [],
	 		others: []

	 	}
	 },
	 {
	 	title: 'Crazy Golf DS',
	 	url: 'https://gbatemp.net/threads/game-crazy-golf.306987/',
	 	image: 'crazygolf.png',
	 	description: 'Mini-golf homemade game for Nintendo DS where you have to complete the multiple levels with the fewer number of tries, avoiding holes and obstacles. 6th position in SceneryBeta 2011.',
	 	prize: '',
	 	tags: {
	 		types: ['nintendo ds'],
	 		languages: ['C'],
	 		libraries: ['devkitPro','PAlib'],
	 		others: []

	 	}
	 },
	 {
	 	title: 'Conway\'s game of life',
	 	url: 'https://github.com/ismaelrh/lifesgame',
	 	image: 'cells.png',
	 	description: 'Simple Java implementation of Conway\'s game of life.',
	 	prize: '',
	 	tags: {
	 		types: ['cli'],
	 		languages: ['java'],
	 		libraries: [],
	 		others: []

	 	}
	 },
	 {
	 	title: 'uConverter',
	 	url: 'https://play.google.com/store/apps/details?id=com.ismaro3.conversor',
	 	image: 'conversor.png',
	 	description: 'Simple, easy to use and complete Android app that helps you converting measuring units and currencies. Downloaded by 20,000 people around the world.',
	 	prize: '',
	 	tags: {
	 		types: ['android app'],
	 		languages: ['java'],
	 		libraries: [],
	 		others: []

	 	}
	 }
  ];

  export default projects;
