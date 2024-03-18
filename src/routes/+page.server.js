import { uploadFile } from '@uploadcare/upload-client';
import { UPLOADCARE_API_KEY } from '$env/static/private';

export const actions = {
    default: async({request}) => {
        let formData = await request.formData();
        let file = formData.get('file');
        await uploadFile(file, {
			publicKey: UPLOADCARE_API_KEY,
		});
    }
}