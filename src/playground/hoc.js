//higher order component hoc - a component (HOC) that renders another coponent
import React from "react";
import ReactDom from "react-dom";

const Info = props => (
  <div>
    <h1>info</h1>
    <p>The infor is :{props.info}</p>
  </div>
);

const withRegularWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info .please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withRegularWarning(Info);

const requiredAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <div>
          <p>Please login to view the info</p>
        </div>
      )}
    </div>
  );
};
const AuthenticationInfo = requiredAuthentication(Info);

// ReactDom.render(
//   <AdminInfo isAdmin={true} info="-> There are the details" />,
//   document.getElementById("app")
// );

ReactDom.render(
  <AuthenticationInfo
    isAuthenticated={true}
    info="-> Required Authentication"
  />,
  document.getElementById("app")
);
