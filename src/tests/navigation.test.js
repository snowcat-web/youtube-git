import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toolbar from '../components/Toolbar/Toolbar'
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

let container = null;

describe("Navigation", () => {

    it("checks placeholder", () => {
      render(<BrowserRouter><Toolbar placeholder="placeholderTest" /> </BrowserRouter>);
      expect(screen.getAllByRole("textbox").length).toBe(1);
      expect(screen.getByPlaceholderText('placeholderTest'));
    });
  
  
});

describe("Login page", () => {
    it("checks 2 buttons render in login page", () => {
      render(<Login />);
      expect(screen.getAllByRole("button").length).toBe(2);
    });

    it("checks button", () => {
      /*const onSearch = jest.fn();
      render(<Login onClick={onSearch} />);

      const button = screen.getByText("Login");

      fireEvent.click(button);

      expect(onSearch).toHaveBeenCalledTimes(1);*/
      const onSearch = jest.fn();

      const wrapper = shallow(<Login
        onClick={onSearch}
      />);
      //console.log(wrapper.debug())

      //wrapper.find('button[type="button"]').at(0).simulate('click');
      //wrapper.find('button[inputColor="rebeccapurple"]').at(0).simulate('click')
      //expect(onSearch).toHaveBeenCalledTimes(1);

  });
});
  
