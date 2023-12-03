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

  export interface FormResponse {
    success: boolean;
    message: string;
    errors: any[]; // This can be a specific type for errors if needed
    fieldValues: { [key: string]: any }; // Index signature for flexible key-value pairs
  }
  
  export interface Page {
      _id: any; // Assuming ObjectId is a specific type
      title: string;
      body: any[]; // You might specify a more specific type than `any[]`
      template: string;
      settings: any[]; // You might specify a more specific type than `any[]`
      createdAt: Date;
      updatedAt: Date;
      __v: number;
  }

  