import * as PropTypes from 'prop-types';
import * as React from 'react';

import AWSAppSyncClient from 'aws-appsync/lib';

export interface RehydrateProps {
  rehydrated: boolean;
  children: React.ReactNode;
}

const Rehydrate = (props: RehydrateProps) => (
  <div className={`awsappsync ${props.rehydrated ? 'awsappsync--rehydrated' : 'awsappsync--rehydrating'}`}>
    {props.rehydrated ? props.children : <span>Loading...</span>}
  </div>
);

export interface RehydratedProps {
  render?: ((props: { rehydrated: boolean }) => React.ReactNode);
  children?: React.ReactNode;
  loading?: React.ReactNode;
}

export default class Rehydrated extends React.Component<RehydratedProps, any> {
  public static contextTypes = {
    client: PropTypes.instanceOf(AWSAppSyncClient).isRequired,
  };

  public static propTypes = {
    render: PropTypes.func,
    children: PropTypes.node,
    loading: PropTypes.node,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      rehydrated: false,
    };
  }

  public async componentWillMount() {
    await this.context.client.hydrated();
    this.setState({
      rehydrated: true,
    });
  }

  public render() {
    const { render, children, loading } = this.props;
    const { rehydrated } = this.state;
    if (render) { return render({ rehydrated }); }
    if (children) {
      if (loading) { return rehydrated ? children : loading; }
      return (
        <Rehydrate rehydrated={rehydrated}>
          {children}
        </Rehydrate>
      );
    } else {
      return;
    }
  }
}
