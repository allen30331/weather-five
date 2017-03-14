import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Header from '../js/components/header';

const should = chai.should();


describe('Header component', function() {

	it('should render the heading', function() {
		const renderer = TestUtils.createRenderer();

		renderer.render(<Header />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('jumbotron');
	});
});