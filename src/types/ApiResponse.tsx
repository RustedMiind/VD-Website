interface ApiResponse<Type> {
  message: string;
  status: string;
  data: Type;
}
export default ApiResponse;
