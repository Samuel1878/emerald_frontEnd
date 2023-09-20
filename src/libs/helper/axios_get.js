import axios from "axios"

export const InstanceReq = async(option) => {
     try {
          const response = await axios.request(option);
          return response?.data;
        } catch (error) {
          console.debug(error);
        }
}