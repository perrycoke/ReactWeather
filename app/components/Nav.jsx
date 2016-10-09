var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
		<div>
			<h2>Nav component</h2>
			<IndexLink to="/">Get Weather</IndexLink>
			<IndexLink to="/about">About</IndexLink>
			<IndexLink to="/examples">Examples</IndexLink>
		</div>
	)
}

module.exports = Nav;