import { PixabayResponse } from "@/types/pixabay";
import pixabayClient from "@/utils/httpClient";

class PixabayService {
  /**
   * Fetch images from Pixabay API
   * @param searchName - The search query string
   * @param page - The page number for pagination
   * @returns Promise<PixabayResponse>
   */

  async fetchImages(searchName: string, page: number): Promise<PixabayResponse> {
    try {
      const response = await pixabayClient.get<PixabayResponse>('', {
        params: {
          q: searchName,  
          page,           
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  }

  /**
   * Fetch a single image by ID (example method)
   * @param id - The ID of the image
   * @returns Promise<PixabayImage>
   */
  async fetchImageById(id: number): Promise<PixabayResponse> {
    try {
      const response = await pixabayClient.get<PixabayResponse>('', {
        params: {
          id,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching image by ID:', error);
      throw error;
    }
  }
}

export default new PixabayService();
