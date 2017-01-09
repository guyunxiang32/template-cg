import './Page<%- Name %>.less';

import classnames from 'classnames';<% if (i18n) { %>
import i18n from 'i18n';<% } %><% if (store) { %>
import Actions from './actions';
import Store from './store';

const { Reflux, <% if (SPA) { %>ReactRouter<% } else { %>ReactDOM<% } %>, <% if (approveflow) { %>approveFlow<% } %> } = window;
class Page<%- Name %> extends Reflux.Component {

  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }

}
<% } else { %>

const { React, <% if (SPA) { %>ReactRouter<% } else { %>ReactDOM<% } %>, <% if (approveflow) { %>approveFlow<% } %>  } = window;
class Page<%- Name %> extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } %><% if(SPA){ %>
export default ReactRouter.withRouter(Page<%- Name %>);<% } else {%>
ReactDOM.render(<Page<%- Name %> />, document.getElementById('App'));<% } %>
