var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	onSearch(e) {
		e.preventDefault();
		
		var location = this.refs.search.value;
		var encodedLocation = encodeURIComponent(location);

		if (location.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
  render() {
    return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather App</li>
						<li><IndexLink activeClassName="active" to="/">Get Weather</IndexLink></li>
						<li><IndexLink activeClassName="active" to="/about">About</IndexLink></li>
						<li><IndexLink activeClassName="active" to="/examples">Examples</IndexLink></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li><input type="search" placeholder="Search weather by city" ref="search"/></li>
							<li><input type="submit" className="button" value="Get Weather"/></li>
						</ul>
					</form>
				</div>
			</div>
		);
  }
});

module.exports = Nav;