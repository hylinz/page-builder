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
  _id: any;
  title: string;
  description: string;
  settings: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface PageComponent {
  _name: string;
  _displayName: string;
  _settings?: any;
}

export interface CreatePageResponse {
  success: boolean;
  message: string;
  errors: { name?: string; message?: string }[];
  fieldValues: {
    pageTitle: string;
    pageDesc: string;
    pageUrl: string;
    pageData: string;
  };
}
