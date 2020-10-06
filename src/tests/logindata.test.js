import React from 'react';
import {LoginStatus} from '../components/Login/LoginStatus';

jest.mock("../components/Login/LoginStatus", () => {

    return {
      LoginStatus: jest.fn(() => {
        return { name: "test", image: "imageTest" };
      })
    };
});

describe("Profile data Response", () => {
    it("checks name response", () => {    
      const result = LoginStatus();
      expect(result.name).toBe("test");
      expect(result.image).toBe("imageTest");
  
    });
});
