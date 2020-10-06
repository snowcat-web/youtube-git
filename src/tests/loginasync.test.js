import React from 'react';
import { login } from '../components/Login/LoginInfo';

describe("get user login response", () => {    
    it("retrieves correct user response", async () => {
      const user = "User";
      const pass = "User";  
      const result = await login(user, pass);
      
      const data = JSON.parse(result);

      expect(data.response).toBe(true);      
    });
      
    it("returns error due to incorrect user login", async () => {
        const user = "no";
        const pass = "no";
    
        // Then, you can await for the results
        const result = await login(user, pass);
          
        const data = JSON.parse(result);
  
        expect(data.response).toBe(false);
    });
  });