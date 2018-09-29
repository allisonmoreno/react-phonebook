import React from 'react';
import SearchAppBar from '../Components/SearchAppBar';
import UsersList from '../Components/UsersList';
import FabBtn from '../Components/FabBtn';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../WithRoot';

const styles = (theme: Object) => ({
  root: {
    textAlign: 'center',
    paddingTop: 0,
  },
});

type ProvidedProps = {
  classes: Object,
};

type Props = {
  classes: Object,
};


class Index extends React.Component<ProvidedProps & Props> {

  render() {
    return (
      <div className={this.props.classes.root}>
        <SearchAppBar />
        <div className="main">
          <UsersList />
        </div>
        <FabBtn />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));