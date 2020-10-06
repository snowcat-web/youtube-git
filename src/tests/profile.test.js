import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from '../components/Profile/Profile';
import { BrowserRouter } from 'react-router-dom';
import {LoginStatus} from '../components/Login/LoginStatus';
jest.mock('../components/Login/LoginStatus');

const userData = {
    name: 'testUser',
    image: 'testImage.png'
}

describe('Displayed user data in top bar', () => {
    it('displays user image when logged', () => {
        LoginStatus.mockImplementation(() => userData);
        LoginStatus();                
        const container = shallow(<Profile/>)        
        expect(container.find('img').props().src).toEqual(userData.image);        
    });

    it('displays user name when logged', () => {
        LoginStatus.mockImplementation(() => userData);
        LoginStatus();        
        render(<Profile />);        
        expect(screen.getByText(userData.name)).toBeTruthy();
        
    });

    it('displays generic user image when not logged', () => {
        let image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        LoginStatus.mockImplementation(() => null);
        LoginStatus();                
        const container = shallow(<Profile/>)        
        expect(container.find('img').props().src).toEqual(image);        
    });

    it('displays generic user name when not logged', () => {
        let name = "?";
        LoginStatus.mockImplementation(() => null);
        LoginStatus();        
        render(<BrowserRouter> <Profile /> </BrowserRouter>);
        expect(screen.getByText(name)).toBeTruthy();        
    });

    it('displays log out link when logged', () => {
        LoginStatus.mockImplementation(() => userData);
        LoginStatus();        
        render(<Profile />);        
        expect(screen.getByText("Log out")).toBeTruthy();        
    });

    it('displays login link when not logged', () => {        
        LoginStatus.mockImplementation(() => null);
        LoginStatus();        
        render(<BrowserRouter> <Profile /> </BrowserRouter>);
        expect(screen.getByText("Login")).toBeTruthy();        
    });

});