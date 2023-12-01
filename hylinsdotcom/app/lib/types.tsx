export interface ActionResponse {
    success: boolean;
    message: string;
    data: {
      settings?: any[]; 
      body?: any[];     
      template?: string; 
      [key: string]: any; // Index signature for unspecified properties

    };
  }
  
  export interface BodyType {
    type?: string; 
    style?: string; 
    custom?: string; 
    text?: string; 
  }
  