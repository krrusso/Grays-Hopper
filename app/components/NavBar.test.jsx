/* global describe it beforeEach xdescribe */

import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import NavBar from './NavBar';
import actualStore from '../store';

xdescribe('Navbar', () => {
	describe('Links', () => {
		describe('Link names', () => {
			let navBarWrapper;

			beforeEach('Make NavBar wrapper', () => {
				navBarWrapper = shallow(<NavBar />, { context: { actualStore } });
			});

			it('should have 6 Main links', () => {
				expect(navBarWrapper.find('a')).to.have.length(5);
			});

			it('should have a login link and cart link', () => {
				const loginText = navBarWrapper.find('a').nodes[0].props.children;
				expect(loginText).to.include('Log In ');

				const cartText = navBarWrapper.find('a').nodes[1].props.children;
				expect(cartText).to.include('Cart');
			});

			it('should have home, breweries, regions, and types links', () => {
				const homeText = navBarWrapper.find('Link').nodes[0].props.children;
				expect(homeText).to.include('Home');

				const breweryText = navBarWrapper.find('a').nodes[2].props.children;
				expect(breweryText).to.include('Breweries');

				const regionText = navBarWrapper.find('a').nodes[3].props.children;
				expect(regionText).to.include('Regions');

				const typeText = navBarWrapper.find('a').nodes[4].props.children;
				expect(typeText).to.include('Types');
			});

			describe('Link routes', () => {

			});
		});
	});
});
