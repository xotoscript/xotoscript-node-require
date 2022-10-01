"use strict";
let semver = require("semver");
let engines = require("configurations/package.json").engines;
let nodeVersion = engines.node;

/**
 * nodeRequirement
 * Deep Checks on all projects versions and requirements
 */

function nodeRequirement() {
	if (!semver.satisfies(process.version, nodeVersion)) {
		getInfo(nodeVersion, process.version);
		throw Error;
	} else {
		getInfo(nodeVersion, process.version);
	}
}

function getInfo(nodeVersion, version) {
	console.info(`NodeJS Version Check: \nRequired node version ${nodeVersion} SATISFIED with current version ${version}.\n\n`);
}

module.exports = {
	nodeRequirement,
};
