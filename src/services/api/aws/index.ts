import api from '@/services/api'

export const s3ImageUpload = async (formData: FormData) => {
  return api.post('/aws/s3/upload', { file: formData })
}
