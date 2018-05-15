import React from "react";
/* eslint-disable react/no-multi-comp */

export const didMountHook = (ComposedComponent, hook) => class extends React.Component {
  componentDidMount() {
    hook(this.props);
  }
  render() {
    return <ComposedComponent {...this.props} />;
  }
};

export const willMountHook = (ComposedComponent, hook) => class extends React.Component {
  componentWillMount() {
    hook(this.props);
  }
  render() {
    return <ComposedComponent {...this.props} />;
  }
};

export const shouldComponentUpdateHook = (ComposedComponent, hook) => class extends React.Component {
  shouldComponentUpdate(nextProps) {
    return hook(this.props, nextProps);
  }
  render() {
    return <ComposedComponent {...this.props} />;
  }
};

export const componentWillReceivePropsHook = (ComposedComponent, hook) => class extends React.Component {
  componentWillReceiveProps(nextProps) {
    return hook(this.props, nextProps);
  }
  render() {
    return <ComposedComponent {...this.props} />;
  }
};

