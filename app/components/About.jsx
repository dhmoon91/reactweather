var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application build on React.
      </p>
      <p>
      Tools:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Of course, react framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - For weather API source
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
