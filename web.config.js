import Cors from "cors";
import initMiddleware from "plugins/next-cors/middleware";
import diginext from "./diginext.json";

let shortEnv = process.env.NEXT_PUBLIC_ENV;
if (process.env.NEXT_PUBLIC_ENV == "development") shortEnv = "dev";
if (process.env.NEXT_PUBLIC_ENV == "production") shortEnv = "prod";

const corsSettings = diginext.cors || { dev: [], prod: [] };
const whitelist = corsSettings[shortEnv] || [];

if (typeof window == "undefined") console.log(`[CORS] Whitelist origins:`, whitelist);

function checkCors(origin, callback) {
	console.log(`[CORS] request origin:`, origin);
	// console.log(`[CORS] callback:`, callback);

	if (whitelist.indexOf(origin) !== -1) {
		callback(null, true);
	} else {
		console.error("[CORS] Not allowed by CORS");
		// callback(null, false);
		return new Error(`CORS not allowed.`);
	}
}

var corsOptionsDelegate = function (req, callback) {
	// console.log(`[CORS] req.header:`, req.headers);
	var corsOptions = {
		origin: "*",
		allowedHeaders: "*",
		// allowedHeaders: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Cache-Control, Body-Hash, Signature, Api-Key",
		methods: "GET,OPTIONS,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true,
		preflightContinue: false,
		optionsSuccessStatus: 204,
	};

	/**
	 * Only allow from the specific domains:
	 */
	const origin = req.header("Origin") || `${req.protocol}://${req.headers["host"]}`;
	const isAllowed = whitelist.indexOf(origin) !== -1;
	// console.log(`[CORS] origin:`, origin);
	// console.log(`[CORS] isAllowed:`, isAllowed);

	if (isAllowed) {
		corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
	} else {
		corsOptions = { origin: false }; // disable CORS for this request
	}

	callback(null, corsOptions); // callback expects two parameters: error and options
};

// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
export const cors = initMiddleware(Cors(corsOptionsDelegate));

export const ENVIRONMENT_DATA = {
	PRODUCTION: "production",
	STAGING: "staging",
	DEVELOPMENT: "development",
};

const CONFIG = {
	environment: process.env.NEXT_PUBLIC_ENV || "development",
	site: {
		title: "Meta feature",
		description: "Description goes here",
		type: "article",
	},
	links: {
		facebookPage: "",
	},
	dateFormat: "yyyy-MM-dd HH:mm:ss",
	// these variables can be exposed to front-end:
	NEXT_PUBLIC_FB_APP_ID: process.env.NEXT_PUBLIC_FB_APP_ID || "", // currently using XXX
	NEXT_PUBLIC_FB_PAGE_ID: process.env.NEXT_PUBLIC_FB_PAGE_ID || "1162214040532902", // currently using Digitop developers
	NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "",
	NEXT_PUBLIC_API_BASE_PATH: process.env.NEXT_PUBLIC_API_BASE_PATH || "",
	NEXT_PUBLIC_CDN_BASE_PATH: process.env.NEXT_PUBLIC_CDN_BASE_PATH || "",
	NEXT_PUBLIC_APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN || "",
	NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "",
	// some secret keys which won't be exposed to front-end:
	SOME_SECRET_KEY: process.env.SOME_SECRET_KEY || "",
	IRON_SESSION_NAME: "DIGINEXTADMINCOOKIE",
	IRON_SESSION_SECRET: process.env.IRON_SESSION_SECRET || "",
	get SESSION_NAME() {
		return `DIGINEXTAPPCOOKIE`;
	},
	getBasePath: () => {
		return CONFIG.NEXT_PUBLIC_BASE_PATH ? "/" + CONFIG.NEXT_PUBLIC_BASE_PATH : "";
	},
	getBaseUrl: () => {
		return CONFIG.NEXT_PUBLIC_BASE_URL ? CONFIG.NEXT_PUBLIC_BASE_URL : "";
	},
	path: (path) => {
		return CONFIG.getBasePath() + path;
	},
	getTDServerSideCookieId: () => {

		/**
		 * USAGE
		 * const tdSscId = CONFIG.getTDServerSideCookieId(); console.log("TreasureData server side cookie is: ", tdSscId);
		 */

		try {
			if (typeof (window) == "undefined") return "null";
			if (!window.td) return "null";
			if (!window.td.get) return "cannot load tracking script!";
			if (typeof (window) != "undefined" && window.td) {
				const globalInfo = window.td.get("$global");
				return globalInfo.td_ssc_id || "null";
			} else {
				console.log("[getTDServerSideCookieId] window || window.td is not defined");
				return "null";
			}
		} catch (e) {
			return "error";
		}

	},
	getTDGlobalId: () => new Promise((resolve, reject) => {

		/**
		 * USAGE
		 * CONFIG.getTDGlobalId()
		 *  .then(async(globalId) => console.log("TreasureData globalId is: ", globalId.toString()))
		 *  .catch(async(error) => console.warn("cannot get TDGlobalId:", error))
		 */
		if (typeof (window) == "undefined") reject("null");
		if (!window.td) reject("null");
		if (!window.td.fetchGlobalID) reject("null");
		if (typeof (window.td._fetchGlobalID) == "object") reject("cannot load tracking script!");

		window.td.fetchGlobalID(
			function (globalId) {
				resolve(globalId);
			}, function (error) {
				reject(error);
			});
	}),
	getTDClientId: () => {

		/**
		 * USAGE
		 * const tdClient = CONFIG.getTDClientId(); console.log("TreasureData clientId is: ", tdClient);
		 */
		if (typeof window != "undefined" && window.td && window.td.client) {
			const track = window.td.client.track || {};
			const values = track.values || {};
			return values.td_client_id() || "_";
		} else return "null";
	},
	addTd: (data) => {
		if (typeof window != "undefined" && window.td) {
			let tdTable = process.env.NEXT_PUBLIC_ENV == 'production' ? 'event_participant_data' : 'event_participant_data';
			console.log('---------------');
			console.log(data, tdTable);
			var successCallback = function (td_global_id) {
				console.log('td_global_id', td_global_id);
				data.td_global_id = td_global_id;
				data.td_uuid = window.td.client.track.uuid;
			};
			var errorCallback = function (err) {
				console.log('errorCallback', err);
			};
			var afterPageviewCallback = function (td_global_id) {
				console.log(22222222, td_global_id);
				window.td.fetchGlobalID(successCallback, errorCallback, true);
			};
			window.td.fetchGlobalID(successCallback, errorCallback, true);
			window.td.set(tdTable, data);
			window.td.trackPageview(tdTable, afterPageviewCallback);
			console.log('---------------');
		} else return "null";
	},
};

if (typeof window != "undefined") {
	window.__config__ = CONFIG;
	// console.log(CONFIG);
} else {
	// console.log(CONFIG);
}

export default CONFIG;
