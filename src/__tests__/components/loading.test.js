import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading />', () => {
  it('renders the <Loading />', () => {
    const { container, getByTestId } = render(<Loading src="/images/karl.png" data-testid="loading" />);
    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Loading.ReleaseBody />', () => {
    const { container } = render(<Loading.ReleaseBody data-testid="loading" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
