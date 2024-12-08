import { useRouter } from 'vue-router';
import apiClient from '@/api/axios';

export function Logout() {
  const router = useRouter();

  const logout = async () => {
    try {
      const authToken = localStorage.getItem('authToken'); // Retrieve token from storage
      if (!authToken) {
        console.error('No auth token found');
        return;
      }

      const response = await apiClient.post('/logout', null, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Add Authorization header
        },
      });

      if (response.data.status.remarks === 'Success') {
        // Clear local storage or cookies   if needed
        localStorage.removeItem('authToken');
localStorage.removeItem('isAdmin');
        // Redirect to login
        router.push('/login');
      } else {
        console.error('Logout failed:', response.data.status.message);
        // Optional: notify the user of failure
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Optional: show user-friendly error message
    }
  };

  return { logout };
}