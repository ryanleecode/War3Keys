import {
  TextField,
} from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';
import * as _ from 'lodash';
import * as React from 'react';

interface Props extends TextFieldProps {
  maxLength?: number;
}

interface State {
  inputText: string;
}

export default class SingleCharTextField extends React.PureComponent<Props, State> {
  private readonly maxLength: number;

  constructor(props) {
    super(props);

    if (_.isUndefined(props.maxLength)) {
      this.maxLength = Number.MAX_SAFE_INTEGER;
    } else {
      this.maxLength = props.maxLength;
    }
  }

  public render() {
    const { value } = this.props;
    let text = value as string;
    if (!_.isUndefined(text) && text.length > this.maxLength!) {
      text = _.truncate(text, { length: this.maxLength, omission: '' });
    }
    return (
      <TextField
        {...this.props}
        value={text}
      />
    );
  }
}
