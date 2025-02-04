import axios from "axios";
import {environment} from '@/components/environment';
import Swal from 'sweetalert2'

const baseUrl = environment.URL;

export const fetch = async (endpoint:any) => {
    try {
      const response = await axios.get(`${baseUrl}/${endpoint}`); // Replace with your endpoint
      console.log("blogs:", response.data.data.data); 
    
    return response.data.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return null;
    }
  };


  export const post = async (endpoint:any, formData: any) => {
    try {
      const response = await axios.post(`${baseUrl}/${endpoint}`, formData); // Replace with your endpoint
    //   console.log("Form submitted successfully:", response.data);
    Swal.fire({
      title: "Success!",
      text: response.data.message,
      icon: "success",
    });
    window.location.reload()
      return response.data;
    } catch (error) {
    //   console.error("Error submitting form:", error);
    return null;
    }
  };

  export const upload = async (endpoint: any, formData: any) => {
    try {
      const response = await axios.post(`${endpoint}`, formData); // Replace with your endpoint
      //   console.log("Form submitted successfully:", response.data);
      Swal.fire({
        title: "Success!",
        text: response?.data?.message,
        icon: "success",
      });
      return response.data;
    } catch (error) {
      // alert("An error occurred");
      //   console.error("Error submitting form:", error);
      return null;
    }
  };
