import React, { Component } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_github-corner__2w8js:hover .styles_octo-arm__2N4yO {\n  border: 10px solid yellow;\n  animation: styles_octocat-wave__1Wfq3 560ms ease-in-out;\n}\n\n@keyframes styles_octocat-wave__1Wfq3 {\n  0%,\n  100% {\n    transform: rotate(0);\n  }\n  20%,\n  60% {\n    transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    transform: rotate(10deg);\n  }\n}\n\n@media (max-width: 500px) {\n  .styles_github-corner__2w8js:hover .styles_octo-arm__2N4yO {\n    animation: none;\n  }\n  .styles_github-corner__2w8js .styles_octo-arm__2N4yO {\n    animation: styles_octocat-wave__1Wfq3 560ms ease-in-out;\n  }\n}\n";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var GithubCatRibbon = function (_Component) {
  inherits(GithubCatRibbon, _Component);

  function GithubCatRibbon() {
    classCallCheck(this, GithubCatRibbon);
    return possibleConstructorReturn(this, (GithubCatRibbon.__proto__ || Object.getPrototypeOf(GithubCatRibbon)).apply(this, arguments));
  }

  createClass(GithubCatRibbon, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          username = _props.username,
          reponame = _props.reponame;

      var url = "https://github.com/" + username + "/" + reponame;

      return React.createElement(
        "a",
        { href: url, target: "_blank", className: "github-corner" },
        React.createElement(
          "svg",
          {
            width: "80",
            height: "80",
            viewBox: "0 0 250 250",
            style: {
              fill: "#353a43",
              color: "#eee",
              position: "absolute",
              top: "0",
              border: "0",
              right: "0"
            }
          },
          React.createElement("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          React.createElement("path", {
            d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
            fill: "currentColor",
            style: { transformOrigin: "130px 106px" },
            className: "octo-arm"
          }),
          React.createElement("path", {
            d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
            fill: "currentColor",
            className: "octo-body"
          })
        )
      );
    }
  }]);
  return GithubCatRibbon;
}(Component);

// ===========================


GithubCatRibbon.propTypes = {
  username: PropTypes.string,
  reponame: PropTypes.string
};

export default GithubCatRibbon;
//# sourceMappingURL=index.es.js.map
