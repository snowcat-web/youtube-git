import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Toolbar from '../components/Toolbar/Toolbar';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';

describe("fire-event examples", () => {
    it("updates search box on typing", () => {
      render(<BrowserRouter> <Toolbar /> </BrowserRouter> );
  
      const input = screen.getByRole("textbox");
  
      fireEvent.change(input, { target: { value: "holi" } });
  
      expect(screen.getByDisplayValue("holi")).toBeTruthy();
    }); 

    /*it("triggers the search when 'Enter' key is pressed", () => {
        const onSearchChange = jest.fn();        
        render(<BrowserRouter> 
                            <Toolbar onInputChange={onSearchChange} onSearchChange={onSearchChange} />
                </BrowserRouter> );
    
        const input = screen.getByRole("textbox");
        
        fireEvent.change(input, { target: { value: "test" } });
    
        fireEvent.keyDown(input, { key: "Enter" });

        console.log(input);
    
        expect(onSearchChange).toHaveBeenCalledTimes(1);
      });*/

  });
