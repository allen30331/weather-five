import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import App from '../js/components/app';
import Categories from '../js/components/categories';
import Header from '../js/components/header';


const should = chai.should();


describe('Tests Components', function() {

	it('should render other components and containers', function() {
		const renderer = TestUtils.createRenderer();

		renderer.render(<App />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('app-container');
	});

	
	it('should render the header that displays the weather categories', function() {
		const renderer = TestUtils.createRenderer();

		renderer.render(<Categories />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('row categories');
	});

	it('should render the heading', function() {
		const renderer = TestUtils.createRenderer();

		renderer.render(<Header />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('header-container');
	});
});