import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import App from '../js/components/app';

const should = chai.should();


describe('App component', function() {

	it('should render other components and containers', function() {
		const renderer = TestUtils.createRenderer();

		renderer.render(<App />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('app-container');
	});
});