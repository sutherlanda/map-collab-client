import React from "react";

interface AppProps {}

interface AppState {}

class SideBar extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  componentWillMount(): void {
  }

  componentWillUnmount(): void {
  }

  render() {
    return (
      <div className="side-bar">
      </div>
    );
  }
}

export default SideBar;
