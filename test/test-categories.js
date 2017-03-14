import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Categories from '../js/components/categories';

const should = chai.should();


describe('Categories component', function() {

	it('should render the header that displays the weather categories', function() {
		const renderer = TestUtils.createRenderer();

		renderer.render(<Categories />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('row categories');
	});
});