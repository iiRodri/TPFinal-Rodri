const IMGBB_API_KEY = "74c739a8e7a4f7dd35421b44718dab46";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
    const formData = new FormData();

    formData.append("image", file);

    try {
        const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!data.success) {
            throw new Error("Error al subir la imagen");
        }

        return data.data.url;
    } catch (error) {
        console.error("ImgBB error:", error);
        throw error;
    }
};